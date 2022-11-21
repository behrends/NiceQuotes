import { Text } from 'react-native';

export default function Quote({ author, text }) {
  return (
    <>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.author}>&mdash; {author}</Text>
    </>
  );
}

const styles = {
  text: { fontSize: 38, fontStyle: 'italic' },
  author: { fontSize: 24 },
};
