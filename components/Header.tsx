import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-brand-accent font-bold text-xl">GeoGain</span>
          <span className="text-white/60 text-sm font-medium">Tools</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <Link href="/tools/prompt-optimizer" className="hover:text-white transition">Prompt Optimizer</Link>
          <Link href="/tools/reply-generator" className="hover:text-white transition">Reply Generator</Link>
          <Link href="/tools/faq-generator" className="hover:text-white transition">FAQ Generator</Link>
          <Link href="/tools/blog-titles" className="hover:text-white transition">Blog Titles</Link>
          <Link href="/resources" className="hover:text-brand-accent text-brand-accent/70 font-medium transition">Resources</Link>
        </nav>
      </div>
    </header>
  )
}
