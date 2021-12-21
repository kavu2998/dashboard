import axios from "axios";
export const GET_ITEMS_FETCH = 'GET_ITEMS_FETCH'
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'

export const getItemsFetch = () => ({
    type : GET_ITEMS_FETCH
});

export const getItemsSuccess = (items) => ({
    type : GET_ITEMS_SUCCESS, 
    items
})

export const getItemsRequest = () => {
    return function(dispatch){
        return fetch('http://localhost:8080/posts')
        .then(response => response.json())
        .then(items => dispatch(getItemsSuccess(items)));
    }
}

export const postItemsRequest = (item) => {
     return function(dispatch){
         axios.post('http://localhost:8080/posts',item)
         .then(response=>{
             console.log('posted',response.data)
            dispatch(getItemsSuccess(response.data))
         })
         .catch(err=>console.log(err))
         
     } 
}

export const deleteItemsRequest = (item) => {
    return function(dispatch){
        axios.delete('http://localhost:8080/posts/'+item)
        .then(response=>{
            console.log('posted',response.data)
            dispatch(getItemsSuccess(response.data))
        })
        .catch(err=>console.log(err))
    } 
}

export const putItemsRequest = (item) => {
    console.log('http://localhost:8080/posts/'+item.id)
    return function(dispatch){
        axios.put('http://localhost:8080/posts/'+item.id, item)
        .then(response=>{
            console.log('posted',response.data)
           dispatch(getItemsSuccess(response.data))
        })
        .catch(err=>console.log(err))
    }
}