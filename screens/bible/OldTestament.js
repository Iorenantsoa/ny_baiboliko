import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import data from '../../data/0-BaibolyTestamentaTaloha.json';
import { Colors } from '../../Colors/Colors';


const OldTestament = ({navigation}) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.containerChapiter}
           key={index}
           onPress={() => navigation.navigate('PageView',
              {
                item: item , 
                book : item.meta.name
              })} 

           >
            <View style={styles.circleContainer}>
              <Text style={styles.textChapiterIndex}>{index + 1}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textChapiter}>{item.meta.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item)=>item.meta.name}
      />
    </View>
  )
}

export default OldTestament

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerChapiter: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray,
  },
  circleContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: Colors.purpleSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textChapiterIndex: {
    fontSize: 14,
    color: Colors.purple,
    fontWeight: "300",
  },
  textChapiter: {
    fontSize: 16,
    fontWeight: "300",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  }
});