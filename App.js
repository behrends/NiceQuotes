// 1) import-Anweisungen
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

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

// 2) unsere UI-Komponente deklarieren
export default function App() {
  // Arbeit mit state (Zustand)
  // 1. Schritt: Komponente (function) mit state erweitern
  //  --> useState importieren (Hook)
  // 2. Schritt: initialen Zustand mit useState() festlegen
  useState(0); // initialer Zustand: 0
  const quote = data[0]; // initialer Zustand

  // state 1 --> data[0]
  // state 2 --> data[1]
  // state 3 --> data[2]

  return (
    // JSX --> UI
    <View style={styles.container}>
      <Text>{quote.text}</Text>
      <Text>&mdash; {quote.author}</Text>
      <Button title="Nächstes Zitat" onPress={() => alert('OK!')} />
      <StatusBar style="auto" />
    </View>
  );
}

// 3) benötigte Styles definieren --> Aussehen und Layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
