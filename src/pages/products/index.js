import ProductCard from "src/products/components/Card";
import { supabase } from "supabase"

export default function ProductsPage({ products }) {
    return (
        <>
            <div className="section bg-blue">
                <div className="container">
                    <div className="section-intro">
                        <h1>The Latest Products</h1>
                    </div>
                </div>
            </div>

            <div className="section small">
                <div className="container">
                    <ul className="product-card-grid">
                        {products.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    let { data: products } = await supabase.from('product').select('*');
    return {
        props: {
            products,
        }
    }
}