import { ToolLayout } from '@/components/ToolLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Reply Generator — Free Tool | GeoGain',
  description: 'Paste an email or message, pick a tone, and get a ready-to-send reply. Free, no signup required.',
}

export default function ReplyGeneratorPage() {
  return (
    <ToolLayout
      config={{
        tool: 'reply-generator',
        title: 'AI Reply Generator',
        description: 'Paste an email or message, pick a tone, and get a ready-to-send reply in seconds.',
        placeholder: 'Paste the message you want to reply to...',
        extraFields: [
          {
            name: 'tone',
            label: 'Tone',
            type: 'select',
            options: [
              { value: 'professional', label: 'Professional' },
              { value: 'casual', label: 'Casual' },
              { value: 'friendly', label: 'Friendly' },
              { value: 'firm', label: 'Firm' },
              { value: 'apologetic', label: 'Apologetic' },
            ],
          },
        ],
      }}
    />
  )
}
