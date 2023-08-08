"use client"

import SearchButton from "@/componets/Atoms/Button/Search";
import {useState, useCallback, useMemo, ChangeEvent} from "react";
import Stripe from "@/componets/Atoms/Stripe";

import {useRouter} from "next/navigation";

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
    }, []);

    const debouncedSearch = useMemo(() => debounce(performSearch, 1000), [performSearch]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;

        setSearchQuery(newSearchTerm);
        debouncedSearch(newSearchTerm);
    };

    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} type='text' placeholder='Another Location' value={search} onChange={handleInputChange}/>

            <Stripe active={Boolean(search.length)}/>

            <SearchButton/>
        </div>
    )
}

export default Search