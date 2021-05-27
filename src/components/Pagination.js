import React from 'react'
import './Pagination.css'
const Pagination = ({ banksperPage, totalBanks,paginate,prevPage,nextPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalBanks / banksperPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav> 
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href='#' onClick={()=>prevPage()}>Previous</a>
                </li>
                {pageNumbers.map(num => (
                    <li key={num} className='page-item' >
                        <a onClick={()=>paginate(num)} href='!#' className='page-link'  >
                            {num}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href='#' onClick={()=>nextPage()}>Next</a>
                </li>
            </ul> 
        </nav>
    )
}

export default Pagination
