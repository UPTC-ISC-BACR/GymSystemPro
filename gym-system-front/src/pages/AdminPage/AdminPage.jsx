import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
//import { withStyles, makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { adminApi, usersApi } from "../../api/axios";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import './AdminPage.css'
import { SideBarData } from '../../components/SideBar/SideBarData';

const AdminPage = () => {
  const [payment,setPayment] = useState(0.0)
  const [userPay,setUserPay] = useState('')
  const [idUserPay,setIdUserPay] = useState('')
  const openCloseModal = ()=>{
    setModal(!modal)
  }
  const openModal = (id = 'id', name = 'nombre') => {
    openCloseModal()
    setUserPay(name)
    setIdUserPay(id)
  }
  const pay = ()=>{
    console.log('Pagando...')
    console.log('user',userPay,'id',idUserPay,'valor',payment)
    openCloseModal()

  }
  const body =(<div className='modal-admin-pay'>
    <div align = "center">
      <h2>
        Pago 
      </h2>
      <input type='number' label = "Valor" className='texfield-modal' onChange={e=>setPayment(e.target.value)}/>
      <br/>
      <div align = "right">
      <Button color="primary" onClick={pay}>Pagar</Button>
      <Button onClick={openCloseModal}>Cancelar</Button>
      </div>

    </div>

  </div>)
  const [modal,setModal] = useState(false);
  
  const [users, setUsers] = useState([{document:123,name:'Santiago',id_record:'asdasd'}])
  const getUsers = async () => {
    await adminApi.get('/').then(response => {setUsers(response.data); console.log(response)})
      .catch(error => console.log(error))

  }

  if (users === '') {
    getUsers()
  }
 
 
  return (

    <>

      <SideBar sidebarData = {SideBarData} />
      <Modal open = {modal} onClose= {openCloseModal} >
        {body}
      </Modal>


      <div className='table-admin'>

        <TableContainer component={Paper}>

          <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table-style-admin'>
            <TableHead>
              <TableRow>
                <TableCell className='table-cell-admin-head' align="center">Documento</TableCell>
                <TableCell className='table-cell-admin-head'>Nombre</TableCell>
                <TableCell className='table-cell-admin-head'>Fecha fin de registro</TableCell>
                <TableCell className='table-cell-admin-head'>Fecha fin del plan</TableCell>

                {/* <TableCell align="right">Plan</TableCell>
            <TableCell align="right">Fecha de facturacion</TableCell> */}
                <TableCell className='table-cell-admin-head' align="center" >Realizar Pago</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users!== ''&&users.map((user) => (
                
                <TableRow
                  key={user.id_user}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right" className='table-cell-Admin'>{user.document}</TableCell>

                  <TableCell align="right" className='table-cell-Admin'>{user.name}</TableCell>
                  <TableCell align="right" className='table-cell-Admin'>{user.end_date_register}</TableCell>
                  <TableCell align="right" className='table-cell-Admin'>{user.end_date_plan}</TableCell>
                  <td>
                    <Button variant="outlined" color="primary" onClick={()=>openModal(user.id_user,user.user_name)} >
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