import { NextResponse } from "next/server";
import { prisma } from "@/lib/data";

// GET: Fetch stories (Filtered by ?pageKey=...)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageKey = searchParams.get("pageKey");

  try {
    const stories = await prisma.successStory.findMany({
      where: pageKey ? { pageKey } : {}, // 👈 Filter by pageKey
      orderBy: { createdAt: 'desc' }
    });

    // Parse the 'stats' string back into JSON array for the frontend
    const parsedStories = stories.map(s => ({
      ...s,
      stats: JSON.parse(s.stats) 
    }));
    
    return NextResponse.json(parsedStories);
  } catch (error) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}

// POST: Create new story (Saves pageKey)
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.pageKey) {
      return NextResponse.json({ error: "pageKey is required" }, { status: 400 });
    }

    // We must stringify the 'stats' array before saving to DB
    const story = await prisma.successStory.create({
      data: {
        pageKey: body.pageKey, // 👈 Save the key
        name: body.name,
        role: body.role,
        image: body.image,
        videoThumbnail: body.videoThumbnail,
        quote: body.quote,
        story: body.story,
        stats: JSON.stringify(body.stats) // Array -> String
      }
    });
    return NextResponse.json(story, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Create failed" }, { status: 500 });
  }
}