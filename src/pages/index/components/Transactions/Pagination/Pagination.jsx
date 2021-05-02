import React, { useCallback, useEffect, useState, memo } from 'react'
import './Pagination.css'

const noopFunc = () => {}

const Pagination = (props) => {
    const { pageSize = 5, current = 1, totalPage, handlePagination = noopFunc } = props
    const [currentPage, setCurrentPage] = useState(current)
    const [pages, setPages] = useState([])
    useEffect(() => {
        setPages(() => {
            return new Array(totalPage).fill(true).map((_, index) => {
                return {
                    page: index + 1,
                    key: index
                }
            })
        })
    }, [totalPage]);

    const handlePage = useCallback((page) => {
        handlePagination && handlePagination(page)
        setCurrentPage(page)
    }, [handlePagination]);

    return (
        <div className="pagination">
            {
                pages.map(item => {
                    return (
                        <span
                            className={`pagination-item ${currentPage === item.page ? 'pagination-active' : ''}`} key={item.key}
                            onClick={() => handlePage(item.page)}
                        >
                            {item.page}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default memo(Pagination)
