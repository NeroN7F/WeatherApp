import styles from '@/styles/detailsWidget.module.scss'

import {ReactNode} from "react";
import Link from "next/link";

const WidgetDetail = (props: { children: ReactNode, data?: string | number, link?: string, currentCity?: string }) => {

    return (
        <div className={styles.widgetDetail}>
            {!props.link ? <p>{props.children}</p> : <Link href={props.link} style={props.link === props.currentCity ? {color: 'rgba(255,255, 255, .5)'} : {} } >{props.children}</Link>}
            {props.data ? <p>{props.data}</p> : <></>}
        </div>
    )
}

export default WidgetDetail