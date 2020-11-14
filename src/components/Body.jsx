import React from 'react'
// import axios from 'axios'

class Body extends React.Component{
    
    constructor(props) {
        super(props);
     
        this.state = {
            pokemons: []
        };
      }
    
    // const [datos, setDatos] = useState([])

    // // useEffect(() =>{
    // //     axios.get("https://pokeapi.co/api/v2/pokemon?limit=99")
    // //     .then(res => {
    // //         setDatos(res.data)
    // //         console.log(datos)
    // //     })
    // // })
    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(res => res.json())
        .then(data => {
            if (data) {
              this.setState({pokemons : data.results}, () => {})
            }
        })
        .then(res => console.log(this.state))
    }
    render(){
        return(
            <div>  
                { this.state.pokemons.map((pokemon, index) => {
                    return (
                        <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
                        <div className="card-header"><b>{pokemon.name} : {pokemon.url}</b></div>        
                        </div>  
                    );
                })}
            </div>
        )        
    }

}

export default Body