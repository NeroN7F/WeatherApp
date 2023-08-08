import React from "react";


import styles from '@/styles/faceWidget.module.scss'
import Image from "next/image";

export type FaceData = {
    degrees: number,
    condition: string,
    city: string,
    date: string,
    icon: string
}

const FaceWidget: React.FC<FaceData> = ({degrees, condition, city, date, icon}) => {
    return (
        <div className={styles.faceWidgetContainer}>
            <p className={`${styles.faceWidget} xl2`}>{degrees}&deg;</p>

            <div className={styles.widgetData}>
                <span className={styles.title}>{city}</span>
                <p className={styles.dateTitle}>{date}</p>
            </div>
            <div className={styles.widgetData}>
                <Image src={`https:${icon}`} alt={condition} width={100} height={100}/>
                <p className={styles.conditionTitle}>{condition}</p>
            </div>
        </div>

    )
}

export default FaceWidget