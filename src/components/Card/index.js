import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'

function Card(props) {
    const navigate = useNavigate();

    const editItem =(id)=>{
        console.log(props.item.id,"here")
        navigate('/edit',{state:props.item})
    }
    const deleteItem =(id)=>{
        props.deleted(props.item.id)
    }
    return (
        <div className="card">
            <div className="title"><b>{props.item.name}</b></div>
            <img src={props.item.image} alt="Avatar" style={{ width: '400px', height: '200px' }} />
            <div className="container">
                <p>Rs.{props.item.price}</p>
                <p>{props.item.count}</p>
            </div>
            <div className="container">
                <button onClick={(id) => {editItem(id)}}> Edit</button>
                <button onClick={(id)=>{deleteItem(id)}}>Delete</button>
            </div>
        </div>
    )
}

export default Card
