import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const tools = [
  {
    name: 'AI Prompt Optimizer',
    description: 'Paste any prompt and get an optimized version with clear reasoning on what was improved.',
    href: '/tools/prompt-optimizer',
    icon: '⚡',
  },
  {
    name: 'AI Reply Generator',
    description: 'Paste an email or message, pick a tone, and get a ready-to-send reply in seconds.',
    href: '/tools/reply-generator',
    icon: '💬',
  },
  {
    name: 'AI FAQ Generator',
    description: 'Enter a topic and get a comprehensive FAQ list — perfect for websites, blogs, or content planning.',
    href: '/tools/faq-generator',
    icon: '❓',
  },
  {
    name: 'AI Blog Title Generator',
    description: 'Enter a topic and get 10 click-worthy blog titles optimized for engagement and SEO.',
    href: '/tools/blog-titles',
    icon: '✍️',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Free AI Tools
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-2">
            No signup required. No credit card. Just useful AI tools you can use right now.
          </p>
          <p className="text-sm text-brand-accent font-medium">
            5 free uses per tool, per day
          </p>
        </section>

        {/* Tool Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-accent/50 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition">
                {tool.name}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {tool.description}
              </p>
              <span className="inline-block mt-4 text-sm text-brand-accent font-medium">
                Try Free →
              </span>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
