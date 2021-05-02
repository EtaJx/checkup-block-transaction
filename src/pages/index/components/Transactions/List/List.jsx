import React, { useEffect, useCallback, useState, memo } from 'react'
import Item from './Item'
import Pagination from '../Pagination';
import './List.css'
const List = (props) => {
    const { data } = props
    const [currentPage, setCurrentPage] = useState(1)
    const [currentData, setCurrentData] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    useEffect(() => {
        if (data.length !== 0) {
            const pageSize = 5;
            const tempData = data.reduce((prev = [], current, index, arr) => {
                const curStep = arr.slice(prev.length * pageSize, (prev.length + 1) * pageSize)
                if (!!curStep.length) {
                    prev.push(curStep)
                }
                return prev
            }, [])
            setCurrentData(tempData[currentPage - 1])
            setTotalPage(tempData.length)
        }
    }, [data, currentPage])

    const handlePagination = useCallback((page) => {
        setCurrentPage(page)
    }, []);

    return (
        <div>
            {
                currentData.map(item => {
                    const { tx_index } = item
                    return (
                        <Item
                            key={tx_index}
                            item={item}
                        />
                    )
                })
            }
            <Pagination
                handlePagination={handlePagination}
                totalPage={totalPage}
            />
        </div>
    )
}

export default memo(List)
