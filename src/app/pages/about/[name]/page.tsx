"use client";

import { useSearchParams } from "next/navigation";

export default function About({ params }: { params: { about: string } }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("name");

  return (
    <h1>
      Hellow There , i'm come from about {params.about} and the search was :{" "}
      {search}{" "}
    </h1>
  );
}
