import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Quote from './components/Quote';

const data = [
  {
    text: 'Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.',
    author: 'Albert Einstein',
  },
  {
    text: 'Man braucht nichts im Leben zu fürchten, man muss nur alles verstehen.',
    author: 'Marie Curie',
  },
  {
    text: 'Nichts ist so beständig wie der Wandel.',
    author: 'Heraklit',
  },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const quote = data[index];

  return (
    <View style={styles.container}>
      <Quote text={quote.text} author={quote.author} />
      <Pressable
        onPress={() => setIndex((index + 1) % data.length)}
        style={styles.next}
      >
        <Text style={styles.nextText}>Nächstes Zitat</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    position: 'absolute',
    bottom: 60,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'darkslateblue',
    backgroundColor: 'darkslateblue',
  },
  nextText: {
    color: '#FFF',
    fontSize: 18,
  },
});
