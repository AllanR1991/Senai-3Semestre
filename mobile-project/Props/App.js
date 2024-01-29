
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';

import { useFonts, MontserratAlternates_800ExtraBold } from '@expo-google-fonts/montserrat-alternates';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    {
      id: '1',
      nome: 'Carlos',
      idade: 37
    },
    {
      id: '2',
      nome: 'Allan',
      idade: 32
    },
    {
      id: '3',
      nome: 'Eduardo',
      idade: 47
    },
    {
      id: '4',
      nome: 'Kamille',
      idade: 20
    }
  ]

  return (
    <SafeAreaView style={styles.container}>

      {/* 
      Para android 
      <StatusBar/>
      */}
      
      {/* Usando FlatList */}
      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id+item.nome}
        renderItem={({item}) => (
          //Exibir cada item da lista
          <Person name={item.nome} idade={item.idade}/>
        )}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100%
  },
});
