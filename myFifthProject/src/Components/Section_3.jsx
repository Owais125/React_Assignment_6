import React from 'react'
import { Card_1 } from './Card_1'

const Section_3 = () => {
    const arr = [
        {
            img_url: "https://f.nooncdn.com/products/tr:n-t_240/v1635071675/N42934460A_7.jpg",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },
        {
            img_url: "https://f.nooncdn.com/products/tr:n-t_240/v1646914144/N46569464A_1.jpg",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },
        {
            img_url: "https://f.nooncdn.com/products/tr:n-t_240/v1645647238/N26505142A_1.jpg",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },
        {
            img_url: "https://f.nooncdn.com/products/tr:n-t_240/v1652078576/N43431945A_1.jpg",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },




    ]
    return (
        <div>
            <h1 className='font-extrabold '>Deals only on noon</h1>
            <div className='flex'>
                {
                    arr.map((c,i)=>{

                        return<>
                        <Card_1 key={i} Card_Data={c}/>
                        </>
                        
                    })
                }
            </div>
        </div>
    )
}

export { Section_3 }