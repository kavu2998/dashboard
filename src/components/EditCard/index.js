import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {  putItemsRequest, getItemsRequest } from '../../utilities/actions'
import './index.css'

function EditCard() {
    const [name, setName] = useState('')
    const [image, setImage] = useState('choose a file')
    const [count, setCount] = useState('')
    const [price, setPrice] = useState('')
    const location = useLocation()
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const items = useSelector(state => state.itemReducer.items)

    useEffect(() => {
        dispatch(getItemsRequest())
        console.log(items.length)
        if(location.state){
            setName(location.state.name)
            setPrice(location.state.price)
            setCount(location.state.count)
        }
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        let item = {
            id: location.state.id,
            name,
            image:'./assets/'+image,
            price,
            count
        }
        console.log(item)
        dispatch(putItemsRequest(item))
        navigate('/')
    }
    return (
        <form >
            <div>
                <label>
                    Name
                </label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div>
                <label>
                    Image
                </label>
                <input type="file" 
                 onChange={(e)=>{setImage(e.target.files[0].name)}}/>
            </div>
            <div>
                <label>
                    Price
                </label>
                <input type="text"
                value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            </div>
            <div>
                <label>
                    Count
                </label>
                <input type="text"
                value={count} onChange={(e)=>{setCount(e.target.value)}} />
            </div>
        <button onClick={(e)=>{submitHandler(e)}}>Edit</button>
        </form>
    )
}

export default EditCard
