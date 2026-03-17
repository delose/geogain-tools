import { ToolLayout } from '@/components/ToolLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Prompt Optimizer — Free Tool | GeoGain',
  description: 'Paste any AI prompt and get an optimized version with reasoning. Free, no signup required.',
}

export default function PromptOptimizerPage() {
  return (
    <ToolLayout
      config={{
        tool: 'prompt-optimizer',
        title: 'AI Prompt Optimizer',
        description: 'Paste any prompt and get a better version with clear reasoning on what was improved.',
        placeholder: 'Paste your prompt here...\n\nExample: "Write me a blog about AI"',
      }}
    />
  )
}
