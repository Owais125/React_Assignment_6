import React from 'react'
import { Card_1 } from './Card_1'

const Section_4 = () => {
    const arr = [
        {
            img_url: "https://f.nooncdn.com/p/v1615231293/N20985375A_1.jpg?format=avif&width=240",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },
        {
            img_url: "https://f.nooncdn.com/p/pnsku/N18938413A/45/_/1704712174/56ba35b5-a00f-47ff-800e-a129c903210d.jpg?format=avif&width=240",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },
        {
            img_url: "https://f.nooncdn.com/p/v1690474727/N53418074A_1.jpg?format=avif&width=240",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },
        {
            img_url: "https://f.nooncdn.com/p/v1615220190/N13164722A_1.jpg?format=avif&width=240",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },
        {
            img_url: "https://f.nooncdn.com/p/v1638273633/N41247590A_1.jpg?format=avif&width=240",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            price: 5200
        },




    ]
    return (
        <div>
            <h1 className='font-extrabold '>Clearance deals</h1>
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

export { Section_4 }