import { NextRequest, NextResponse } from "next/server";

export function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Apple",
      price: 2.5,
    },
    { id: 2, name: "Bread", price: 3.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Not Data" });
  }

  return NextResponse.json({
    id: 10,
    name: "hello",
    price: 10,
  });
}
