import React, { useState, useEffect } from 'react'
// simula un arreglo de objetos que puede
// provenir desde un backend
const datosInicio = [
    { id: 1, nombre: "AA" },
    { id: 2, nombre: "BB" },
    { id: 3, nombre: "CC" },
    { id: 4, nombre: "DD" }
]

const Lista = () => {
    const [datos, setDatos] = useState(datosInicio)

    return (
        <div className="container">
            <div className="col-12">
                <h1>Lista de datos</h1>
                {/* Each child in a list should have a unique "key" prop. */}
                <ul className="list-group">
                    {datos.map((dato, indice) => {
                        return <li key={indice} className="list-group-item">{dato.id}.- {dato.nombre}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Lista