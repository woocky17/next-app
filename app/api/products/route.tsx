import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

let products = [
  { id: 1, name: "Milk", price: 5.4 },
  { id: 2, name: "Neulas", price: 10.2 },
];

export function GET(request: NextRequest) {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  products = [
    ...products,
    { id: products.length + 1, name: body.name, price: body.price },
  ];
  return NextResponse.json(
    { id: products.length, name: body.name, price: body.price },
    { status: 201 }
  );
}
