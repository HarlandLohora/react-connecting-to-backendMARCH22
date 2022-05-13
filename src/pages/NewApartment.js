import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import axios from "axios"
//L 1 Crear el formulario
//L 2 Hacer mi form controlado
//3 Mande los datos al backend
//4 Redirect a lista


const NewApartment = () => {
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [ppd, setPPD] = useState("")

    function enviarDatos() {
        const newApt = {
            title,
            img,
            pricePerDay: ppd
        }
        axios.post("https://ironbnb-m3.herokuapp.com/apartments", newApt)
            .then(respuesta => console.log(respuesta))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>NewApartment</h1>
            <form>
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    id="outlined-basic2"
                    label="Image"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={img}
                    onChange={(event) => setImg(event.target.value)}
                />
                <TextField
                    id="outlined-basic3"
                    label="PPD"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type={'number'}
                    value={ppd}
                    onChange={(event) => setPPD(event.target.value)}
                />

                <Button variant="contained" onClick={enviarDatos}>Save</Button>
            </form>
        </div>
    )
}

export default NewApartment