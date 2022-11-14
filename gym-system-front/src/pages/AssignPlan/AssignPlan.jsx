import { Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{useState} from 'react'
import { adminApi, plansApi, recordsApi } from '../../api/axios'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarData } from '../../components/SideBar/SideBarData'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system'
import { useEffect } from 'react'
const AssignPlan = () => {
    const [plan, setPlan] = React.useState('');
    useEffect(()=>{
      getPlans()
      getUsers()
    },[])
    const handleChange = (event) => {
      
      setPlan(event.target.value)
    };
    const [users, setUsers] = useState([])
    const [idRecord,setIdRecord] = useState('')
    const [payment,setPayment] = useState(0.0)
    const [userPay,setUserPay] = useState('')
    const [idUserPay,setIdUserPay] = useState('')
    const [plansGYM,setPlansGYM] = useState([])
    const openCloseModal = ()=>{
      setModal(!modal)
    }
    const openModal = (id = 'id', name = 'nombre',id_record='2') => {
      openCloseModal()
      setUserPay(name)
      setIdUserPay(id)
      setIdRecord(id_record)
    }
    const planAssigment = async ()=>{
      console.log('Pagando...')
      console.log(plan)
      await recordsApi.post('/add',{id_plan:plan,id_record:idRecord}).then((response)=>console.log(response))
      .catch((error)=>console.log(error))

      console.log('id-pan',plan,'idecord',idRecord)
      getUsers()
      openCloseModal()
    }
    
    const getPlans = async () => {
      await plansApi.get('/').then((response) =>{
      setPlansGYM(response.data)})
        .catch(error => console.log(error))
    }
    const getUsers = async()=>{
      await adminApi.get('/').then((response)=>{
        setUsers(response.data)
      }).catch(error=>console.log(error))
    }

     const body =(
        <div className='modal-admin-pay'>

       <div align = "center">
       <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Planes Actuales</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={plan}
          label="Age"
          onChange={handleChange}
        >     
        {plansGYM.map((plan,index)=>
          ((<MenuItem value={plan.id_plan} key ={index}>{plan.name_plan}</MenuItem>))
        )
        }
        </Select>
      </FormControl>
    </Box>
       
    <Button onClick={planAssigment}>Asignar Plan</Button>
       </div>
        </div>
    
    )
    const [modal,setModal] = useState(false);
    

 

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
                  <TableCell className='table-cell-admin-head'>Last Name</TableCell>
  
                  {/* <TableCell align="right">Plan</TableCell>
              <TableCell align="right">Fecha de facturacion</TableCell> */}
                  <TableCell className='table-cell-admin-head' align="center" >Asignar Plan</TableCell>
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
                    <TableCell align="right" className='table-cell-Admin'>{user.last_name}</TableCell>
                    <td>
                      <Button variant="outlined" color="primary" onClick={()=>openModal(user.id_user,user.user_name,user.id_record)} >
                        Asignar Plan
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

export default AssignPlan