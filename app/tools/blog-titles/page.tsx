import { ToolLayout } from '@/components/ToolLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Blog Title Generator — Free Tool | GeoGain',
  description: 'Enter a topic and get 10 click-worthy, SEO-optimized blog titles. Free, no signup required.',
}

export default function BlogTitlesPage() {
  return (
    <ToolLayout
      config={{
        tool: 'blog-titles',
        title: 'AI Blog Title Generator',
        description: 'Enter a topic or keyword and get 10 click-worthy blog titles optimized for engagement and SEO.',
        placeholder: 'Enter a topic or keyword...\n\nExample: "passive income for beginners"',
      }}
    />
  )
}
