const Stripe = (props: { active?: boolean }) => {
    return (
        <div style={{height: '1px', backgroundColor: 'rgba(255, 255, 255, .2)', width: '100%', transition: '1s ease'}}
             className={`${props.active && 'activeStripe'}`}></div>
    )
}

export default Stripe