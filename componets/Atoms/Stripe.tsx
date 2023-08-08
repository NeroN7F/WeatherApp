const Stripe = (props: { active?: boolean }) => {

    console.log(props.active)
    return (
        <div style={{height: '1px', backgroundColor: 'rgba(255, 255, 255, .2)', width: '100%', transition: 'color .5s ease'}} className={`${props.active && 'activeStripe'}`}></div>
    )
}

export default Stripe