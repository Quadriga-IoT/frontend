import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'

const API = 'https://rickandmortyapi.com/api/character'
const Episodes = () => {
  const [characters, setCharacters] = useState([])
  //yüklenip yüklenmeme durumunu boolean olarak tutacağımız bir state oluşturuyoruz
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    })
  }, [])
  const fetchData = async () => {
    const response = await axios.get(API)
    console.warn(response.data.results)
    setCharacters(response.data.results)
     //Datayı set ettikten hemen sonra loading değerini false a çekiyoruz
    setLoading(false)
  }

  const renderItem = ({ item }) => {
    return (
      <Text>{item.name}</Text>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
      {
      //Burada loading değeri eğer true ise FlatList i ekrana basıyoruz. False ise ActivityIndıcator döndürüyoruz.
        !loading ? (
          <FlatList data={characters} renderItem={renderItem}></FlatList>
        ) :
          <ActivityIndicator />
      }
    </View>
  )
}
export default Episodes