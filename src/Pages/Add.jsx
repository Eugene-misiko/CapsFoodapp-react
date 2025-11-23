import React, {  useState } from 'react'
import UploadA from '../AdminImages/upload_area.png'
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Add = () => {


    const url = "http://localhost:4000";

    const [image, setImage] =useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category:"Salad"
    })

    const onChangeHandler = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event)=> {
            event.PreventDefault();
            const formData = new FormData();
            formData.append("name",data.name)
            formData.append("description",data.description)
            formData.append("price",Number(data.price))
            formData.append("category",data.category)
            formData.append("image",image)
            const response = await axios.post(`${url}/api/food/add`,formData)
            if (response.data.success) {
               setData({
                        name: "",
                        description: "",
                        price: "",
                        category:"Salad"
                       })
                       setImage(false)
                       toast.success(response.data.message)
            }
            else{
                toast.error(response.data.message)
            }
    }

  return (
    <div className='ml-[max(1vw,60px)] w-[70%] mt-[50px] text-[16px] '>
        <div className='flex flex-col gap-[10px]'>
      <form onSubmit={onSubmitHandler} className='gap-[20px]'>
            <div className="">
                <p>Upload image</p>
                <label htmlFor="image">
                    <img className='w-[120px]' src={image?URL.createObjectURL(image):UploadA} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            </div>
            <div>
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} className='w-[max(40%,280px)] p-[10px] border border-1' type="text" name='name' placeholder='type here '/>
            </div>
            <div>
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} className='w-[max(40%,280px)] p-[10px] border border-2 rounded' name="description" rows='6' placeholder='Write content here' required/>
            </div>
            <div className='flex gap-[30px]'>

                <div>
                    <p>Product category</p>
                    <select onChange={onChangeHandler} className='border border-[#323232] border-[1px] p-[2px]' name="category" >
                       <option value="Salad">Salad</option>
                       <option value="Rolls">Rolls</option>
                       <option value="Deserts">Deserts</option>
                       <option value="Sandwich">Sandwich</option>
                       <option value="Cake">Cake</option>
                       <option value="Pure Veg">Pure Veg</option>
                       <option value="Pasta">Pasta</option>
                       <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div>
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} className='border border-[#323232] border-[1px] p-[2px]' type="Number" name='price' placeholder='$20'/>
                </div>
            </div>
            <button className='max-w-[120px] border-none px-5 py-2 bg-black text-white cursor-pointer rounded mt-4' type='submit'> ADD</button>
      </form>
      </div>
    </div>
  )
}

export default Add
