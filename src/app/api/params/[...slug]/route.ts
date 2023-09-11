import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: Request,
  {
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
) => {
  const slug = params.slug; // 'a', 'b', or 'c'

  console.log(`search params: ${searchParams?.name}`);

  return NextResponse.json({ message: "OK", byPath: slug });
};
