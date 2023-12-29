import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../Colors/Colors';
import { Ionicons } from '@expo/vector-icons';
import { FAB, Provider as PaperProvider, Portal, Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { changeToDarkMode, changeToLightMode } from '../../redux/actions/isDayAction';
import { addFontSize, changeFont, reduceFontSize } from '../../redux/actions/ChangeFontAction';


const PageView = ({ route }) => {
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const item = route.params.item;
    const nameBook = route.params.book

    const dispatch = useDispatch()


    const isDay = useSelector(state => state.changeModeReducer.isDay)
    const font = useSelector(state => state.fontReducer.font)
    const fontSize = useSelector(state => state.fontReducer.fontSize)

    const fontActiveAndanda = font === "AndadaPro_400Regular" ? { ...styles.sectionTwoText, fontFamily: "AndadaPro_400Regular", color: Colors.purple } : { ...styles.sectionTwoText, fontFamily: "Raleway" }
    const fontActiveRaleway = font === "Raleway" ? { ...styles.sectionTwoText, fontFamily: "Raleway", color: Colors.purple } : { ...styles.sectionTwoText, fontFamily: "Raleway" }
    const fontActiveLato = font === "Lato_400Regular" ? { ...styles.sectionTwoText, fontFamily: "Lato_400Regular", color: Colors.purple } : { ...styles.sectionTwoText, fontFamily: "Raleway" }
    const fontActiveLora = font === "Lora_400Regular" ? { ...styles.sectionTwoText, fontFamily: "Lora_400Regular", color: Colors.purple } : { ...styles.sectionTwoText, fontFamily: "Raleway" }

    useEffect(() => {
        console.log(font)
    }, [fontSize])

    return (
        <PaperProvider>
            <View style={styles.TitleContainer}>
                <Text style={styles.textBook}>{nameBook}</Text>
            </View>

            <ScrollView style={isDay ? styles.container : styles.containerDark}>
                {Object.keys(item).map(chapitre => {
                    return (
                        <View key={chapitre}>
                            <Text style={isDay ? styles.chapitre : styles.chapitreDark}>Chap.{chapitre}</Text>
                            {Object.keys(item[chapitre]).map(verset => {

                                const contenu = item[chapitre][verset];

                                return (
                                    <View key={verset}>
                                        <Text style={styles.verset}>{verset} <Text style={isDay ? { ...styles.contenu, fontFamily: font, fontSize: fontSize } : { ...styles.contenuDark, fontFamily: font, fontSize: fontSize }}>{contenu}</Text></Text>
                                    </View>
                                );
                            })}
                        </View>
                    );
                })}
            </ScrollView>
            <FAB
                style={styles.fab}
                icon={() => (
                    <Ionicons name="text" size={24} color="black" />
                )}
                size='small'
                onPress={showModal}
            />
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={isDay ? styles.containerModalStyle : styles.containerModalDarkStyle} >
                    <View style={styles.modalStyleContainerSectionOne}>

                        <TouchableOpacity
                            style={isDay ? styles.sectionOne : styles.sectionOneDark}
                            onPress={() => {
                                dispatch(changeToLightMode())
                            }}
                        >
                            <Text style={styles.sectionOneTextDay}><Ionicons name="sunny" size={18} color={isDay ? Colors.purple : Colors.grey} /><Text style={isDay ? { color: Colors.purple } : { color: Colors.grey }}> Day</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={isDay ? styles.sectionOne : styles.sectionOneDark}
                            onPress={
                                () => {
                                    dispatch(changeToDarkMode())
                                }}
                        >
                            <Text style={styles.sectionOneTextNight}><Ionicons name="moon" size={18} color={!isDay ? Colors.purple : Colors.grey} /> <Text style={!isDay ? { color: Colors.purple } : { color: Colors.grey }}> Night</Text></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={isDay ? styles.modalStyleContainerSectionTwo : styles.modalStyleContainerSectionTwoDark}>
                        <TouchableOpacity style={styles.sectionTwo}
                            onPress={() => {
                                dispatch(changeFont("AndadaPro_400Regular"))
                            }} 
                        >
                            <Text style={fontActiveAndanda}>Andada</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sectionTwo}

                            onPress={() => {
                                dispatch(changeFont("Lato_400Regular"))
                            }}

                        >
                            <Text style={fontActiveLato}>Lato</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sectionTwo}

                            onPress={() => {
                                dispatch(changeFont("Lora_400Regular"))
                            }}
                        >
                            <Text style={fontActiveLora}>Lora</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sectionTwo}

                            onPress={() => {
                                dispatch(changeFont("Raleway"))
                            }}

                        >
                            <Text style={fontActiveRaleway}>Raleway</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={isDay ? styles.modalStyleContainerSectionThree : styles.modalStyleContainerSectionThreeDark}>
                        {
                            fontSize <= 10 ? ((<TouchableOpacity
                                onPress={() => dispatch(reduceFontSize(2))}
                                disabled={true}
                            >
                                <Ionicons name="text" size={17} color={Colors.grey} style={styles.sectionThreeIcon1} />
                            </TouchableOpacity>))

                                :

                                (<TouchableOpacity
                                    onPress={() => dispatch(reduceFontSize(2))}
                                >
                                    <Ionicons name="text" size={17} color={Colors.grey} style={styles.sectionThreeIcon1} />
                                </TouchableOpacity>)
                        }


                        {
                            fontSize >= 24 ? (
                                <TouchableOpacity
                                    onPress={() => dispatch(addFontSize(4))}
                                    disabled = {true}
                                >
                                    <Ionicons name="text" size={28} color={Colors.grey} style={styles.sectionThreeIcon2} />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => dispatch(addFontSize(4))}
                                >
                                    <Ionicons name="text" size={28} color={Colors.grey} style={styles.sectionThreeIcon2} />
                                </TouchableOpacity>
                            )
                        }


                    </View>
                </Modal>
            </Portal>
        </PaperProvider>
    );
};

