import React from 'react';
import "./ImageReveal.scss";
import People from "../images/vadim-sadovski--Q9YUzjHuis-1440.webp";

const ImageReveal = () => {
    return (
        <section className="main">
            <div className="container">
                <>
                    <div className="img-container">
                        <img src={People}/>
                    </div>
                </>
            </div>
        </section>
    )
}

export default ImageReveal;