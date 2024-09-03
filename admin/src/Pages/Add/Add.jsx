import { useEffect, useState } from "react"
import {assets} from "../../assets/assets"
import "./Add.css"
import axios from "axios"
import {toast} from 'react-toastify'


const Add = ({url}) => {

  // const url = "https://animated-eureka-v6vpjjprrv972w6wv-4000.app.github.dev";
  const [image, setImage] = useState(false)
  const [data, setData] =useState({
    name:"",
    description:"",
    price:"",
    category:"Non Veg Starters"
  })


  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }

  //Testing whether data is storing in Object
  useEffect(()=>{
    console.log(data)
  },[data])



  //API Call
  const onSubmitHandler = async (e)=>{

    e.preventDefault();

    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("price",Number(data.price))
    formData.append("description",data.description)
    formData.append("category",data.category)
    formData.append("image",image)

    const response = await axios.post(`${url}/api/food/add`, formData);
    if(response.data.success){
        setData({
          name:"",
          description:"",
          price:"",
          category:"Non Veg Starters"
        })
        setImage(false)
        toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }


  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={image?URL.createObjectURL(image):assets.upload_icon} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file"  id="image" hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input type="text" onChange={onChangeHandler} value={data.name} name="name" placeholder='Type here' />
        </div>
        <div className="add-product-desc flex-col" >
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write description' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col ">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" >
              <option value="Non Veg Starters">Non Veg Starters</option>
              <option value="Non veg Main Course">Non veg Main Course</option>
              <option value="Veg Main Course">Veg Main Course</option>
              <option value="Kerala Special">Kerala Special</option>
              <option value="Biryani">Biryani</option>
              <option value="Thali Combo">Thali Combo</option>
              <option value="Fish">Fish</option>
              <option value="Beverages">Beverages</option>
                </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='Rupees' required />
          </div>
        </div>
          <button type="submit" className = "add-button">ADD</button>
      </form>
    </div>
  )
}

export default Add
