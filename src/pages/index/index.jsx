import React, { useEffect, useState, useCallback, memo } from 'react'
import Search from '@/components/Search'
import Block from './components/Block'
import Transactions from './components/Transactions';
import './index.css'

const App = () => {
    const [data, setData] = useState({})
    const [currentHash, setCurrentHash] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (currentHash) {
            setIsLoading(true)
            setData({})
            fetch(`https://blockchain.info/rawblock/${currentHash}`)
                .then(response => response.json())
                .then(res => {
                    setData(res)
                    setIsLoading(false)
                })
        }
    }, [currentHash])

    const onSearch = useCallback((value) => {
        setCurrentHash(value)
    }, []);
    return (
        <div className="App">
            <Search onSearch={onSearch} />
            <Block data={data} isLoading={isLoading} />
            <Transactions data={data.tx || []} isLoading={isLoading} />
        </div>
    )
}

export default memo(App)
