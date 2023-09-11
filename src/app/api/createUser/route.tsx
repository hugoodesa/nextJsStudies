import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Hugo" },
  { id: 2, name: "Stapassoli" },
  { id: 3, name: "Sá" },
  { id: 4, name: "Emanoel" },
];

export const POST = async (request: Request) => {
  //const formData = await request.formData();
  //const name = formData.get("name");

  //console.log(name);

  //console.log(JSON.stringify(data));
  const user = await request.json();
  console.log(user);

  users = [...users, user];

  return NextResponse.json(users);
};

export const GET = async () => {
  return NextResponse.json(users);
};
