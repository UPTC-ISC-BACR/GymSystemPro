import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
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
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/material/styles';


import './AdminPage.css'
import { SideBarData } from '../../components/SideBar/SideBarData';
const AdminPage = () => {
  const [users, setUsers] = useState('')

  const getUsers = async () => {
    await usersApi.get('/').then(response => setUsers(response.data))
      .catch(error => console.log(error))

  }


  if (users === '') {
    getUsers()
  }
  const makePayment = (id = 'id', name = 'nombre') => {

    console.log('Haciendo pago','id',id,'name',name)
  }

  return (

    <>

      <SideBar sidebarData = {SideBarData} />
      <div className='table-admin'>

        <TableContainer component={Paper}>

          <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table-style-admin'>
            <TableHead>
              <TableRow>
                <TableCell className='table-cell-admin'>Nombre</TableCell>
                <TableCell className='table-cell-admin' align="center">Documento</TableCell>
                {/* <TableCell align="right">Plan</TableCell>
            <TableCell align="right">Fecha de facturacion</TableCell> */}
                <TableCell className='table-cell-admin' align="center">Realizar Pago</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users!== ''&&users.map((user) => (
                
                <TableRow
                  key={user.id_user}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right" className='table-cell-Admin'>{user.user_name}</TableCell>

                  <TableCell align="right" className='table-cell-Admin'>{user.document}</TableCell>
                  <td>
                    <Button variant="outlined" color="primary" onClick={()=>makePayment(user.id_user,user.user_name)} >
                      Pagar
                    </Button>
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>


    </>
  )
}

export default AdminPage