import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return  (
    <div className=''>
      <div className=''>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={}}></div>
      </div>
    </div>
  );
    
}

export default FaceRecognition;