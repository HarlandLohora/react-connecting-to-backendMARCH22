import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
//L 1 Crear el jsx(template) de cada apartamento
//L 2 un estado para almacenar todos los apartamentos
//L 3 que cuando se monte/coloque el componente busque/pida los datos a 
//  https://ironbnb-m3.herokuapp.com/apartments

const ApartmentsPage = () => {
    const [apartments, setApartments] = useState([])

    useEffect(() => {
        console.log("Aqui vamos a obtener los datos")
        //Axios y fetch sirven para lo mismo :) 
        axios.get("https://ironbnb-m3.herokuapp.com/apartments")
            .then(datos => setApartments(datos.data))
            .catch(err => console.log(err))


        // Obteniendo los datos con fetch
        // fetch("https://ironbnb-m3.herokuapp.com/apartments")
        //     .then(datos => datos.json())
        //     .then(datos => console.log("Fetch", datos))
        //     .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>ApartmentPage</h1>
            {
                apartments.map(apartment => {
                    return <Link to={`/apartments/${apartment._id}`} key={apartment._id}>
                        <div className="card">
                            <img src={apartment.img} alt="apartment" />
                            <h3>{apartment.title}</h3>
                            <p>Price: {apartment.pricePerDay}</p>
                        </div>
                    </Link>
                })
            }

        </div>
    )
}

export default ApartmentsPage