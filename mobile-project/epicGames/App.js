import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/image/epic.png')}
        style={styles.logo}      
      />
      <Text style={styles.titulo}>Login</Text>
      <View style={styles.containerInputs}>
        <View style={styles.containerInput}>
          {/* <Text
            style={styles.rotulo}
          >Email</Text> */}
          <TextInput
            style={styles.input}
            placeholder="email@domain.com"
            placeholderTextColor="white"
            autoComplete="off"
            inputMode="email"
            autoCapitalize="none"
          ></TextInput>
        </View>

        <View style={styles.containerInput}>
          {/* <Text
            style={styles.rotulo}
          >Senha</Text> */}
          <TextInput
            secureTextEntry={true}
            placeholder="Senha"
            autoComplete="off"
            selectionColor="white"
            inputMode="text"
            placeholderTextColor="white"
            style={styles.input}
          ></TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Entrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 38,
    padding: 18,
  },
  logo: {
    width: 116,
    height: 132,
  },
  titulo: {
    fontSize: 36,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6.2,
  },
  rotulo: {
    fontSize: 16,
  },
  input: {
    backgroundColor: "#818181",
    color: "white",
    borderRadius: 45,
    padding: 16,
    textAlign: "center",
  },
  containerInput: {
    gap: 10,
  },
  containerInputs: {
    gap: 10,
    width: "100%",
    maxWidth: 450,
  },
  btn: {
    backgroundColor: "black",
    padding: 16,
    borderRadius: 17,
  },
  textBtn: {
    color: "white",
  },
});
