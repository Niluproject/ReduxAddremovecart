import React from 'react'
import testt from '../components/images/addtocartt.jpg'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img alt='logo' src={testt} />
            </div>
        </div>
    )
}

export default Header