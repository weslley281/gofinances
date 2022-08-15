import { StyleSheet, Text, View } from 'react-native';

export function Test() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estou testando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
