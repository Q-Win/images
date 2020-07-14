import React from 'react';
import ImageDetail from './image_detail'

const IMAGES = [
  {title: 'Pen', link: 'https://dummyimage.com/600x400'},
  {title: 'Pine Tree', link: 'https://dummyimage.com/600x400'},
  {title: 'Mug', link: 'https://dummyimage.com/600x400'}
]

const ImageList = () => {

  const RenderedImages = IMAGES.map(function (image){
    return <ImageDetail image={image}/>
  })

  return (
      <ul className="media-list list-group">
        {RenderedImages}
      </ul>
  );
};

export default ImageList;
