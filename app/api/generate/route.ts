import { NextRequest, NextResponse } from 'next/server'
import { chatCompletion } from '@/lib/openrouter'
import { TOOL_PROMPTS, VALID_TOOLS } from '@/lib/prompts'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

  const { allowed, remaining } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Daily limit reached. Sign up for more free uses.', remaining: 0 },
      { status: 429 }
    )
  }

  let body: { tool: string; input: string; options?: Record<string, string> }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { tool, input, options } = body

  if (!tool || !VALID_TOOLS.includes(tool)) {
    return NextResponse.json({ error: 'Invalid tool' }, { status: 400 })
  }

  if (!input || typeof input !== 'string' || input.trim().length === 0) {
    return NextResponse.json({ error: 'Input is required' }, { status: 400 })
  }

  if (input.length > 5000) {
    return NextResponse.json({ error: 'Input too long (max 5000 characters)' }, { status: 400 })
  }

  const toolConfig = TOOL_PROMPTS[tool]
  const userMessage = toolConfig.formatInput(input.trim(), options)

  const output = await chatCompletion([
    { role: 'system', content: toolConfig.system },
    { role: 'user', content: userMessage },
  ])

  if (!output) {
    return NextResponse.json({ error: 'AI generation failed. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ output, remaining })
}
