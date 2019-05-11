import React from 'react';
import './ImageList.css';
import Imagecard from './Imagecard';

const ImageList = (props) => {
    const images = props.images.map(image => {
        return <Imagecard key={image.id} image={image} />
    });
    return (
        <div className="d-flex">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto">
                        {images}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageList;