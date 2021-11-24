
import { useHistory } from 'react-router-dom'
import { useState,useEffect } from 'react'

//I need to add to a product array
// function Sale({ productArr,setProductArr, user_id, order_id}) {

function Sale({user_id, order_id}) {
  const history = useHistory()
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [review_stars, setReviewStars] = useState(0);
  const [review, setReview] = useState("");


  
  const handleAddProduct = (event) => 
  {
      // event.preventDefault()
      fetch('/products/add', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id,
        order_id, 
        category, 
        size, 
        price, 
        photo, 
        review_stars, 
        review
       })
      })
        .then(res => {
          if (res.ok) {
          res.json().then(product => {
            // upDateProductArr(product)
              history.push("/")
          })
          } else {
            res.json().then(errors => {console.error(errors)})
            }
        })
      }

      // const upDateProductArr = (product)=>
      // {setProductArr(...product,productArr)}

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
    
    <label className="form-label" for="formBasicReviewStars">Review Stars</label>
    <input 
      type="text"
      name = "reviewstars"  
      placeholder="ReviewStars"  
      value={review_stars}
      onChange={(e) => setReviewStars(e.target.value)} 
      className="form-label"></input>
    <br/>
    <br/>
   
    <label className="form-label" for="formBasicReview">Review</label>
    <input 
      type="text"
      name = "review"  
      placeholder="Review"  
      value={review}
      onChange={(e) => setReview(e.target.value)} 
      className="form-label"></input>
    <br/>
    
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}


export default Sale;