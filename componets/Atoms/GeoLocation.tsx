"use client"

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {setUserLocation} from "@/store/actions";
import {useRouter} from "next/navigation";

const GeoLocationFetcher = () => {
    const router = useRouter()
    const dispatch = useDispatch();

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    console.log(latitude, longitude)
                    dispatch(setUserLocation({latitude, longitude}));
                    // router.push(`/${latitude},${longitude}`)
                },
            );
        }
    }, [dispatch]);

    return null;
};

export default GeoLocationFetcher;
