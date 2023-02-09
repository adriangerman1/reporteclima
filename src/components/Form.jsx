import { useState } from "react"

const Form = ({newLocation}) =>{
    
    const [ciudad , setCiudad] = useState("")

    const onSubmit = (e) =>{
        
        e.preventDefault()

        console.log({ciudad})

        if (ciudad === "" || !ciudad)return

        newLocation(ciudad)
    }
    
    return(

        <div className="container">

            <form onSubmit={onSubmit}>

                <div className="input-group m-3 mx-auto">

                    <input type="text" className="form-control" placeholder="ingrese la ciudad" onChange={(elem) => setCiudad(elem.target.value)} />
                    <button className="btn btn-primary input-group-text" type="submit"> Buscar </button>

                </div>

            </form>
        </div>
    )
}

export default Form