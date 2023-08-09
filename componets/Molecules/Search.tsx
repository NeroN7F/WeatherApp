"use client"

import {useState, useCallback, useMemo, ChangeEvent} from "react";
import {useRouter} from "next/navigation";

import SearchButton from "@/componets/Atoms/Button/Search";
import Stripe from "@/componets/Atoms/Stripe";

import styles from '@/styles/search.module.scss'

const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const Search = () => {

    const router = useRouter()

    let [search, setSearchQuery] = useState('')

    const performSearch = useCallback((term: string) => {
        router.push(`/${term}`)
    }, [router]);

    const debouncedSearch = useMemo(() => debounce(performSearch, 1000), [performSearch]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;

        setSearchQuery(newSearchTerm);
        debouncedSearch(newSearchTerm);
    };

    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} type='text' placeholder='Another location' value={search}
                   onChange={handleInputChange}/>

            <Stripe active={Boolean(search.length)}/>

            <SearchButton/>
        </div>
    )
}

export default Search