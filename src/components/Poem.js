import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'

class Poem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ width: '100%', flexDirection: 'column', height: '100%', padding: 10 }}>
                <Text style={{ fontWeight: '700', fontSize: 20, textAlign: 'center', }}>Poema</Text>
                <Text style={{ fontWeight: '700', fontSize: 20, textAlign: 'center' }}>Vamos Cuidar da Natureza</Text>
                <View style={{ flex: 1, flexDirection: 'row', borderRadius: 25, marginTop: 30 }}>

                    <View style={{ backgroundColor: '#40b759', flex: 1, alignContent: 'center', borderTopStartRadius: 5, borderBottomStartRadius: 5, justifyContent: 'center', height: 80 }}>
                        <Text style={{ color: 'white', textAlign: 'center', }}>PUBLICADO</Text>
                        <Text style={{ color: 'white', textAlign: 'center' }}>02 DE julhe DE 2020 </Text>

                    </View>
                    <View style={{ backgroundColor: '#bb2b29', flex: 1, alignContent: 'center', borderTopEndRadius: 5, borderBottomEndRadius: 5, justifyContent: 'center', height: 80 }}>
                        <Text style={{ color: 'white', textAlign: 'center', }}>PRAZO: ATE</Text>
                        <Text style={{ color: 'white', textAlign: 'center' }}>01 DE dezembro DE 2020 </Text>
                    </View>
                </View>

                {/* <ScrollView> */}


                <View style={{ width: '100%', flex: 5 }}>
                    <ScrollView style={{ width: '100%', padding: 20, backgroundColor: '#efefef', borderRadius: 20 }}>
                        <Text>
                            <Text style={{ color: '#faa452', fontWeight: 'bold' }}>MATEMATICA  </Text>
                            <Text >ELISANE DUTRA ROSSI CEDANO</Text>
                        </Text>

                        <Text style={{ fontWeight: 'bold', margin: 20 }}>Poem</Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
<Text></Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
<Text></Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
<Text></Text>

                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
<Text></Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
<Text></Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>
                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>

                        <Text style={{}}> Poem Here poem   </Text>






                    </ScrollView>
                </View>
                {/* </ScrollView> */}
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

export default Poem;
