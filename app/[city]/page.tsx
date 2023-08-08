import {Suspense} from "react";

import FaceWidget from "@/componets/Molecules/Widget/Face";

import {Weather} from "@/env";
import Abstraction from "@/componets/Atoms/Abstraction";

export default async function Page({params}: { params: { city: string } }) {

    const fetchWeather = async () => {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY} &q=${params.city}&aqi=no`, {
            next: {
                revalidate: 20
            }
        })
        return res.json()
    }

    const data: Weather = await fetchWeather()

    console.log(data)

    return (
        <Abstraction condition={data?.current.condition.code}>
            <p className='title'>the.weather</p>

            <Suspense>
                <FaceWidget degrees={data?.current?.temp_c} city={data?.location?.name} condition={data?.current?.condition?.text} date={data?.location?.localtime} icon={data.current.condition.icon}/>
            </Suspense>
        </Abstraction>
    )
}