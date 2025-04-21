import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
