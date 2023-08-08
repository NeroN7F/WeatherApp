import {ReactNode} from "react";
import {weatherGradient} from "@/utils/weatherGradient";

// To Avoid SSR Deoption

const Abstraction = (props: { children: ReactNode, condition: number }) => {

    return (
        <div className={`content ${weatherGradient(props.condition)}`}>
            {props.children}
        </div>
    )
}

export default Abstraction