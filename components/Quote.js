import { Text } from 'react-native';

export default function Quote({ author, text }) {
  return (
    <>
      <Text>{text}</Text>
      <Text>&mdash; {author}</Text>
    </>
  );
}
