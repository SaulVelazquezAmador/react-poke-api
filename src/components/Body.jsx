import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Pokes from './Pokes'

const Body = (props) => {

    const {pokemon, setPokemon} = props
    const [page, setPage] = useState(0)

    const handleNext = () =>{
        setPokemon([])
        setPage(page + 20)
    }
    const handlePrev = () =>{
        setPokemon([])
        setPage(page - 20)
    }

    useEffect(()=>{
        async function fetchData() {
            const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
            setPokemon(res.data.results)
        }
        fetchData();
    },[page])

    return(
        <div className="container mx-auto">
            <div className="d-flex flex-wrap">
                { 
                    pokemon.map((po,index)=>(
                        <div key={index}>
                            {console.log(po)}
                            <Pokes 
                                name={po.name}
                                url={po.url} 
                            />
                        </div>
                    ))
                }
            </div>
            {
                page === 0 
                ?   <button onClick={handleNext}>Siguiente</button>
                :   <div>
                        <button onClick={handlePrev}>Anterior</button> 
                        <button onClick={handleNext}>Siguiente</button> 
                    </div>
            }
        </div>
    )
}

export default Body