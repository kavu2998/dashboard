import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div style={
            {backgroundColor:'grey', 
            color:'white', 
            alignItems:'center',
            textAlign:'center',
            display:'flex', 
            flexDirection:'row',
            justifyContent:'space-between',
            height:'50px'}}>
            <div style={{marginLeft:'10px'}}>
                Dashboard
            </div>
            <div style={{marginRight:'10px'}}>
                <Link to="/add">Add an Item</Link>
            </div>
        </div>
    )
}

export default Header
