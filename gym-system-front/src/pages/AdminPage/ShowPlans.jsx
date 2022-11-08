import React from "react"
import axios from '../../api/axios'
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const URI_PLANS = 'http://localhost:3000/api/plans/'

const ShowPlans = ()=>{
    
    const[plans, setPlan] = useState([])
    useEffect( ()=>{
        getPlans()
    }, [])
    //procedimiento para mostrar planes
    const getPlans = async()=>{
        const res = await axios.get(URI_PLANS)
        setPlan(res.data)
    }
    //procedimiento para eliminar un plan
    const deletePlan = async(id_plan)=>{
        console.log("HOOO", `${URI_PLANS}${id_plan}`);
        let config={
            headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
        }
        await axios.delete(`${URI_PLANS}${id_plan}`, config)
        
        getPlans()
    }

    return(
        <>
        <h1> Planes</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to={"/createPlan"} className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Duracion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map( (plan)=>(
                                <tr key={plan.id_plan}>
                                    <td> {plan.name_plan} </td>
                                    <td> {plan.price} </td>
                                    <td> {plan.duration_months} </td>
                                    <td>
                                        <Link to={`/editPlan/${plan.id_plan}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deletePlan(plan.id_plan)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        </>
    )
}

export default ShowPlans