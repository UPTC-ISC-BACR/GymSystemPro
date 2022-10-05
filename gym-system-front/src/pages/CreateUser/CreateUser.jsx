import React from 'react'
import { useState } from 'react'
import axios from '../../api/axios'
import {useForm} from '../../helpers/useForm'
import './CreateUser.css'
const CreateUser = () => {
  const LOGIN_URL = 'http://localhost:3000/api/persons/register'

  const [sex, setSex] = useState('F')
 // const [role, setRole] = useState('Ad')
  const [type_document_other,setTypeDocument] = useState('CC')
  const [formValues, handleInputChange] = useForm({ document: "123456789",
   names: "Juan",
    last_name: "Vasquez",
    date_of_birth:"1-01-2012",
    email:"Juan@gmail.com",
    cell_phone:"12345",
    type_document:"CC",
    sex:"F" });

const{names,last_name,email,date_of_birth,cell_phone, type_document, document} = formValues;


const handleSubmit = async (e) => {
  e.preventDefault();
 // formValues.plan = plan
  formValues.sex = sex
  formValues.tipo_document = type_document_other
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
          <legend><span className="number">1</span>Informacion Basica</legend>
          <label>Nombres:</label>
          <input type="text"
                    placeholder="Name"
                    name="names"
                    autoComplete = "off"
                    value = {names}
                    onChange = {handleInputChange}/>
          <label >Apellidos:</label>
          <input type="text"
                    placeholder="LastName"
                    name="last_name"
                    autoComplete = "off"
                    value = {last_name}
                    onChange = {handleInputChange}/>
          
          <label >Email:</label>
          <input  type="text"
                  placeholder="Email"
                  name="email"
                  autoComplete = "off" value={email}  onChange={handleInputChange} />
          <label >Fecha de nacimiento:</label>
          <input  type="text"
                  placeholder="date"
                  name="date_of_birth"
                  autoComplete = "off" value={date_of_birth}  onChange={handleInputChange} />


          <label >document:</label>
          <input type="text"
                  placeholder="document"
                  name="document"value={document}  onChange={handleInputChange}/>
          

          {/*
          <label >Password:</label>
          <input type="password" placeholder="password"  name="password" value={password}  onChange={handleInputChange}/>
          */}
          <label >cell_phone:</label>
          <input type="text" placeholder="phone number"  name="nombre" value={cell_phone}  autoComplete = "off"  onChange={handleInputChange}/>
    
        
       
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
      */}

        <label >sex:</label>
        <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)} >
          <optgroup label="Sex">
            <option value="F" >Femenino</option>
            <option value="M">Masculino</option>
          </optgroup>
        </select>

        <label >document:</label>

        <select id="tipo_document" value={type_document} onChange={(e) => setTypeDocument(e.target.value)} >
        <optgroup label="document">
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