import React from 'react'
import { useState } from 'react'
import axios from '../../api/axios'
import {useForm} from '../../helpers/useForm'
import './CreateUser.css'
const CreateUser = () => {
  const LOGIN_URL = 'http://localhost:3000/api/personas/register'

  //const [plan, setplan] = useState('1month')
  //const [role, setRole] = useState('Ad')
  const [type_document,setTypeDocument] = useState('CC')
  const [formValues, handleInputChange] = useForm({ documento: "123456789",
   nombres: "Juan",
    apellidos: "Vasquez",
     fecha_nacimiento:"1-01-2012",
      correo:"Juan@gmail.com",
       telefono:"12345",
        estado:"Activado",
         tipo_documento:"CC" });

const{nombres,apellidos,correo,fecha_nacimiento,telefono,estado, tipo_documento, documento} = formValues;


const handleSubmit = async (e) => {
  e.preventDefault();
 // formValues.plan = plan
  //formValues.role = role
  formValues.tipo_documento = type_document
  console.log(formValues)
  try{
  const response = await axios.post(LOGIN_URL,JSON.stringify(formValues));
  console.log(response)
      }catch(err){

      }
}
   
  return (
    <>
    
    <div>

      <form  onSubmit={handleSubmit}>
      
        <h1>Registro Usuario</h1>
        
        <fieldset>
          <legend><span class="number">1</span>Informacion Basica</legend>
          <label>Nombres:</label>
          <input type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete = "off"
                    value = {nombres}
                    onChange = {handleInputChange}/>
          <label >Apellidos:</label>
          <input type="text"
                    placeholder="LastName"
                    name="lastName"
                    autoComplete = "off"
                    value = {apellidos}
                    onChange = {handleInputChange}/>
          
          <label >Email:</label>
          <input  type="text"
                  placeholder="Email"
                  name="correo"
                  autoComplete = "off" value={correo}  onChange={handleInputChange} />
                  <label >Fecha de nacimiento:</label>
          <input  type="text"
                  placeholder="date"
                  name="fecha_nacimiento"
                  autoComplete = "off" value={fecha_nacimiento}  onChange={handleInputChange} />


          <label >Documento:</label>
          <input type="text"
                  placeholder="documento"
                  name="document"value={documento}  onChange={handleInputChange}/>
          

          {/*
          <label >Password:</label>
          <input type="password" placeholder="password"  name="password" value={password}  onChange={handleInputChange}/>
          */}
          <label >Telefono:</label>
          <input type="text" placeholder="phone number"  name="nombre" value={telefono}  autoComplete = "off"  onChange={handleInputChange}/>
    
        
       
        {/* <label for="job">Plan:</label> */}
        {/* <fieldset>

        <select id="plan" value={plan} onChange={(e) => setplan(e.target.value)} >
        <optgroup label="Gym">
            <option value="1monthGym" >1 mes</option>
            <option value="3monthsGym">3 Meses</option>
            <option value="6monthsGym">6 meses</option>
            </optgroup>
          <optgroup label="Crossfit">
            <option value="1monthCrossFit">1 mes</option>
            <option value="3monthCrossFit">3 Meses</option>
            <option value="6monthCrossFit">6 meses</option>
          </optgroup>
        </select >
        </fieldset> 
        <label>Role:</label>
      
        <select id="tipo_cliente" value={role} onChange={(e) => setRole(e.target.value)} >
        <optgroup label="Role">
            <option value="Ad" >Administrador</option>
            <option value="Cl">Cliente</option>
            <option value="En">Entrenador</option>
            </optgroup>
        </select>
        */}
   
        <label >Documento:</label>

        <select id="tipo_documento" value={tipo_documento} onChange={(e) => setTypeDocument(e.target.value)} >
        <optgroup label="Documento">
            <option value="CC" >Cedula</option>
            <option value="TI">Tarjeta de identidad</option>
            </optgroup>
        </select>
        </fieldset>



        <button type="submit" value="Submit">Sign Up</button>
      </form>
      </div>
    </>

  )
}

export default CreateUser