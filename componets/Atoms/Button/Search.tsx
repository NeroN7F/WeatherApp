import styles from '@/styles/search.module.scss'
import Image from "next/image";

import searchIcon from '@/public/assets/icons/search.png'

const SearchButton = () => {
    return (
        <div className={styles.searchButtonContainer}>
            <div className="flex" style={{height: '100%'}}>
                <Image src={searchIcon} alt={'search'} width={35} height={35} className='m-auto' />
            </div>
        </div>
    )
}

export default SearchButton