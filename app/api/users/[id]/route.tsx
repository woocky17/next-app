import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const id = (await params).id;
  if (id > 10)
    return NextResponse.json([{ error: "User not found" }, { status: 404 }]);

  return NextResponse.json([
    { id: 1, name: "david" },
    { id: 2, name: "jose" },
  ]);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const id = (await params).id;
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const id = (await params).id;
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({}, { status: 200 });
}
