import Link from "next/link";

import {ReactNode} from "react";

import styles from '@/styles/detailsWidget.module.scss'

const WidgetDetail = (props: { children: ReactNode, data?: string | number, link?: string, currentCity?: string }) => {

    return (
        <div className={styles.widgetDetail}>
            {!props.link ? <p>{props.children}</p> : <Link href={props.link}
                                                           className={props.link.toLowerCase() === props.currentCity?.toLowerCase() ? 'active' : ''}>{props.children}</Link>}
            {props.data ? <p>{props.data}</p> : <></>}
        </div>
    )
}

export default WidgetDetail