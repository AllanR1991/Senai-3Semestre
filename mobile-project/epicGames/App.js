import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./src/assets/image/epic.png')}
      />
      <Text
        style={styles.Titulo}
      >
        Login
      </Text>
      <View>
        <Text 
          style={styles.rotulo}
        >Email</Text> 
        <TextInput
          style={styles.input}
          defaultValue='Email'
        >
        </TextInput>
      </View>
      <View>
        <Text 
          style={styles.rotulo}
        >Senha</Text> 
        <TextInput
          style={styles.input}
          defaultValue='Senha'
        >
        </TextInput>
      </View>
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
  logo:{
    width: 116,
    height: 132,
  },
  titulo:{

  },
  rotulo:{

  },
  input:{

  },
});
