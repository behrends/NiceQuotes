import { StyleSheet, Text, View } from 'react-native';

export default function Quote({ author, text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.author}>&mdash; {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 38,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  author: {
    fontSize: 24,
  },
});
