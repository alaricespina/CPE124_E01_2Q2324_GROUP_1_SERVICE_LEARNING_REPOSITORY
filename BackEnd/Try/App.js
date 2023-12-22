import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD!</Text>
      <StatusBar style="auto" />
      <Button
      onPress={() => console.log("X")}
      title="Click Here for a Surprise!"
      color="red"
      />
      <Button
      onPress={() => console.log("D")}
      title="Click Here for a Surprise!"
      color="red"
      />
      <Button
      onPress={() => console.log("D")}
      title="Click Here for a Surprise!"
      color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39c5bb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});