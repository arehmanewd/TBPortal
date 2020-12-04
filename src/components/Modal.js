import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from "react-native";

const PopupModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal style={{ width: 30, borderWidth:2 }}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%', flexDirection: 'row-reverse' }}>
                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Image style={{width:30, height:30}} source={require('../assets/img/cross.png')} />
                        </TouchableHighlight>
                        </View>
                        <View style={{ padding: 10 }}>

                            <Text style={{ fontSize: 30, color: 'darkgrey', paddingTop: 30, paddingBottom: 30, textAlign: 'center' }}>Compartamento</Text>
                            <Text style={{ fontSize: 15, color: 'darkgrey', paddingTop: 0, paddingBottom: 30, textAlign: 'center' }}>O aluno conversou muito com os coleguinhas durante a aula e atrapalhou a professora</Text>
                            <Text style={{ fontSize: 15, color: 'aquamarine', paddingTop: 0, paddingBottom: 30, textAlign: 'center' }}>A professra pediu silencio e ele obedeceu.</Text>
                            <Text style={{ fontSize: 15, color: 'aquamarine', paddingTop: 0, paddingBottom: 30, textAlign: 'center' }}>Date: 25/06/2020</Text>
                        </View>

                       
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        // height:'100%',
        justifyContent: "center",
        alignItems: "center",
        // alignContent:'center'
        // marginTop: 52
    },
    modalView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 170,
        backgroundColor: "white",
        borderRadius: 7,
        padding: 10,
        width: '90%',
        alignItems: "center",
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default PopupModal;