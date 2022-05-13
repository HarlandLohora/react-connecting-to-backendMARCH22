import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
//L 1 Obtener el id de la url
//L 2 crear nuestro jsx(template)
//L 3 Crear el estado 
//4 conectarnos a el backend mandandole el id
//5 Obtener los datos 
//6 Actualizar con los datos de backend


const DetailPage = () => {
    const { id } = useParams()
    const [apartment, setApartment] = useState({})

    //Obtener datos del apartamento

    useEffect(() => {
        axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
            .then(datos => setApartment(datos.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <h1>Detail page</h1>
            <Link to="/">
                <button>All apartments</button>
            </Link>
            <div key={apartment._id} className="card">
                <img src={apartment.img} alt="apartment" />
                <h3>{apartment.title}</h3>
                <p>Price: {apartment.pricePerDay}</p>
            </div>
        </div>
    )
}

export default DetailPage