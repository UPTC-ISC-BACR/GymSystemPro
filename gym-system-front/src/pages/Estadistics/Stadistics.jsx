import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { body_data_api, testApi, testHistoryApi } from '../../api/axios'
import LineChart from '../../components/charts/LineChart/LineChart'
import PieChart from '../../components/charts/PieChart/PieChart'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataClient } from '../../components/SideBar/SideBarData'

const Stadistics = () => {
  const {document} =  useSelector(state=>state.auth)
  const [physicalData, setphysicalData] = useState('')

  const [tests,seTests] = useState([])
  const [tests_history,seTestsHistory] = useState([])
  const [selectedTest, setSelectedTest] = useState({
    name:'',
    description:'',
    time:'',
    repeticiones:'',
    peso:''
  })
  const getTests = async () => {
    try{
      await testApi.get('').then((response) =>{
        seTests(response.data)})
        .catch(error => console.log(error))

    }catch{
     
    }
  }
  const getTestsHistory = async () => {
    try{
      await testHistoryApi.get('/by_document',{'document':document}).then((response) =>{
        seTestsHistory(response.data)})
        .catch(error => console.log(error))

    }catch{
     
    }
  }
  console.log(tests_history,'tests')
  
    const getPhysicalData = async ()=>{
      await body_data_api.post('/by_document/',{'document':document}).then((response)=>{
        setphysicalData(response.data)
      }).catch(error=>console.log(error,'error'))

    }
    useEffect(() => {
      getPhysicalData()
      getTests()
      getTestsHistory()
      
    }, [])

    const masa = physicalData && physicalData[0].map((data)=>data.porc_muscle_mass)
    const grasa = physicalData && physicalData[0].map((data)=>data.porc_masa_grasa)
    const agua = physicalData && physicalData[0].map((data)=>data.porc_water)

    const datosCorporalesActuales = physicalData && [parseInt(physicalData[0][0].porc_muscle_mass),parseInt(physicalData[0][0].porc_masa_grasa),parseInt(physicalData[0][0].porc_water)]
    console.log(tests)
    const [userData,setUserData] = useState({
      labels:['Masa muscular','Grasa','Agua'],
      datasets:[{
          label:"Datos Fisicos Actuales",
          data:[1,2,3],
          backgroundColor:["rgba(75,192,192,1)","#ecf0f1","#50AF95","#f3ba2f","#2a71d0"]
      }],
      borderColor:"black",
      borderWidth:2,

  })
     const data = {
       labels: physicalData &&  physicalData[0].map((data)=>data.date_data),
      datasets: [
        {
          label: 'Masa Corporal',
          data:  masa,
          borderColor:"black",
          backgroundColor: "#ecf0f1",
          yAxisID: 'y',
        },
        {
          label: 'Grasa',
          data: grasa,
          borderColor: "black",
          backgroundColor: "#50AF95",
          yAxisID: 'y1',
        },
        {
          label: 'Agua',
          data: agua,
          borderColor: "black",
          backgroundColor: "#f3ba2f",
          yAxisID: 'y1',
        }]
       }
  return (
    <>
    <SideBar sidebarData = {SideBarDataClient}/>
    <div style = {{width:700,marginLeft:50, float:'left'}}>
      <h1>Historial de datos fisicos</h1>
      <LineChart chartData={data}/>
    </div>
    <h1>
    </h1>
   

     <div style = {{width:400, display:'inline-block',marginLeft:'15%'}}>
      <h1>Datos fisicos actuales</h1>
      <PieChart chartData={userData}/>
    </div>
    <hr />
    <select style = {{width:500,marginLeft:100}}  value={selectedTest} onChange={(choice) => setSelectedTest((choice.target.value))}>
            <optgroup>
              {tests.map((exercise, index) => (
                <option key={index} value={JSON.stringify({'id':exercise.id_test,'name':exercise.test_name})}>{exercise.test_name}</option>
              ))}
            </optgroup>
          </select>
    {
    <div style = {{width:800,marginLeft:50,display:'block'}}>
      <h1>Historial de tests</h1>
      <LineChart chartData={userData}/>
    </div> }
    <hr />

    </>
    
  )
}

export default Stadistics