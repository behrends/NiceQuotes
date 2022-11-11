// 1) import-Anweisungen
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

// 2) unsere UI-Komponente deklarieren
export default function App() {
  return (
    // JSX --> UI
    <View style={styles.container}>
      <Text>
        Probleme kann man niemals mit derselben Denkweise lösen, durch
        die sie entstanden sind.
      </Text>
      <Text>-- Albert Einstein</Text>
      <Button title="Nächstes Zitat" />
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
