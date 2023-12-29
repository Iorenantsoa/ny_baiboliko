import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../Colors/Colors';
import { Caption, Paragraph, Title } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import bibleVerses from '../../data/0-BaibolyTestamentaVaovao.json';

const VersetScreen = () => {
  const getRandomVerse = () => {
    const randomChapterIndex = Math.floor(Math.random() * bibleVerses.length);
    const randomChapter = bibleVerses[randomChapterIndex];

    const chapterKey = Object.keys(randomChapter)[0];
    const verses = randomChapter[chapterKey];

    const randomVerseIndex = Math.floor(Math.random() * Object.keys(verses).length);
    const randomVerseKey = Object.keys(verses)[randomVerseIndex];

    return {
      chapter: chapterKey,
      reference: `${chapterKey}:${randomVerseKey}`,
      text: verses[randomVerseKey],
    };
  };

  const [verse, setVerse] = useState(getRandomVerse());
  const [date, setDate] = useState(new Date().toLocaleDateString('fr-FR'));

  const handleRefresh = () => {
    setVerse(getRandomVerse());
    setDate(new Date().toLocaleDateString('fr-FR'));
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.parentContainer}>
        <Title style={styles.dateTitle}>Verset Du jour</Title>
        <View style={styles.container}>
          <Title style={styles.title}>{verse.chapter} - {verse.reference}</Title>
          <View>
            <Paragraph>{verse.text}</Paragraph>
          </View>
          <View style={styles.footerContainer}>
            <Caption>{date}</Caption>
            <Caption onPress={handleRefresh}>
              <MaterialIcons size={23} name="refresh" color={Colors.purple} />
            </Caption>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default VersetScreen;

const styles = StyleSheet.create({
  parentContainer: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  dateTitle: {
    fontWeight: '700',
    fontSize: 15,
    fontStyle: 'italic',
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
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
