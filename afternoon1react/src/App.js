import React, { Component } from 'react';
import './App.css'
import Product from "./Components/Product"
import CartItem from "./Components/CartItem"
import axios from 'axios'

class App extends Component {
 constructor () {
   super()

   this.state = {
    key: "87f92cd4",
     shirts: [],
    //  accesories: [{
    //    id: 1,
    //    imageURL: 'https://i.pinimg.com/originals/64/ed/b9/64edb90d74e37d2f9f2a4e4b25c95439.jpg',
    //    title: 'Propeller Hat',
    //    price: 9.99,
    //    description: 'Stylish hat with propeller on top'
    //  }],
    //  food: [{
    //    id: 2,
    //    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Spam_can.png/220px-Spam_can.png',
    //    title: 'Spam',
    //    price: 2.49,
    //    description: 'The canned meat you will never forget'
    //  }],
    //  costumes: [{
    //    id: 3,
    //    imageURL: 'https://riteshjsr.files.wordpress.com/2010/11/imagescap1s9pl.jpg',
    //    title: 'Stupednous Man Costume',
    //    price: 14.99,
    //    description: 'Now you can BE the mysterious masked man'
    //  }],
     cart: [],
     userInput: '',
     products: [],
     swag: [],
     hats: [],
     shirt: [],
     coldWeather: [],
  
  
   }
   this.addToCart = this.addToCart.bind(this);
 }
 addToCart = (item) => {
   this.setState({
     cart: [...this.state.cart, item]
   })
 }
 checkout () {
   this.setState({cart: []});
   alert("Purchase is complete!");
 }


 componentDidMount(){
   axios.get(`https://r3products.devmountain.com/products/catalog?key=${this.state.key}`).then((products)=>{
     console.log(products.data)
      let quantityProducts = products.data.map((product)=>{
        product.quantity =0;
        return product;
      })

        let hats = quantityProducts.filter(product => product.category === 'hat')
        let shirt = quantityProducts.filter(product => product.category === 'shirt')
        let swag = quantityProducts.filter(product => product.category === 'swag')
        let cold = quantityProducts.filter(product => product.category === 'cold weather')
        

     this.setState({
      hats,
      shirt,
      swag,
      coldWeather: cold,
    })
   
 })
 .catch(err=> console.log(err))
}



 render () {
   return (
     <div className="App">
       <section className ='navBar'>
         <button>Product View</button>
         <button>Cart View</button>
       </section>
       <section className ='products'>
         <h1>Products</h1>

        <h2>hats</h2>
        {
          this.state.hats.map( hat=> {
            return <Product key={hat.id} item={hat}/>
          })
        }

        <h2>Shirts</h2>
        {
          this.state.shirt.map( shirt=> {
            return <Product key={shirt.id} item={shirt}/>
          })
        }
        {
          this.state.swag.map( swag=> {
            return <Product key={swag.id} item={swag}/>
          })
        }
        {
          this.state.coldWeather.map( coldWeather=> {
            return <Product key={coldWeather.id} item={coldWeather}/>
          })
        }






         <input onChange = {event => this.setState({userInput:event.target.value})}/>
         {/* <h2>Shirts</h2>
         {this.state.shirts.filter(item => item.title.toLowerCase().includes(this.state.userInput.toLowerCase())).map((item)=>
         <Product key ={item.id} item={item} addToCart={this.addToCart}/>)}
         <h2>Accesories</h2>
         {this.state.accesories.filter(item => item.title.toLowerCase().includes(this.state.userInput.toLowerCase())).map((item)=>
         <Product key ={item.id} item={item} addToCart={this.addToCart}/>)}
         <h2>Food</h2>
         {this.state.food.filter(item => item.title.toLowerCase().includes(this.state.userInput.toLowerCase())).map((item)=> <Product key ={item.id} item={item} addToCart={this.addToCart}/>)}
         <h2>Costumes</h2>
         {this.state.costumes.filter(item => item.title.toLowerCase().includes(this.state.userInput.toLowerCase())).map((item)=> <Product key ={item.id} item = {item} addToCart={this.addToCart}/>)}*/}
       </section> 
       <section className ='Cart'>
         <h1>Cart</h1>
         <h2>Total: ${Math.floor(100 * this.state.cart.reduce((total, item) => (total += item.price),0))/100}</h2>
         <button onClick = {this.checkout = this.checkout.bind(this)}>Checkout</button>
         {this.state.cart.map((item) => <CartItem item = {item}/>)}
       </section>
     </div>
   )
 }
}
export default App
