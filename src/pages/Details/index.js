import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

 import { Container,Title,Interest} from './styles';

const Details = () => {
    const route = useRoute()
  return(
        <Container>
         <Title>Name: {route.params.item.name}</Title>
         <Title>Interest:</Title>
         {route.params.item.interest.map(item=>(
            <Interest>{item}</Interest>
         ))}

        </Container>
  );
}

export default Details;