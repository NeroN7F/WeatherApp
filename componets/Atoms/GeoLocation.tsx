"use client"

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {setUserLocation} from "@/store/actions";

const GeoLocationFetcher = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    dispatch(setUserLocation({latitude, longitude}));
                },
            );
        }
    }, [dispatch]);

    return null;
};

export default GeoLocationFetcher;
