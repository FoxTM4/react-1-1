import React from 'react'

class app extends Componenet {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description:'',
            price: '',
            image: '',
        }
        handleName(newName){
            this.setState({name: newName})
        }
        handleDescription(description){
            this.setState({description: description})
        }
        handlePrice(price){
            this.setState({price: price})
        };
        handleImage(image){
            this.setState({image: image})
        }
        submit(){
            const newItem = {
                name: this.state.name,
                description: this.state.description,
                price: this.state.name,
                image: this.state.image
            }
        }
    }

    render(){
        return(
            <div>
            <input type='text' value='this.state.name' onChange= {(event) => this.handleNamethis.handleName(event.target.value)}></input>
            
            
            </div>
        )
        
    }
    
}