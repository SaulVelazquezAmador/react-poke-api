import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Pokes from './Pokes'

const Body2 = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const res = await Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
            setPokemon(res.data.results)
            console.log(res.data.results)
        }
        fetchData();
    },[])

    return(
        <div className="container mx-auto">
            <div className="d-flex flex-wrap">
                { pokemon.map((po,index)=>(
                    <div key={index}>
                        <Pokes 
                            name={po.name}
                            url={po.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body2