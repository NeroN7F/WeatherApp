"use client"

import {useRef} from "react";

import styles from '@/styles/detailsWidget.module.scss'

import WidgetDetail from "@/componets/Atoms/Widget/Detail";
import Stripe from "@/componets/Atoms/Stripe";
import React from "react";

import {useVirtualizer} from '@tanstack/react-virtual'

const ListWidget = (props: { currentCity: string }) => {

    const parentRef = useRef(null)

    let cities = ['Tashkent', 'Buhara', 'Samarqand', 'Namangan', 'Andijan', 'Fergana', 'Jizzakh', 'Navoiy', 'Kashkadarya',
        'Nukus', 'Khorezm', 'Surkhandarya'
    ]

    const listVirtualizer = useVirtualizer({
        count: cities.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 50,
        overscan: 5,
    })

    return (
        <div className={styles.widgetDetailsContainer}>
            <div
                ref={parentRef}
                className="List"
                style={{
                    height: `200px`,
                    width: '100%',
                    overflowY: 'auto',
                }}
            >
                <div
                    style={{
                        height: `${listVirtualizer.getTotalSize()}px`,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {listVirtualizer.getVirtualItems().map((virtualRow) => (
                        <div
                            key={virtualRow.index}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: `${virtualRow.size}px`,
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                        >
                            <WidgetDetail link={cities[virtualRow.index]}
                                          currentCity={props.currentCity}>{cities[virtualRow.index]}</WidgetDetail>

                        </div>
                    ))}
                </div>
            </div>
            <Stripe/>
        </div>
    )
}

export default ListWidget