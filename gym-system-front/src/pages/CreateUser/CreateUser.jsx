import React from 'react'
import { useState } from 'react'
import './CreateUser.css'
const CreateUser = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [document, setDocument] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [plan, setPlan] = useState('')
    const [typeRegister, setTypeRegister] = useState('')

    
    const handleSubmit = (e) => {
        const newUser = {}
        newUser.name = name
        newUser.email = email
        newUser.document = document
        newUser.password = password
        newUser.phone = phone
        newUser.plan = plan
        newUser.typeRegister = typeRegister
        console.log(newUser)


        // fetch('http://localhost:3000/store-data', {
        //     method: 'POST',
        //     // We convert the React state to JSON and send it as the POST body
        //     body: JSON.stringify(this.state)
        //   }).then(function(response) {
        //     console.log(response)
        //     return response.json();
        //   });
     
        e.preventDefault();
    }
   
  return (
    <>
    <head>
        <title>Sign Up Form</title>
        <link rel="stylesheet" href="css/normalize.css"/>
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'/>
    </head>
    <div>

      <form  onSubmit={handleSubmit}>
      
        <h1>Registro</h1>
        
        <fieldset>
          <legend><span class="number">1</span>Informacion Basica</legend>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name" onChange={event => setName(event.target.value)}/>
          
          <label for="mail">Email:</label>
          <input type="email" id="mail" name="user_email"  onChange={event => setEmail(event.target.value)} />

          <label for="document">Documento:</label>
          <input type="document" id="document" name="user_document"  onChange={event => setDocument(event.target.value)}/>
          
          <label for="password">Password:</label>
          <input type="password" id="password" name="user_password"  onChange={event => setPassword(event.target.value)}/>
          
          <label for="phone">Telefono:</label>
          <input type="phone" id="phone" name="user_phone"  onChange={event => setPhone(event.target.value)}/>
        </fieldset>
        
       
        <fieldset>
        <label for="job">Plan:</label>
        <select id="job" name="user_job">
          <optgroup label="GYM">
            <option value="frontend_developer">1 mes</option>
            <option value="php_developor">3 Meses</option>
            <option value="python_developer">6 meses</option>
           
          </optgroup>
          <optgroup label="Crossfit">
            <option value="Android_developer">1 mes</option>
            <option value="iOS_developer">3 Meses</option>
            <option value="mobile_designer">6 meses</option>
          </optgroup>
          
        </select>
          <label>Tipo de Registro:</label>
          <select id="job" name="user_job">
          <optgroup label="Role">
            <option value="frontend_developer">Coach</option>
            <option value="php_developor">User</option>
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