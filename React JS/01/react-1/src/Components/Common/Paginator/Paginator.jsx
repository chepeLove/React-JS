import style from './Paginator.module.css'
import React from "react";


let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return (<span className={currentPage === p && style.selectedPage}
                          onClick={(event) => {
                              onPageChanged(p)
                          }}>{p}</span>)
        })}
    </div>

}


export default Paginator