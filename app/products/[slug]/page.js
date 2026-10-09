import { getProduct, priceOf, formatMoney } from "@/lib/fourthwall";
import { notFound } from "next/navigation";
import { AddToCart } from "../../add-to-cart";

export const revalidate = 60;

export default async function ProductPage({ params }) {
  const { slug } = await params;
  let product;
  try {
    product = await getProduct(slug);
  } catch {
    notFound();
  }
  const image = product.images?.[0];
  return (
    <main>
      {image ? <img src={image.url} alt={product.name} style={{ width: "100%", maxWidth: 480 }} /> : null}
      <h1>{product.name}</h1>
      <p>{formatMoney(priceOf(product))}</p>
      {product.description ? <div dangerouslySetInnerHTML={{ __html: product.description }} /> : null}
      <AddToCart product={product} />
    </main>
  );
}
