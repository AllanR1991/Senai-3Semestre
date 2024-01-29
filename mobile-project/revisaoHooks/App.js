import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  //Hook
  const[count, setCount] = useState(0);

  //Funçao de incremento
  const increment = () => {
    setCount(count+1);
  }

  //Função de decremento
  const decrement = () => {
    setCount(count-1);
  }
  
  //Effect
  useEffect(() => {
    //Warn funciona apenas no mobile no web fazemos apenas com console.
    console.warn(`Contador atualizado: ${count}`)}, [count]);
  

  return (
    <View>      
      <Text>Contador : {count}</Text>
      <TouchableOpacity onPress={increment} style={styles.botao}>
        <Text style={styles.textoBotao}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement} style={styles.botao}>
        <Text style={styles.textoBotao}>Decrementar</Text>
      </TouchableOpacity>
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
    gap: 10,
  },
  botao: {
    backgroundColor: "#000",
    padding: 8,
    borderRadius: 8,        
  },
  textoBotao: {
    color: "#FFF"
  }
});
