import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <h1>Hellow There , i'm come from main page</h1>
      <Link href={"pages/home"}>Checkout our home page</Link>
      <br />
      <Link href={"pages/about/US?name=Hugo"}>About us</Link>
      <br />
      <Link href={"pages/home"}>Buy ChessBoard</Link>
      <br />
    </>
  );
}
