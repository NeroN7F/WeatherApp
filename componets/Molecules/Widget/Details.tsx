import React from "react";

import WidgetDetail from "@/componets/Atoms/Widget/Detail";
import Stripe from "@/componets/Atoms/Stripe";

import styles from '@/styles/detailsWidget.module.scss'

export type Details = {
    cloudy: number,
    humidity: number,
    wind: number,
    rain: number
}

export interface WeatherParams {
    title: string,
    value: number,
    measurement: '%' | 'mm' | 'km/h'
}

const DetailsWidget: React.FC<Details> = ({cloudy, humidity, wind, rain}) => {

    let params: WeatherParams[] = [
        {title: 'Cloudy', value: cloudy, measurement: '%'},
        {title: 'Humidity', value: humidity, measurement: '%'},
        {title: 'Wind', value: wind, measurement: 'km/h'},
        {title: 'Rain', value: rain, measurement: 'mm'},
    ]

    return (
        <div className={styles.widgetDetailsContainer}>
            <div className={styles.basis}>
                <h3 className={styles.separator}>Weather Details</h3>
            </div>

            <div className={styles.basis}>
                {
                    params.map((param, index) => (
                        <WidgetDetail key={index} data={param.value + param.measurement}>{param.title}</WidgetDetail>
                    ))
                }
            </div>

            <Stripe/>
        </div>
    )
}

export default DetailsWidget