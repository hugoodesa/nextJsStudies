import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { code: string } }
) => {
  const body = {
    id: 1,
    question: "Whitch its is your favorite color ?",
    anwsers: ["red", "yellow", "green"],
  };

  return NextResponse.json(body);
};
