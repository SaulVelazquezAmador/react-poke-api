import React, {useState} from 'react'
import Header from '../components/Header'
import Body from '../components/Body'

const Home = () =>{
    const [pokemon, setPokemon] = useState([])
    const [filtro, setFiltro] = useState([])
    console.log(filtro)
    return(
        <div>
            <Header
                setFiltro={setFiltro}
            />
            <Body
                filtro={filtro}
                pokemon={pokemon}
                setPokemon={setPokemon}
            />
        </div>
    )
}
export default Home