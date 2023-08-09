'use client'

import {useRouter} from "next/navigation";

function Error({error, reset}: { error: Error; reset: () => void; }) {
    const router = useRouter()

    return (
        <div className='content'>
            <p className='error'>404</p>
            <p className='error'>City not found!</p>
        </div>
    );
}

export default Error

