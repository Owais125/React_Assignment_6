import React from 'react'
import { Card_1 } from './Card_1'

const Section_2 = () => {
    const arr=[
        {
            img_url:"https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price:200
        },
        {
            img_url:"https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price:200
        },
        {
            img_url:"https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price:200
        },
        {
            img_url:"https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price:200
        },
        {
            img_url:"https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price:200
        },






    ] 
  return (<>
  <h1>Recommended for you</h1>
    <div className='flex'>
        {
            arr.map((data,i)=>{
                return<>
                <div>
                    <Card_1 key={i} Card_Data={data}/>
                </div>
                
                
                
                </>

            })
        }
    </div>
    </>
  )
}

export  {Section_2}