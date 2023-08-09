import styles from '@/styles/detailsWidget.module.scss'

import WidgetDetail from "@/componets/Atoms/Widget/Detail";
import Stripe from "@/componets/Atoms/Stripe";
import React from "react";

const ListWidget = (props: { currentCity: string }) => {

    let cities = ['Tashkent', 'Buhara', 'Samarqand', 'Namangan', 'Andijan', 'Fergana', 'Jizzakh', 'Navoiy', 'Kashkadarya',
        'Nukus', 'Khorezm', 'Surkhandarya'
    ]

    return (
        <div className={styles.widgetDetailsContainer}>
            <div className={styles.basis} style={{maxHeight: '200px', overflowY: "auto"}}>
                {cities.map((city, index) => (
                    <WidgetDetail key={index} link={city.toLowerCase()}
                                  currentCity={props.currentCity}>{city}</WidgetDetail>
                ))}
            </div>

            <Stripe/>
        </div>
    )


}

export default ListWidget