import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  // const [criptos, setCriptos] = useState([])
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    // fetch(`${API_URL}assets`)
    //   .then((resp) => resp.json()) // peticion exitosa
    //   .then((data) => {
    //     setCriptos(data.data)
    //   }).catch((err) => {
    //     console.error("La peticion fallo");
    //   });
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      }).catch((err) => {
        console.error("La peticion fallo");
      });
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {criptos.map(({ name, priceUsd, id }) => (
          <li key={id}>Nombre: {name} - Price: {priceUsd}</li>
        ))}
      </ol>
    </>
  )
}

export default App
