import {useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";

import axios from '../../api/axios'

const PLANS_URL = 'http://localhost:3000/api/plans/'


const EditPlan = ()=>{
    const[name_plan, setNamePlan] = useState("")
    const[price, setPrice] = useState("")
    const[duration_months, setDuration] = useState("")
    const{register, handleSubmit, formState: { errors }} = useForm()
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async(data) =>{
        console.log(data);
        try{
          const response = await axios.put(PLANS_URL + id, {
            name_plan: name_plan,
            price: price,
            duration_months: duration_months
            })
            navigate("/");
          console.log(response)
          }catch(error){
            console.error("servidor desconectado");
          }
        }

        useEffect( ()=>{
            getPlansById()
        }, [])

        const getPlansById = async ()=>{
            const res = await axios.get(PLANS_URL + id)
            setNamePlan(res.data.name_plan)
            setPrice(res.data.price)
            setDuration(res.data.duration_months)
        }
    return(
        <>
        <h1>Editar Plan</h1>
        <form onSubmit={handleSubmit(update)}>
            <div>
                <label>Nombre Plan  {errors.name_plan?.type === "required" && <small className="is-required"></small>}</label>
                <input  {...register("name_plan", {required: true})}/> 
            </div>

            <div>
                <label>Precio {errors.price?.type === "required" && <small className="is-required"></small>}</label>
                <input type="number" {...register("price", {required: true})}/>
            </div>

            <div>
                <label>Duracion (meses)  {errors.duration_months?.type === "required" && <small className="is-required"></small>}</label>
                <input type="number" {...register("duration_months", {required: true})}/>
            </div>

            <div id="button">
                <button type="submit">Editar Plan</button>
            </div>
        </form>
        </>
    )
}

export default EditPlan