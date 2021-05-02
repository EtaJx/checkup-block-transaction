import React, { useState, useCallback, memo } from 'react'
import './Search.css'

const Search = (props) => {
    const { onSearch } = props
    const [searchStr, setSearchStr] = useState('')

    const onInputChange = useCallback((e) => {
        const value = e.target.value
        setSearchStr(value)
    }, [onSearch]);

    const handleSearch = useCallback(() => {
        onSearch && onSearch(searchStr)
    }, [searchStr]);
    return (
        <div className="search-container">
            <input
                className="search__input"
                type="text"
                placeholder="Search your transaction, an address or a block"
                onChange={onInputChange}
                value={searchStr}
            />
            <button className="search__btn" type="button" onClick={handleSearch}>SEARCH</button>
        </div>
    )
}

export default memo(Search)
