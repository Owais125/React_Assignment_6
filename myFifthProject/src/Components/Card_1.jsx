import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const Card_1 = (props) => {
    const {price ,title , img_url }=props.Card_Data
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-2/4' width="20" src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{title}</p>
                    <h2 className="card-title">{price}</h2>
                    <div className="card-actions justify-end">
                        <button >{FaCartPlus}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card_1 }