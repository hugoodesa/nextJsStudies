import { NextResponse, NextRequest } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { item: string } }
) => {
  console.log(request.nextUrl);

  const products = [
    { id: 1, name: "Hugo" },
    { id: 2, name: "Luiz" },
    { id: 3, name: "Stapassoli" },
    { id: 4, name: "Sá" },
  ];

  console.log(params?.item);

  return NextResponse.json(products);
};
