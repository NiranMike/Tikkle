import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <article className="product-card">
            <Link href={`/products/${product.slug}`}>
                <img src={`/assets/${product.slug}.png`} alt={product.name} />
            </Link>
            <header>
                <p>{product.name}</p>
            </header>
            <footer>
                <Link className="more" href={`/products/${product.slug}`}>
                    See More -&gt;
                </Link>
                <div>
                    <span className="pill">{product.category} </span>
                </div>
            </footer>
        </article>
    )
}
