import React from 'react'

const Slider_3 = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide01" className="carousel-item relative w-full">
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/0a9eb102-1449-4612-85e1-b94c4920b01f.png?format=avif" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide03" className="btn btn-circle">❮</a>
                        <a href="#slide02" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide02" className="carousel-item relative w-full">
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2600313f-1710-4c01-a1d3-cdc98ff69589.jpg?format=avif" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide01" className="btn btn-circle">❮</a>
                        <a href="#slide03" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide03" className="carousel-item relative w-full">
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/cf7d9bd1-315d-4182-840c-5d3d00226e55.gif?format=avif" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide02" className="btn btn-circle">❮</a>
                        <a href="#slide01" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { Slider_3 }