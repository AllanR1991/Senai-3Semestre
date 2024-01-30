import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import * as Font from 'expo-font'
import { Titulo } from './src/components/Title/Title';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'black-ops-one': require('@expo-google-fonts/black-ops-one'),
      'lobster': require('@expo-google-fonts/lobster'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

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
      <Titulo>Contador : {count}</Titulo>
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