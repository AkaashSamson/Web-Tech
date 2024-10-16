import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>Hello From my 'next'</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </div>
  )
}