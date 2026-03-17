'use client'

import { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface ToolConfig {
  tool: string
  title: string
  description: string
  placeholder: string
  extraFields?: {
    name: string
    label: string
    type: 'select'
    options: { value: string; label: string }[]
  }[]
}

export function ToolLayout({ config }: { config: ToolConfig }) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [remaining, setRemaining] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [extraValues, setExtraValues] = useState<Record<string, string>>({})

  async function handleGenerate() {
    if (!input.trim()) return
    setLoading(true)
    setError('')
    setOutput('')
    setCopied(false)

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool: config.tool,
          input: input.trim(),
          options: extraValues,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        if (typeof data.remaining === 'number') setRemaining(data.remaining)
        return
      }

      // Strip HTML tags from AI output to prevent XSS, keep markdown
      const safe = (data.output as string).replace(/<[^>]*>/g, '')
      setOutput(safe)
      if (typeof data.remaining === 'number') setRemaining(data.remaining)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">{config.title}</h1>
        <p className="text-white/50 mb-8">{config.description}</p>

        {/* Input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={config.placeholder}
          className="w-full h-40 bg-brand-surface border border-brand-border rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent/50 resize-none text-sm"
          maxLength={5000}
        />

        {/* Extra fields (e.g., tone selector) */}
        {config.extraFields?.map((field) => (
          <div key={field.name} className="mt-4">
            <label className="block text-sm text-white/60 mb-1">{field.label}</label>
            <select
              value={extraValues[field.name] || field.options[0]?.value || ''}
              onChange={(e) => setExtraValues({ ...extraValues, [field.name]: e.target.value })}
              className="bg-brand-surface border border-brand-border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-accent/50"
            >
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        ))}

        {/* Actions row */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="bg-brand-accent text-brand-dark font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition text-sm"
          >
            {loading ? 'Generating (may take up to 30s)...' : 'Generate'}
          </button>

          {remaining !== null && (
            <span className="text-xs text-white/40">
              {remaining} free {remaining === 1 ? 'use' : 'uses'} remaining today
            </span>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-800/50 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* Output */}
        {output && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-white/60">Result</h2>
              <button
                onClick={handleCopy}
                className="text-xs text-brand-accent hover:text-brand-accent/80 transition"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div
              className="bg-brand-surface border border-brand-border rounded-lg p-5 text-white/90 text-sm leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: output
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/\n/g, '<br/>'),
              }}
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
