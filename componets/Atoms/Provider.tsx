"use client"

import {Provider} from 'react-redux';
import store from '@/store/store';

import {ReactNode} from "react";

const ProviderComponent = (props: { children: ReactNode }) => {
    return (
        <>
            <Provider store={store}>
                {props.children}
            </Provider>
        </>
    )
}

export default ProviderComponent