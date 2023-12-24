import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Caption, Paragraph, Title } from 'react-native-paper'
import { Colors } from '../../Colors/Colors'
import { MaterialIcons } from '@expo/vector-icons'

const OptionScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.parentContainer}>
        <View style={styles.offrePro}>
          <View style={styles.offreProHeader}>
            <Paragraph style={{ fontWeight: "700" }}>Offre Pro</Paragraph>
            <TouchableOpacity>
              <Paragraph style={{ fontWeight: "500" }}> Souscrire</Paragraph>
            </TouchableOpacity>
          </View>
          <Caption style={{ width: "70%" }}>Débloquez toutes les fonctionnalités de l'application</Caption>
        </View>
        <View style={styles.optionApp}>
          <Title style={styles.optionAppTitle}>Options D'application</Title>
          <View style={styles.optionAppContainer}>
            <View>
              <Title style={{ fontSize: 16, fontWeight: "500" }}>Bible actuelle</Title>
              <Caption>La Sainte Bible</Caption>
            </View>
            <View>
              <Caption>
                <MaterialIcons name="chevron-right" size={24} color={Colors.grey} />
              </Caption>
            </View>
          </View>
        </View>


        <View style={styles.optionGeneral}>
          <Title style={styles.optionGeneralTitle}>Général</Title>
          <View style={styles.optionGeneralParentContainer}>
            <View style={styles.optionGeneralContainer}>
              <View>
                <Title style={{ fontSize: 16, fontWeight: "500" }}>Noter</Title>
                <Caption style={{ width: "70%" }}>Dites-nous à quel vous aimez l'application</Caption>
              </View>
              
              <View> 
                <Caption>
                  <MaterialIcons name="chevron-right" size={24} color={Colors.grey} />
                </Caption>
              </View>
            </View>

            <View style={styles.optionGeneralContainer}>
              <View>
                <Title style={{ fontSize: 16, fontWeight: "500" }}>Contacter</Title> 
              </View>
              <View>
                <Caption>
                  <MaterialIcons name="chevron-right" size={24} color={Colors.grey} />
                </Caption>
              </View>
            </View>

          </View>
        </View>

      </View>

    </ScrollView>
  )
}

export default OptionScreen

const styles = StyleSheet.create({
  parentContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    minHeight: 100,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16
  },
  offreProHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  offrePro: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 0.3,
    paddingBottom: 10
  },
  optionApp: {
    marginTop: 20
  },
  optionAppTitle: {
    fontWeight: "500",
    fontSize: 18,
  },
  optionAppContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    shadowColor: Colors.gray
  },
  optionGeneral: {
    marginTop: 20
  },
  optionGeneralTitle: {
    fontWeight: "500",
    fontSize: 18,
  },
  optionGeneralContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    shadowColor: Colors.gray
  }
}) 