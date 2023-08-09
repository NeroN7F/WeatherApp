import React from "react";

import {useMoment} from "@/hooks/useMoment";
import {useDayOfWeek} from "@/hooks/useDayOfWeek";

import Image from "next/image";

import CounterAnimation from "@/componets/Atoms/Degrees";
import TextEffect from "@/componets/Atoms/Effect/Text";

import styles from '@/styles/faceWidget.module.scss'

export type FaceData = {
    degrees: number,
    condition: string,
    city: string,
    date: string,
    icon: string
}

const FaceWidget: React.FC<FaceData> = ({degrees, condition, city, date, icon}) => {
    let currentDate = new Date()

    let tzDate = date.split(' ')
    let year = currentDate.getFullYear().toString().split('20')[1]

    let tzDateSplit = tzDate[0].split('-')

    let formedDate = `${tzDate[1]} - ${useDayOfWeek(tzDateSplit[0], tzDateSplit[1], tzDateSplit[2])}, ${useMoment(tzDate[0])} '${year}`

    return (
        <div className={styles.faceWidgetContainer}>
            <CounterAnimation target={degrees}/>

            <div className={styles.widgetData}>
                <TextEffect className={styles.title}>{city}</TextEffect>
                <TextEffect className={styles.dateTitle}>{formedDate}</TextEffect>
            </div>
            <div className={styles.widgetData}>
                <Image src={`https:${icon}`} alt={condition} width={80} height={80}/>
                <p className={styles.conditionTitle}>{condition}</p>
            </div>
        </div>

    )
}

export default FaceWidget