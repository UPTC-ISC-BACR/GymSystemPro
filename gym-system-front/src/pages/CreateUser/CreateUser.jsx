import React, { useMemo } from "react"
import {useForm} from "react-hook-form"
import './CreateUser.css'
import axios from '../../api/axios'
import { useDispatch, useSelector } from "react-redux"
import { starRegister } from "../../store/auth/thunks"
import NavBar from "../../components/NavBar/NavBar";

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
    <NavBar></NavBar>
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
        <label>Documento</label>
        <input type="number" {...register("document", {required: true})}/>
        {errors.number?.type === "required" && <small className="is-required"></small>}
      </div>

      <div>
        <label>Nombres</label>
          <input {...register("name", {required: true})} />
          {errors.name?.type === "required" && <small className="is-required"></small>}
      </div>
      
      <div>
          <label>Apellidos</label>
          <input {...register("last_name", {required: true})} />
          {errors.last_name?.type === "required" && <small className="is-required"></small>}
      </div>

      <div>
        <label>Fecha de Nacimiento</label>
        <input type="date" className="form_input" {...register("date_of_birth", {required: true , valueAsDate: true,})}/>
        {errors.date_of_birth?.type === "required" && <small className="is-required"></small>}
      </div>

      <div>
        <label>Correo:</label>
        <input type="email" className="form_input" {...register("email", {required: true}) }/>
        {errors.email?.type === "required" && <small className="is-required"></small>}
      </div>

      <div>
        <label>Telefono</label>
        <input type="number" {...register("cell_phone", {required: true})}/>
        {errors.number?.type === "required" && <small className="is-required"></small>}
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
        <button type="submit" >Registrar</button>
    </form>
    </div>
    </>
  )
}
export default CreateUser