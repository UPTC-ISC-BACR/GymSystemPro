import React from "react"
import {useForm} from "react-hook-form"
import './CreateUser.css'


const CreateUser = ()=>{
  
  const{register, handleSubmit, formState: { errors }} = useForm()

  const custonSubmit = (data) =>{
    console.log(data);
  }

  return(
    <>
    <h1>Registro Usuario</h1>

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
        <input type="number" className="form_input" {...register("document", {required: true})}/>
        {errors.name?.type === "required" && <small className="is-required"></small>}
      </div>

      <div>
        <label>Nombres</label>
          <input type="text" className="label_text" {...register("name", {required: true})} />
          {errors.name?.type === "required" && <small className="is-required"></small>}
      </div>
      
      <div>
          <label>Apellidos</label>
          <input type="text" className="label_text" {...register("last_name", {required: true})} />
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
        <label>Sexo:</label>
        <select {...register("sex")}  >
          <optgroup>
            <option value="F" >Femenino</option>
            <option value="M">Masculino</option>
          </optgroup>
        </select>
      </div>

      <div>
        <label >Rol:</label>
        <select {...register("rol")}  >
          <optgroup>
            <option value="Ad">Administrador</option>
            <option value="En">Entrenador</option>
            <option value="Cl">Cliente</option>
          </optgroup>
        </select>
      </div>

      <div>

      </div>

      <button type="submit">Registrar</button>
    </form>
    </>
  )
}
export default CreateUser