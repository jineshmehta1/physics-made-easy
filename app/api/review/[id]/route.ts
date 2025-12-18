import { NextResponse } from "next/server";
import { prisma } from "@/lib/data";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    // We convert string ID to Number because ID is an Int in Prisma
    const id = Number(params.id);

    await prisma.review.delete({ 
      where: { id } 
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}