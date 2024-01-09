import { NextRequest, NextResponse } from "next/server";

export function GET(
  requset: NextRequest,
  { params }: { params: { id: string } }
) {
  if (+params.id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "a" });
}
