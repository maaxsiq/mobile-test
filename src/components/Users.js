import React from 'react';
import { View } from 'react-native';

 import { Container,Name } from './styles';
import { useNavigation } from '@react-navigation/native';

const Users = ({item}) => {
  const {navigate} = useNavigation()

  return(
    <Container onPress={()=>navigate('Details',{item})}>
        <Name>{item?.name||''}</Name>
    </Container>
  );
}

export default Users;