"use client";

import { GET as GetProducts } from "@/app/api/products/route";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default async function Quiz() {
  const showData = async () => {
    const data = await fetch("http://localhost:3000/api/todo");
    const content = await data.json();
    console.log(content);
  };

  const showResp = async () => {
    const data = GetProducts();
    const content = await data.json();
    console.log(content);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => {
          showResp();
        }}
        variant="outlined"
      >
        Send Request
      </Button>
    </Stack>
  );
}
