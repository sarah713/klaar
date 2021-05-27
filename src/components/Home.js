import React,{ useEffect, useState } from 'react';
import '../App.css';
import Tables from './Tables';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Home() {
  const [q, setQ] = useState('');
  const [banks, setBanks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [banksperPage, setBanksperPage] = useState(150);
const [open,setOpen]=useState(false);

    useEffect(() => {
        console.log(banks)
        fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
            .then(res => res.json())
            .then((data) => setBanks(data));
         
    }, []);
  const indexOflastBank = currentPage * banksperPage;
  const indexofFirstBank = indexOflastBank - banksperPage;
  const rows = banks.slice(indexofFirstBank, indexOflastBank);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const search = (rows) => {
        const columns = rows[0] && Object.keys(rows[0]);
        return rows.filter((row) =>
            columns.some(
                (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
            )
        )
    };
    
  return (
    <div className="app">
      <div className="search">
        <input type="text" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
        <Link to='/favorites'>
          <Button className='favo' >Favorites</Button>
        </Link>
      </div>
      <div className="tables">
        <Tables banks={search(rows)} />
        
      </div>
      <div className="paginate">
        <Pagination banksperPage={banksperPage} totalBanks={banks.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage}/>
      </div>
      
      </div>
      
  );
}

export default Home;
