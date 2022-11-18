// 1) import-Anweisungen
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
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

// 2) unsere UI-Komponente deklarieren
export default function App() {
  // useState-Hook erweitert Komponente/Funktion mit Zustand
  // Vorgehen:
  // - useState-Hook importieren
  // - useState mit initialem Zustandswert aufrufen
  // - Rückgabe destrukturieren: state-Objekt, Änderungsfunkt.
  // - State-Änderungen mit der Änderungsfunktion durchführen
  // --> bei State-Änderung wird UI automatisch aktualisiert
  // --> deklarative, reaktive Programmierung in React (Native)
  const [index, setIndex] = useState(0);

  // Destrukturierung:
  // const list = [8,4,5,7,1];
  // const [first, second, third] = list;
  // entspricht:
  // const first = list[0];
  // const second = list[1];
  // const third = list[2];

  const quote = data[index];

  return (
    // JSX --> UI
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

// 3) benötigte Styles definieren --> Aussehen und Layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
