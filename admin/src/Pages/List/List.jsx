import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
import { toast } from "react-toastify"

const List = ({url}) => {

  // const url = "https://animated-eureka-v6vpjjprrv972w6wv-4000.app.github.dev"
  const [list, setList] = useState({})
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    // console.log(response.data);
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId)=>{
    // console.log(foodId)
    const response = await axios.delete(`${url}/api/food/remove`, { data: {id: foodId } })
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <div className='list add flex-col'>
        <p>All Fodd Items</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>

          {Object.keys(list).map((key) => (
            <div key={list[key].id} className="list-table-format">
              <img src={`${url}/images/` + list[key].image} alt="" />
              <p>{list[key].name}</p>
              <p>{list[key].category}</p>
              <p>{list[key].price}</p>
              <p className='cursor' onClick={()=>removeFood(list[key]._id)}>X</p>
            </div>
          ))}

          {/* {list.map((item, index)=>
          (
            <div key={index} className="list-table-format">
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p> 
                <p>{item.price}</p>
                <p>X</p>
            </div>
          )
    
        )} */}
        </div>

      </div>
    </>
  )
}

export default List
