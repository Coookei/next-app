import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: id, name: "Bob" });
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: id, name: body.name }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({});
}
