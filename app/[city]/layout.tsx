import '../../styles/globals.scss'

import type {Metadata} from 'next'
import Widgets from "@/componets/Organisms/Widgets";
import GeoLocation from "@/componets/Atoms/GeoLocation";
import Provider from "@/componets/Atoms/Provider";

export const metadata: Metadata = {
    title: {
        default: 'Weather | the.weather',
        template: '%s | the.weather '
    },
}

export default function RootLayout({
                                       children, params
                                   }: {
    children: React.ReactNode,
    params: { city: string }
}) {
    return (
        <html lang="en">
        <body>
        <section className="home">
            {children}
            <div className="widgets">
                <Widgets city={params.city}/>
            </div>
        </section>

        <Provider>
            <GeoLocation/>
        </Provider>
        </body>
        </html>
    )
}
