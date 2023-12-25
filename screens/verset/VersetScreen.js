import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Colors/Colors'
import { Caption, Paragraph, Title } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons'
import { FadeOut } from 'react-native-reanimated'

const VersetScreen = () => {
  return (

    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.parentContainer}>
        <Title style={styles.dateTitle}>Verset Du jour</Title>
        <View style={styles.container}>
          <Title style={styles.title}>Jean, 15:7</Title>
          <View>
            <Paragraph>fqdjfkqdjfkqjdfkqjdfk</Paragraph>
          </View>
          <View style={styles.footerContainer}>
            <Caption>23 décembre 2023</Caption>
            <Caption><MaterialIcons size={23} name='share' color={Colors.purple}/></Caption>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default VersetScreen

const styles = StyleSheet.create({
  parentContainer: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  dateTitle :{
    fontWeight: '700', 
    fontSize : 15 , 
    fontStyle : 'italic'
  },
   container: { 
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    minHeight: 100,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16, 
    shadowColor: Colors.black, 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.2, 


  },
  title: {
    fontWeight: '500',
  } , 
  footerContainer :{
    flexDirection : 'row' , 
    justifyContent : 'space-between' , 
    alignItems : 'center',
    marginTop : 10 
  }
 
})