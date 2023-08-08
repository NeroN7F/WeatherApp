import Search from "@/componets/Molecules/Search";
import DetailsWidget from "@/componets/Molecules/Widget/Details";
import ListWidget from "@/componets/Molecules/Widget/List";

const Widgets = async (props: { city: string }) => {

    const fetchWeather = async () => {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY} &q=${props.city}&aqi=no`, {
            next: {
                revalidate: 20
            }
        })
        return res.json()
    }

    const data = await fetchWeather()

    return (
        <>
            <Search/>
            <ListWidget currentCity={props.city}/>
            <DetailsWidget cloudy={data.current.cloud} humidity={data.current.humidity} rain={data.current.precip_mm} wind={data.current.wind_kph}/>
        </>

    )
}

export default Widgets