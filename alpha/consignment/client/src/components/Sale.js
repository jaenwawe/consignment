
import { useHistory } from 'react-router-dom'
import { useState,useEffect } from 'react'

//I need to add to a product array
// function Sale({ productArr,setProductArr, user_id, order_id}) {

function Sale({currentUser, setProductArr, productArr,setIsLoggedIn }) {

  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const history = useHistory()
  let user_id = currentUser.id

  const handleAddProduct = (event) => 
  {
      event.preventDefault()
      fetch('/products/add', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id,
        category, 
        size, 
        price, 
        photo
       })
      })
        .then(res => {
          if (res.ok) {
          res.json().then(product => {
              setProductArr([product.id, ...productArr])
              history.push("/")
          })
          } else {
            res.json().then(errors => {console.error(errors)})
            }
        })
      }
      setIsLoggedIn(true)  

  return (

    <form name=""  className="center-form" onSubmit={handleAddProduct}>
   
    <label className="form-label" for="formBasicCategory">Category</label>
      <input 
      type="text"
      value={category} 
      onChange={(e) => setCategory(e.target.value)}   
      name = "category"
      placeholder="Category" 
      className="form-label"
      ></input>
    <br/>
    <br/>
    
    <label className="form-label" for="formBasicSize">Size</label>    
      <input 
      type="text"
      name = "size" 
      value={size}
      placeholder="Size"  
      onChange={(e) => setSize(e.target.value)} 
      className="form-label"></input>
    <br/>
    <br/>

    <label className="form-label"   for="formBasicPrice">Price</label>
    <input 
      type="price"
      // name = "price" 
      value={price}  
      placeholder="price" 
      onChange={(e) => setPrice(e.target.value)} 
      // className="form-label"
      ></input>
    <br/>
    <br/>
  
    <label className="form-label" for="formBasicPhoto">Photo</label>
    <input 
      type="photo"
      name = "photo"
      value={photo}  
      placeholder="Photo"  
      onChange={(e) => setPhoto(e.target.value)} 
      className="form-label"></input>
    <br/>
    <br/>
    
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}


export default Sale;