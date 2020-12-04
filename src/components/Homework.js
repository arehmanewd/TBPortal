import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text,FlatList,StyleSheet } from 'react-native'

class Homework extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={{ width: '100%', flexDirection: 'column', height: '100%', padding: 10 }}>
       <Text style={{fontWeight:'700', fontSize:20,textAlign: 'center', }}>Tarefa de Casa</Text>
            <Text style={{ fontWeight:'700', fontSize:20, textAlign: 'center' }}>Exercicios Matematica </Text>
        <View style={{ flex: 1, flexDirection: 'row', borderRadius: 25, marginTop:30 }}>

          <View style={{ backgroundColor: '#40b759', flex: 1, alignContent: 'center', borderTopStartRadius: 5, borderBottomStartRadius: 5, justifyContent: 'center', height: 80 }}>
            <Text style={{ color: 'white', textAlign: 'center', }}>PUBLICADO</Text>
            <Text style={{ color: 'white', textAlign: 'center' }}>02 DE julhe DE 2020 </Text>

          </View>
          <View style={{ backgroundColor: '#bb2b29', flex: 1, alignContent: 'center', borderTopEndRadius: 5, borderBottomEndRadius: 5, justifyContent: 'center', height: 80 }}>
            <Text style={{ color: 'white', textAlign: 'center', }}>PRAZO: ATE</Text>
            <Text style={{ color: 'white', textAlign: 'center' }}>01 DE dezembro DE 2020 </Text>
          </View>
        </View>


        <View style={{ width: '100%', flex: 5 }}>
          <View style={{ width: '100%', padding: 20, backgroundColor: '#efefef', height: 300, borderRadius: 20 }}>
            <Text>
              <Text style={{ color: '#faa452', fontWeight:'bold' }}>MATEMATICA  </Text>
              <Text >ELISANE DUTRA ROSSI CEDANO</Text>
            </Text>

            <Text style={{fontWeight:'bold'}}>Exercicios</Text>
            <Text style={{}}> Lorem jnb jhbgv xkjcbv izjkbvsdhse hh hderu  </Text>

            <View style={styles.container}>
      <FlatList
        data={[
          {key: 'a) 5 + 8 + 9'},
          {key: 'b) 100 - 33 -2'},
          {key: 'c) 2 * 25 * 2'},
          {key: 'd) 1000 / 4'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>


          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
  },
});

export default Homework;
