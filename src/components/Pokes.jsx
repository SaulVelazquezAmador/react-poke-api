import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Pokes = (props) => {

    const {name, url} = props
    const [abilities, setAbilities] = useState([])
    const [sprite, setSprite] = useState([])

    useEffect(()=>{
        async function fetchUrl(){
            const res = await Axios.get(url)
            setAbilities(res.data.abilities)
            setSprite(res.data.sprites.other['official-artwork'])
            console.log(res.data)
        }
        fetchUrl()
    },[])
    return(
        <div className="card col-10 my-2 mx-2">
            <img className="card-img-top mx-auto" style={styles.imagenes} src={sprite.front_default} alt="poke"/>
            <div className="card-body mx-auto">
                <h5 className="card-title">{name}</h5>
                {
                    abilities.map((ab, index) =>(
                        <div key={index}>
                            {ab.is_hidden 
                                ? <p className="card-text"> HO {ab.ability.name} </p> 
                                : <p className="card-text"> {ab.ability.name} </p>
                            }
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Pokes

const styles = {
    imagenes: {
        width: "50%",
        height: "50%",
    }
}