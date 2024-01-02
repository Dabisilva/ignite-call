import React from 'react';


import { Container, UserEmptyImage, UserImage } from './styles';

type PhotoProps = {
    img?: string;
    size: 'sm' | 'lg'
}

export function Photo({img, size}: PhotoProps){
  return (
    <Container>
        {img ? <UserImage src={img} alt="Your photo" size={size}/> : <UserEmptyImage size={size}/>}
    </Container>
  );
}