import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
interface BoxTitleProps {
  children: React.ReactNode;
}
export function BoxTitle({ children }: BoxTitleProps) {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} // Degradê de azul
      style={styles.card}
    >
      <Text style={styles.name}>{children}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  name: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Card;
