import React, { useState } from 'react';
import { Data } from 'state/action-types/data';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';
import { Container, CardMedia, Title, TitleContainer } from 'styles/Card';

interface CardProps {
  content: Data;
}

const Card: React.FC<CardProps> = ({ content }) => {
  const [IsLoad, setIsLoad] = useState<boolean>(true);

  const handleLoaded = (): void => {
    setIsLoad(false);
  };

  return (
    <Container>
      <Link href={content.link} target='_blank' rel='noreferrer'>
        {IsLoad && <Skeleton variant='rectangular' height='14rem' animation='wave' />}
        <CardMedia
          className='card-media'
          src={content.img}
          alt=''
          onLoad={handleLoaded}
          style={{ display: IsLoad ? 'none' : 'block' }}
        />
        <TitleContainer className='card-name'>
          <Title align='left'>{content.name}</Title>
        </TitleContainer>
      </Link>
    </Container>
  );
};

export default Card;
