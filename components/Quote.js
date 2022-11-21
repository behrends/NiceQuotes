import { Text } from 'react-native';

export default function Quote({ author, text }) {
  return (
    <>
      <Text style={{ fontSize: 38, fontStyle: 'italic' }}>
        {text}
      </Text>
      <Text style={{ fontSize: 24 }}>&mdash; {author}</Text>
    </>
  );
}
