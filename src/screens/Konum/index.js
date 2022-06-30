import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';

export default class Konum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Konum', 'Tarih'],
      tableData: [],
      veri:{}
    }
  }



  componentDidMount(){
          axios.get('http://164.92.130.208')
          .then((res)=>
          {
            this.setState({veri : res.data});
            this.func();
          })
          .catch((e) => console.log(e))
      }

      func= () => {
       
        var ornek = new Array();
        const state1 = this.state;
        var veri_uzunlugu = state1.veri.data.length;
        for (i = 0; i< veri_uzunlugu; i++)
        {      
         ornek.push([state1.veri.data[i].location, state1.veri.data[i].date ]);   
        }
          this.setState({
            tableData: ornek
          })
        }

     

  render() {
    const state = this.state;
    return (
      <ScrollView style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>


      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