export default PageView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 15,

    },
    containerDark: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 15,
        backgroundColor: Colors.black
    },
    TitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.purple,
        paddingVertical: 15,
    },
    textBook: {
        fontFamily: "Acme_400Regular",
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.white

    },

    chapitre: {
        fontFamily: "Acme_400Regular",
        color: Colors.black,
        fontWeight: "700",
        fontSize: 25,
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 5

    },
    chapitreDark: {
        fontFamily: "Acme_400Regular",
        color: Colors.white,
        fontSize: 25,
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 5

    },
    verset: {
        color: Colors.purple,
        fontWeight: "500",
        fontSize: 15,
        textAlign: "justify"
    },
    contenu: {
        color: Colors.black,
        fontWeight: '400',
        fontSize: 14,

    },

    contenuDark: {
        color: Colors.white,
        fontWeight: '200',

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    containerModalStyle: {

        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.white,

        shadowColor: Colors.white,
        shadowOffset: { width: 12, height: 12 },
        shadowOpacity: 1
    },
    containerModalDarkStyle: {

        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.blackSecondary,
    },
    modalStyleContainerSectionOne: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    modalStyleContainerSectionTwo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.gray
    },
    modalStyleContainerSectionTwoDark: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        borderWidth: 0.9,
        borderColor: Colors.gray
    },
    sectionOne: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.gray,
        flex: 1
    },
    sectionOneDark: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.9,
        borderColor: Colors.gray,
        flex: 1
    },


    sectionOneTextDay: {
        fontWeight: "500",
        fontSize: 18,

    },
    sectionOneTextNight: {
        fontWeight: "500",
        fontSize: 18,
    },
    sectionTwo: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionTwoText: {
        fontWeight: "500",
        color: Colors.grey
    },
    modalStyleContainerSectionThree: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.gray
    },
    modalStyleContainerSectionThreeDark: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        borderWidth: 0.9,
        borderColor: Colors.gray
    },
    sectionThreeIcon1: {
        padding: 15,

    },
    sectionThreeIcon2: {
        padding: 15,
    },

    fontTextColor: {
        color: Colors.purple
    }

});
