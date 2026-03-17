import { ToolLayout } from '@/components/ToolLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI FAQ Generator — Free Tool | GeoGain',
  description: 'Enter a topic and get a comprehensive FAQ list for your website or content. Free, no signup required.',
}

export default function FaqGeneratorPage() {
  return (
    <ToolLayout
      config={{
        tool: 'faq-generator',
        title: 'AI FAQ Generator',
        description: 'Enter a topic and get 8-10 frequently asked questions with answers — perfect for websites and content.',
        placeholder: 'Enter a topic...\n\nExample: "Starting a business in the Philippines"',
      }}
    />
  )
}
