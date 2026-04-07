import Groq from 'groq-sdk';

import type { NextApiRequest, NextApiResponse } from 'next';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const buildSystemPrompt = (purpose: string, tone: string): string => {
  const purposeHint = purpose ? `The text is intended for: ${purpose}.` : '';
  const toneHint = tone ? `Write in a ${tone} tone.` : '';

  return `You are an expert editor who rewrites AI-generated text to sound authentically human.

Your rewrites must:
- Mix short punchy sentences with longer flowing ones — vary rhythm constantly
- Use concrete details, numbers, and specific examples instead of vague generalisations
- Open sentences in different ways — not always with the subject
- Take clear stances instead of hedging everything
- Remove filler transitions: "it is worth noting", "furthermore", "in conclusion", "in today's fast-paced world", "it is important to understand"
- Add natural imperfections: dashes, fragments, rhetorical questions — used sparingly
- Preserve the original meaning, structure, and all key information exactly
- Never add new facts, opinions, or information that wasn't in the source

${purposeHint} ${toneHint}

Return ONLY the rewritten text. No commentary, no preamble, no explanation.`;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text, purpose, tone } = req.body as { text: string; purpose?: string; tone?: string };

  if (!text || text.trim().length < 20) {
    return res.status(400).json({ error: 'Text is too short' });
  }

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured' });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: buildSystemPrompt(purpose ?? '', tone ?? '') },
        { role: 'user', content: text },
      ],
      temperature: 0.8,
      max_tokens: 4096,
    });

    const result = completion.choices[0]?.message?.content ?? '';
    return res.status(200).json({ result });
  } catch (error) {
    console.error('Groq error:', error);
    return res.status(500).json({ error: 'Failed to humanize text. Please try again.' });
  }
}
