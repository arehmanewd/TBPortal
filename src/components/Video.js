import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
// import YouTube from 'react-native-youtube';
// import YouTube from 'react-youtube';
// import { WebView } from 'react-native-webview'; 

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            }
        }
        return (
            <View style={{ width: '100%', flexDirection: 'column', height: '100%', padding: 10 }}>
                <Text style={{ fontWeight: '700', fontSize: 20, textAlign: 'center', }}>Video</Text>
                {/* <Text style={{ fontWeight: '700', fontSize: 20, textAlign: 'center' }}>Vamos Cuidar da Natureza</Text> */}
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

                <View style={{ width: '100%', flex: 5 }}>
                    <ScrollView style={{ width: '100%', padding: 20, backgroundColor: '#efefef', borderRadius: 20 }}>
                        <Text>
                            <Text style={{ color: '#faa452', fontWeight: 'bold' }}>MATEMATICA  </Text>
                            <Text >ELISANE DUTRA ROSSI CEDANO</Text>
                        </Text>

                        <Text style={{ fontWeight: 'bold', margin: 20 }}>Video</Text>
                        <View>

                            {/* <YouTube videoId="oxaOF2Y1L2A" opts={opts} /> */}
                        </View >



                    </ScrollView>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({

});

export default Video;
