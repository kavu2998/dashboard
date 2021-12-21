import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsRequest, deleteItemsRequest, getItemsSuccess } from '../../utilities/actions'
import Card from '../Card';
import './index.css'

function CardList() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.itemReducer.items)

    const deleted = (id) => {
        // setLoad(true)
        // setData(data.filter(i => i.id !== id))
        dispatch(deleteItemsRequest(id))
        dispatch(getItemsRequest())
    }

    useEffect(() => {
        dispatch(getItemsRequest())
        //setData(items)
    }, [items])


    return (
        <div className='items'>
            {console.log("Reloaded")}
            {
                items && items.length > 0 && items.map((item) => <Card key={item.id} deleted={deleted} item={item} />)
            }
        </div>
    )
}

export default CardList
