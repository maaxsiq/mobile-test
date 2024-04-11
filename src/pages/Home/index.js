import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { api } from '../../services/api';
import Users from '../../components/Users';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const {data,isSuccess} = useQuery(['users'],async ()=>{
    const {data} = await api.get('/users')
   return data
  })
  
  if(!isSuccess){
    return null
  }

  return(
   <ScrollView>
    {
      data.users.map(item=>(
        <Users item={item}/>
      ))
    }

   </ScrollView>
  )
}

export default Home;
