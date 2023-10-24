import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./components/Main/index.js"
import Title from "./components/Title/index.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <Title/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
