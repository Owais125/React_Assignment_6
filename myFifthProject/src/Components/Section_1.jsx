import { Card } from './Card'
import React from 'react'
import { Card_1 } from './Card_1'

const Section_1 = () => {
    const arr = [

        {
            img_url: 'https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif',



        },
        {
            img_url: "https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif",

        }, {
            img_url: 'https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif',

        }, {
            img_url: "https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif",

        }
    ]

    


    return (
        <>
                <h1 className='ps-7 font-extrabold'>More reasons to shop</h1>
            <div className='container'>

                <div className='flex' >

                    <div className='w-5/5'>
                        <div className='w-4/4 flex '>
                            {
                                arr.map((current, i) => {

                                    return <>
                                       
                                            <Card card_render={current} key={i} />
                                        
                                    </>


                                })
                            }
                        </div>
                        </div>


                   




              


             
            </div>
            </div>
     
        

        </>

    )
}

export { Section_1 }