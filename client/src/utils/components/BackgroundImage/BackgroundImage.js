import React from 'react';
import './BackgroundImage.less';

const BackgroundImage = (props) => {
  const {src,alt} = props;
  return (
    <img className="background-image" src={src} alt={alt}/>
  );
}

export default BackgroundImage;