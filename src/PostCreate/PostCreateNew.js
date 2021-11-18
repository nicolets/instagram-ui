import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function PostCreateNew(props) {
    const imageRef = useRef();
    const [croppedImage, setCroppedImage] = useState('')
    const [src, setSrc] = useState(null);
    const handleFileChange = e => {
        setSrc(URL.createObjectURL(e.target.files[0]))
    }
    const [result, setResult] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1 / 1 });

    function getCroppedImg() {
        const image = result;
        debugger;
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
      
        // New lines to be added
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";
      
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        // setResult(base64Image)
        setCroppedImage(base64Image)
        return base64Image;
    }

    async function submit(){
        const res = await fetch(croppedImage);
        const image = await res.blob();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <input type='file' accept='image/*' onChange={handleFileChange} />
                </div>
                <div className="col-6">
                    {src && <div className='col-6'>
                    <ReactCrop src={src} onImageLoaded={setResult} crop={crop} onChange={setCrop} />
                    <button className="btn btn-danger" onClick={()=> getCroppedImg()}>Crop Image</button>
                    </div>}
                    {result && <div className='col-6'>
                        <img ref={imageRef} src={croppedImage} alt='Cropped Image' className='img-fluid' />
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default PostCreateNew;