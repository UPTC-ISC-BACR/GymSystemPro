import React, { useState } from 'react'
import { BrowserRouter, Route,  Routes, useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
//import { withStyles, makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { usersApi } from "../../api/axios";

import  './AdminPage.css'
const AdminPage = () => {
  const [users,setUsers] = useState()
  const getUsers = async ()=>{
       await usersApi.get('/').then(response=> setUsers(response))
                              .catch(error=> console.log('Error'))
  }

  console.log(users)
   
  return (
    
        <>
        
          <SideBar/>
        <div className='table-admin'>

          <TableContainer component={Paper}>
    
      <Table  sx={{ minWidth: 650 }} aria-label="simple table" className='table-style-admin'>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Documento</TableCell>
            {/* <TableCell align="right">Plan</TableCell>
            <TableCell align="right">Fecha de facturacion</TableCell> */}
            <TableCell align="right">Pagar</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id_user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.document}</TableCell>
              

            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
        </div>

         
    </>
  )
}

export default AdminPage