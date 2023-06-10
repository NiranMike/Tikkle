import Link from "next/link";

export default function PromoCard() {
    return (
        <section>
            <div>
                <div>
                    <h4>Get Instant Access</h4>
                    <p style={{ fontSize:"1rem"}}>
                        Get access to this product plus many other when you subcribe.
                    </p>
                </div>
            </div>
            <Link href={'/pricing'} className="primary button">
                Purchase
            </Link>
        </section>
    )
}
