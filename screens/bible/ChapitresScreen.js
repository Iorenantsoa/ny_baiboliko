import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
  { title: "fqjdkfq", age: "13" },
]
 
const ChapitresScreen = () => {
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        {data.map((d, index) => (
          <View key={index} style={{ fontSize: 30 }}>
            <Text>{d.title} | {d.age}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ChapitresScreen

const styles = StyleSheet.create({})