import Link from "next/link";
import { getProducts, priceOf, formatMoney } from "@/lib/fourthwall";

export const revalidate = 60;

export default async function HomePage() {
  const { products } = await getProducts();
  return (
    <main>
      <h1>Shop</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
        {products.map((product) => {
          const image = product.images?.[0];
          return (
            <Link key={product.id} href={`/products/${product.slug}`}>
              {image ? <img src={image.url} alt={product.name} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }} /> : null}
              <h2 style={{ fontSize: 16 }}>{product.name}</h2>
              <p>{formatMoney(priceOf(product))}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
