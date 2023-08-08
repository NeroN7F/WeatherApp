import '../../styles/globals.scss'

import type {Metadata} from 'next'
import Widgets from "@/componets/Organisms/Widgets";

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
    params: {city: string}
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
        </body>
        </html>
    )
}
