import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}