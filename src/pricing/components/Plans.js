export default function Plans({plans}) {
    const plan = plans[0]
    return (
        <div className="bg-salmon border-right">
            <div className="column-padding center">
                <div className="callout-wrap">
                    <div className="plan">
                        <div className="plan-wrap">
                            <div className="plan-switch">
                                Monthly
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider" />
                                </label>
                                Yearly
                            </div>
                            <h2 className="plan-name">{plan.name}</h2>
                            <div>Just $ {plan.price} / {plan.interval}</div>
                            <div>
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
