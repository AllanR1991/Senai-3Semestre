import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Container } from './src/components/Container/Container';
import { Titulo } from './src/components/Title/Title';
import { Botao, Botao2, BotaoTeste, BotaoTeste2 } from './src/components/Button/Button';
import { useFonts, BlackOpsOne_400Regular } from '@expo-google-fonts/black-ops-one';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { TextoBotao, TextoBotao2 } from './src/components/Button/Label/Label';



export default function App() {

  

  //Hook
  const[count, setCount] = useState(0);

  //Funçao de incremento
  const increment = () => {
    setCount(count+1);
  }

  //Função de decremento
  const decrement = () => {
    if(count > 0){
      setCount(count-1);
    }
  }
  
  //Effect
  useEffect(() => {
    //Warn funciona apenas no mobile no web fazemos apenas com console.
    console.warn(`Contador atualizado: ${count}`)}, [count]);

  
    let [fontsLoaded, fontError] = useFonts({
      Lobster_400Regular,
      BlackOpsOne_400Regular
    });
  
    if (!fontsLoaded && !fontError) {
      return null;
    }


  return (
    <Container>      
      <Titulo>Contador : {count}</Titulo>
      <Botao onPress={increment}>
        <TextoBotao>Incrementar</TextoBotao>
      </Botao>
      <Botao2 onPress={decrement}>
        <TextoBotao2>Decrementar</TextoBotao2>
      </Botao2>
      <StatusBar/>
    </Container>
  );
}