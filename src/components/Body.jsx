import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Pokes from './Pokes'

const Body = () => {

    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(0)

    async function changeData() {
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
        setPokemon(res.data.results)
        console.log(res.data.results) 
    }

    const handleNext = () =>{
        setPokemon([])
        setPage(page + 20)
        changeData()
    }
    const handlePrev = () =>{
        setPokemon([])
        setPage(page + 20)
        changeData()
    }

    useEffect(()=>{
        async function fetchData() {
            const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
            setPokemon(res.data.results)
        }
        fetchData();
    },[])

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