import React from 'react'

const Card = (props) => {
    const {img_url,title,dec}=props.card_render
  return (
    <>
    <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img className='w-3/4   ' src={img_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{dec}</p>

  </div>
</div>
    
    
    </>
  )
}

export  {Card}