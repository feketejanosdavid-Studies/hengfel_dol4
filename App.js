import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  
  function startCalc() {
    let result = 2*Math.PI*Math.pow(radius,2)+2*Math.PI*radius*height*(radius+height);
    return result
  }

  return (
    <View style={styles.container}>
      <Text>kör alapú henger felszín számítás</Text>
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
