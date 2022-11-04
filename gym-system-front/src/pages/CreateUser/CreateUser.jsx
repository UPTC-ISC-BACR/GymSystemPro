import React, { useMemo } from "react"
import {useForm} from "react-hook-form"
import './CreateUser.css'
//import "../cssConfigurations.css"
//import "./auCss.css"
import axios from '../../api/axios'
import { useDispatch, useSelector } from "react-redux"
import { starRegister } from "../../store/auth/thunks"
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar"

const LOGIN_URL = 'http://localhost:3000/api/persons/register'

const CreateUser = ()=>{
  
  const{register, handleSubmit, formState: { errors }} = useForm()
  const {status} =  useSelector(state=>state.auth)
  const dispatch = useDispatch();//Permite hacer dispatch de acciones en cualquier lugar
  const isAuthenticating = useMemo(()=>status === 'checking',[status])

  const custonSubmit = async(data) =>{
    console.log(data);
    dispatch(starRegister(data))
  }

  return(
    <>
    <SideBar/>
    <h1 className="h1-register">Registro Usuario</h1>
    <div className="form-register">

    <form onSubmit={handleSubmit(custonSubmit)}>
      
      <div>
        <label>Tipo de Documento</label>
        <select {...register("type_document")}  >
          <optgroup >
            <option value="CC" >Cedula</option>
            <option value="TI">Tarjeta de identidad</option>
            </optgroup>
        </select>
      </div>

      <div>
        <label>Documento  {errors.document?.type === "required" && <small className="is-required"></small>}</label>
        <input type="number" {...register("document", {required: true})}/>
       
      </div>

      <div>
        <label>Nombres  {errors.name?.type === "required" && <small className="is-required"></small>} </label>
          <input {...register("name", {required: true})} />
        
      </div>
      
      <div>
          <label>Apellidos {errors.last_name?.type === "required" && <small className="is-required"></small>}</label>
          <input {...register("last_name", {required: true})} />
          
      </div>

      <div>
        <label>Telefono {errors.cell_phone?.type === "required" && <small className="is-required"></small>}</label>
        <input type="number" {...register("cell_phone", {required: true})}/>
        
      </div>

      <div>
        <label>Correo: {errors.email?.type === "required" && <small className="is-required"></small>}</label>
        <input type="email" className="form_input" {...register("email", {required: true}) }/>
        
      </div>

      <div>
        <label>Fecha de Nacimiento</label>
        <input type="date" className="form_input" {...register("date_of_birth", {required: "Date is required" , valueAsDate: true,})}/>
        {errors.date_of_birth && <small className="is-required">{errors.date_of_birth.message}</small>}
      </div>

      <div>
        <label>Genero:</label>
        <select {...register("gender")}  >
          <optgroup>
            <option value="F" >Femenino</option>
            <option value="M">Masculino</option>
          </optgroup>
        </select>
      </div>
      
      <div>
        <label >Rol:</label>
        <select {...register("type_user")}  >
          <optgroup>
            <option value="Ad">Administrador</option>
            <option value="En">Entrenador</option>
            <option value="Cl">Cliente</option>
          </optgroup>
        </select>
      </div>

      <div></div>
    <div id="button">
        <button type="submit">Registrar</button>
    </div>
    </form>
    </div>
    </>
  )
}
export default CreateUser