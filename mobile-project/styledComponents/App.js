import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';


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
    <Container>      
      <Text>Contador : {count}</Text>
      <TouchableOpacity onPress={increment}>
        <Text>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement}>
        <Text>Decrementar</Text>
      </TouchableOpacity>
      <StatusBar/>
    </Container>
  );
}