import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function IconButton({ onPress, icon, style }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <MaterialIcons name={icon} size={36} color="darkslateblue" />
    </Pressable>
  );
}
