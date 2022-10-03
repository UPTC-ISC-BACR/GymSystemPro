import React from 'react'
import { useState } from 'react'
import {useForm} from '../../helpers/useForm'
import './CreateUser.css'
const CreateUser = () => {
  //const [plan, setplan] = useState('1month')
  const [role, setRole] = useState('Ad')
  const [type_document,setTypeDocument] = useState('CC')
  const [formValues, handleInputChange] = useForm({
    names:'Santiago',
    lastNames:'Moreno',
    email:"santiago.moreno01@uptc.edu.co",
    password:'123456',
    date:'16/09/1996',
    phone:'12345',
    document:'12341234',
   // plan:'1month',
    role:'user'
});

const{name,lastNames,email,date,password,phone,document} = formValues;


  const handleSubmit = (e) => {
    e.preventDefault();
   // formValues.plan = plan
    formValues.role = role
    formValues.type_document = type_document

    //console.log(plan+'sadfas')
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
                    value = {name}
                    onChange = {handleInputChange}/>
          <label >Apellidos:</label>
          <input type="text"
                    placeholder="LastName"
                    name="lastName"
                    autoComplete = "off"
                    value = {lastNames}
                    onChange = {handleInputChange}/>
          
          <label >Email:</label>
          <input  type="text"
                  placeholder="Email"
                  name="email"
                  autoComplete = "off" value={email}  onChange={handleInputChange} />
                  <label >Fecha de nacimiento:</label>
          <input  type="text"
                  placeholder="date"
                  name="date"
                  autoComplete = "off" value={date}  onChange={handleInputChange} />


          <label >Documento:</label>
          <input type="text"
                  placeholder="document"
                  name="document"value={document}  onChange={handleInputChange}/>
          
          <label >Password:</label>
          <input type="password" placeholder="password"  name="password" value={password}  onChange={handleInputChange}/>
          
          <label >Telefono:</label>
          <input type="text" placeholder="phone number"  name="phone" value={phone}  autoComplete = "off"  onChange={handleInputChange}/>
    
        
       
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
        </fieldset> */}
        <label>Role:</label>
      
        <select id="tipo_cliente" value={role} onChange={(e) => setRole(e.target.value)} >
        <optgroup label="Role">
            <option value="Ad" >Administrador</option>
            <option value="Cl">Cliente</option>
            <option value="En">Entrenador</option>
            </optgroup>
        </select>
   
        <label >Documento:</label>

        <select id="tipo_documento" value={type_document} onChange={(e) => setTypeDocument(e.target.value)} >
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