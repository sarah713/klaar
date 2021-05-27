import { Snackbar } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFav } from '../app/FavoriteSlice';
import { store } from '../app/store';
import { Alert} from '@material-ui/lab';


function Tables({ banks }) {
  const [open, setOpen] = useState(false);
  const fav = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
     const columns = banks[0] && Object.keys(banks[0]);
    const handleClick = () => {
        setOpen(true);
    }
    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
   
    return (
      <table cellPadding={1} cellSpacing={1}>
        <thead>
          <tr>{banks[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {banks.map((row, index) =>
            <tr key={index}>
              {
                columns.map((column) => <td>{ row[column]}</td>)
              }
              <p onClick={()=>console.log(dispatch(addFav({item:row.bank_name,id:row.bank_id})))}>
                <i class="bi bi-star" style={{ "font-size": "1.5rem" }} onClick={handleClick} />
                <Snackbar
                   anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="info">
                      Added to favorites
                 </Alert>
              </Snackbar>
                
              </p>
              
            </tr>
            
          )}
        </tbody>
        </table>
    )
}

export default Tables
