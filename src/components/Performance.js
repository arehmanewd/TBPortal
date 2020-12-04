import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList, StyleSheet, ScrollView, Linking, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { StackedBarChart } from 'react-native-chart-kit'
import Chart from 'chart.js';
import Svg from '../assets/img/Artboard1.svg'
import LinearGradient from 'react-native-linear-gradient'

class Performance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: 'java',
            step: '',
            data: [
                { title: 'english', marks: '60', color: 'red' },

                { title: 'Arts', marks: '100', color: 'green' },
                { title: 'Physics', marks: '40', color: 'lightgreen' },
                { title: 'Urdu', marks: '30', color: 'blue' },
                { title: 'Chem', marks: '20', color: 'orange' },
                { title: 'Bio', marks: '30', color: 'grey' },
                { title: 'english', marks: '40', color: 'black' },
                { title: 'english', marks: '50', color: 'purple' },
                { title: 'english', marks: '60', color: 'darkgrey' },
                { title: 'english', marks: '70', color: '#48bfaf' },
                { title: 'english', marks: '80', color: '#6859ff' },
                { title: 'english', marks: '100', color: '#f0578a' },
                { title: 'english', marks: '90', color: 'red' },
                { title: 'english', marks: '90', color: 'red' },
            ],




        }
    }
    handleInput = (value, prop) => {
        const state = this.state;
        state[prop] = value;
        this.setState(state);
    }

    render() {
        console.log(this.state.data.length / 2)
        return (
            <ScrollView>


                <View style={{ width: '100%', flexDirection: 'column', height: '100%', padding: 10, justifyContent: 'flex-start' }}>
                    <Text style={{ fontWeight: '700', fontSize: 20, textAlign: 'center', }}>Peca de Teatro</Text>
                    <Text>Etapa para busca dos resultados</Text>
                    <View style={{ borderColor: 'lightgrey', borderWidth: 1, borderRadius: 7, marginTop: 15 }}>

                        <Picker
                            // mode='dropdown'
                            style={{ borderWidth: 1, borderColor: 'red', margin: -5 }}
                            selectedValue={this.state.step}
                            onValueChange={(value) => this.handleInput(value, 'step')} >
                            <Picker.Item label="1st Step" value="1st Step" />
                            <Picker.Item label="2nd Step" value="2st Step" />
                            <Picker.Item label="3rd Step" value="3rd Step" />
                        </Picker>
                    </View>


                    <View style={{ width: '100%', marginTop: 20 }}>


                        <View style={{ width: '100%', padding: 10, height: 200, backgroundColor: '#efefef', borderRadius: 10, justifyContent: 'space-between' }}>
                            {/* <View style={{ height: '50%', width: '100%', backgroundColor: 'red', flexDirection: 'row' }}> */}
                            <View style={styles.div}>
                                <View style={{ flexDirection: "row" }}>

                                    <Image style={styles.imagsetboy} source={require('../assets/img/boy.png')} />
                                    <View>

                                        <Text style={styles.textsboydiv}>ISSAC DA ROCHA</Text>
                                        <View style={{ flexDirection: 'row', margin: 10 }}>
                                            <View style={{ backgroundColor: 'lightblue', borderRadius: 5, height: 30, width: 40, margin: 5, alignItems: 'center', justifyContent: 'center' }}>

                                                <Text >100</Text>
                                            </View>
                                            <View style={{ backgroundColor: 'red', width: 40, borderRadius: 5, margin: 5, height: 30, alignItems: 'center', justifyContent: 'center' }}>

                                                <Text style={{}}>0</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                {/* </View> */}
                            </View>
                            <View style={{ height: '40%', flexDirection: 'row' }}>

                                {this.state.data.map((data, Index) => {
                                    return (

                                        <View key={Index} style={{ justifyContent: 'flex-end' }}>
                                            <View style={{ width: 20, height: data.marks + '%', backgroundColor: data.color, borderRadius: 3, margin: 1.5, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white',fontSize:10 }}>{data.marks}</Text></View>
                                            <View style={{ width: 20, height: 30, backgroundColor: 'grey', borderRadius: 3, margin: 1.5, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white' }}>60</Text></View>
                                        </View>

                                    )
                                })}

                            </View>
                        </View>
                    </View>
                    {
                        this.state.data.slice(this.state.data.length / 2).map((data, Index) => {

                            return (
                                <View key={Index} style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 30, height: 20, backgroundColor: this.state.data[Index * 2].color, borderRadius: 3 }}></View>
                                        <View style={{ marginLeft: 10 }}><Text style={{ textTransform: 'capitalize' }}>{this.state.data[Index * 2].title} </Text></View>
                                    </View>
                                    {(this.state.data.length > (Index * 2) + 1) ?
                                        <View style={{ width: '50%', borderRadius: 3, flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: 30, height: 20, backgroundColor: this.state.data[(Index * 2) + 1].color, borderRadius: 3 }}></View>
                                            <View style={{ marginLeft: 10 }}><Text style={{ textTransform: 'capitalize' }}>{this.state.data[(Index * 2) + 1].title} </Text></View>
                                        </View>
                                        : null}


                                </View>
                            )


                        })
                    }

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: '30%', borderRadius: 10, backgroundColor: '#48bfaf', padding: 15, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/img/icon1.png')} />
                            {/* <Svg/> */}
                            <Text style={{ textAlign: 'center', color:'white' }}>Dentro da Expectative</Text>
                        </View>
                        <View style={{ width: '30%', backgroundColor: '#ef4780', borderRadius: 10, padding: 15, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/img/icon2.png')} />
                            <Text style={{ textAlign: 'center', color:'white' }}>Dentro da Expectative</Text>

                        </View>
                        <LinearGradient
                            colors={['#816eb2', '#6859ff']}
                            start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                            style={{ width: '30%', borderRadius: 10, backgroundColor: 'yellow', padding: 15, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/img/icon3.png')} />
                            <Text style={{ textAlign: 'center', color: 'white' }}>Dentro da Expectative</Text>

                        </LinearGradient>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <LinearGradient 
                            colors={['#f48784', '#f0578a']}
                         style={{ width: '30%', borderRadius: 10, backgroundColor: 'darkslateblue', padding: 15, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/img/icon4.png')} />
                            <Text style={{ textAlign: 'center', color:'white' }}>Dentro da Expectative</Text>

                        </LinearGradient>
                        <View style={{ width: '30%', borderRadius: 10, backgroundColor: '#3e60ec', padding: 15, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/img/icon5.png')} />
                            <Text style={{ textAlign: 'center', color:'white' }}>Dentro da Expectative</Text>

                        </View>
                        <View style={{ width: '30%', borderRadius: 10, backgroundColor: '#f9a05e', padding: 15, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/img/icon6.png')} />
                            <Text style={{ textAlign: 'center', color:'white' }}>Dentro da Expectative</Text>

                        </View>
                    </View>

                </View>
            </ScrollView>
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
    main: {
        marginTop: 1,
        paddingTop: 10,
        padding: 25,
        color: "black",
    },
    maintext: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,

    },
    div: {
        flex: 1,
        // marginTop: 20,
        fontSize: 10,
        color: "black",
        // backgroundColor: '#EFEFEF',
        textAlign: 'center',
        // padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    div1: {
        flex: 1,
        marginTop: 20,
        fontSize: 10,
        color: "black",
        backgroundColor: '#F79859',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    textinner: {
        color: "white",
        fontSize: 11,
    },
    div2: {
        flex: 1,
        marginTop: 10,
        fontSize: 10,
        color: "black",
        backgroundColor: '#F4907E',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    div3: {
        flex: 1,
        marginTop: 10,
        fontSize: 10,
        color: "black",
        backgroundColor: '#8CE78C',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    div4: {
        flex: 1,
        marginTop: 10,
        fontSize: 10,
        color: "black",
        backgroundColor: '#6699FF',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    div5: {
        flex: 1,
        marginTop: 20,
        fontSize: 10,
        color: "white",
        backgroundColor: '#4452DF',
        textAlign: 'center',
        padding: 5,
        paddingBottom: 0,
        borderRadius: 5,
        borderColor: 'white',

    },
    imagseticon1: {
        top: -22,
        left: 10,
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    icontext: {
        color: "white",
        marginLeft: 13,
        fontSize: 12,
        fontWeight: "bold",
    },
    div6: {
        flex: 1,
        marginTop: -2,
        fontSize: 10,
        color: "white",
        backgroundColor: '#F4907E',

        textAlign: 'center',
        padding: 5,
        paddingBottom: 0,
        borderRadius: 5,
        borderColor: 'white',

    },
    div7: {
        flex: 1,
        marginTop: -2,
        fontSize: 10,
        color: "white",
        backgroundColor: '#F7804A',
        textAlign: 'center',
        padding: 5,
        paddingBottom: 0,
        borderRadius: 5,
        borderColor: 'white',

    },

    texthead: {
        color: "white",
        fontSize: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 6,
    },
    container: { flex: 1, marginTop: 20, backgroundColor: '#fff', borderColor: '#C0C0C0', borderStyle: 'dotted', borderWidth: 1, },
    head: { paddingLeft: 5, height: 40, backgroundColor: "#C0C0C0", fontWeight: "bold", textAlign: "center" },
    texttable: { flex: 1, margin: 6, color: "black", fontSize: 12, fontWeight: "bold", borderColor: '#C0C0C0', borderWidth: 1, },
    textS: { margin: 6, color: "black", fontSize: 12, fontWeight: "bold", borderColor: '#C0C0C0', borderWidth: 1, textAlign: "center" },
    texttabledata: { padding: 10, color: "black", fontSize: 10, fontWeight: "bold", textAlign: "left", borderBottomColor: '#C0C0C0', borderBottomWidth: 1, },
    textdataS: { paddingLeft: 10, color: "black", fontSize: 10, fontWeight: "bold", borderBottomColor: '#C0C0C0', borderBottomWidth: 1, },
    textdataSMALL: { flex: 1, paddingLeft: 10, color: "black", fontSize: 7.5, width: 160, borderBottomColor: '#C0C0C0', borderBottomWidth: 1, },
    imagsetboy: {
        borderRadius: 40,
        width: 70,
        height: 70,
    },
    textsboydiv: {
        paddingLeft: 5,
        paddingTop: 6,
        fontSize: 12,

        // textAlign: "right",
        marginLeft: 10,
    },
    textsmallboy: {
        paddingLeft: 5,
        padding: 0,
        marginTop: 3,
        fontSize: 8,

        marginLeft: 10,
    },
    textsmallboyB: {

        color: "white",
        backgroundColor: 'black',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 15,
        borderRadius: 50,
        fontSize: 8,
        marginTop: 5,
        fontWeight: "bold",
    },
});

export default Performance;
