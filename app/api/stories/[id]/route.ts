import { NextResponse } from "next/server";
import { prisma } from "@/lib/data";

// PUT: Update a story
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const id = Number(params.id);
    const updateData = { ...body };
    
    // If updating stats, we must re-stringify them
    if (body.stats) {
      updateData.stats = JSON.stringify(body.stats);
    }

    const updated = await prisma.successStory.update({
      where: { id },
      data: updateData
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// DELETE: Remove a story
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    await prisma.successStory.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}