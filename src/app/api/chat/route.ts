import { NextRequest, NextResponse } from 'next/server';
import { askHuggingFace, searchApi } from '../../../../lib/api';

const FAQ_ANSWERS: Record<string, string> = {
  "Why should you hire me?":
    "You should hire Fardeen because he is honest, hardworking, and very passionate about his work. He consistently demonstrates integrity and dedication in every task.",
  "What do i bring to the table?":
    "Fardeen brings creativity and a diverse skill set, enabling him to complete tasks even under tight deadlines. His innovative approach helps solve problems efficiently.",
  "What are my key strengths?":
    "Fardeen excels at communicating with team members, tackling problems proactively, and adapting to new challenges. His positive attitude and resilience make him a valuable asset.",
  "How can i contribute to the team?":
    "Fardeen contributes by sharing innovative ideas, collaborating effectively, and driving projects to success. He supports his teammates and helps create a productive work environment.",
  "What makes me a good fit for this role?":
    "Fardeen is a great fit for this role due to his adaptability, technical expertise, and commitment to continuous learning. He aligns well with the team's goals and values.",
};

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();
    const trimmed = query.trim();
    if (FAQ_ANSWERS[trimmed]) {
      return NextResponse.json({ answer: FAQ_ANSWERS[trimmed], results: { results: [] } });
    }

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    // Get response from Hugging Face API
    const answer = await askHuggingFace(query);
    
    // Get search results from Google Search API
    const results = await searchApi(query);

    const response = {
      answer,
      results
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 