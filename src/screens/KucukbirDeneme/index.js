import React from 'react';
import { View, Text,FlatList} from 'react-native';
import axios from 'axios';
export default class KucukbirDeneme extends React.Component 
{

  constructor(props) {
    super(props);
    this.state = {
        data:[]
    }
  }
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>
      {
        this.setState({data : res.data})
      })
      .catch((e) => console.log(e))
  }
  
    render(){
      const {data} = this.state;
      return(<View>
       <FlatList 
       data = {data}
       keyExtractor = {(item) => item.id.toString()}
       renderItem = {({item}) => 
       <View style = {{padding: 10}}>
         <Text> {item.title}</Text>
         <Text> {item.body}</Text>
       </View>}/>      
      </View>  
      )
    }
}


