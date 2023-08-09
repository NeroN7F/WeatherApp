import {weatherGradient} from "@/utils/weatherGradient";

import {ReactNode} from "react";

const Abstraction = (props: { children: ReactNode, condition: number }) => {

    return (
        <div className={`content`} style={{background: weatherGradient(props.condition)}}>
            {props.children}
        </div>
    )
}

export default Abstraction