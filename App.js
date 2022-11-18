import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
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
      <Button
        title="Nächstes Zitat"
        onPress={() => setIndex((index + 1) % data.length)}
      />
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
});
