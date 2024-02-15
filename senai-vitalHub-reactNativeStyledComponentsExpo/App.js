
import { Navigation } from "./src/screens/Navigation";
import { Login } from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import Splash from "./src/screens/Splash";

//  Instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'MontserratAlternates_500Medium': require('./node_modules/@expo-google-fonts/montserrat-alternates/MontserratAlternates_500Medium.ttf'),
    'MontserratAlternates_600SemiBold': require('./node_modules/@expo-google-fonts/montserrat-alternates/MontserratAlternates_600SemiBold.ttf'),
    'MontserratAlternates_700Bold': require('./node_modules/@expo-google-fonts/montserrat-alternates/MontserratAlternates_700Bold.ttf'),
    'Quicksand_500Medium': require('./node_modules/@expo-google-fonts/quicksand/Quicksand_500Medium.ttf'),
    'Quicksand_600SemiBold': require('./node_modules/@expo-google-fonts/quicksand/Quicksand_600SemiBold.ttf'),

  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    //  Navagação
    //  Container
    //  StackNavigator
    //  StackScreen

    //  Envolve a estrutura de navegação
    <NavigationContainer>
      {/* Componente para navegação */}
      <Stack.Navigator initialRouteName="Login">
        {/* Tela */}
        <Stack.Screen
          name='Splash'
          component={Splash}
        />

        <Stack.Screen
          //  Nome da tela
          name='Navegacao'
          //  Componente que será chamdo
          component={Navigation}
          //  Título da tela
          options={{ title: 'Navegacao' }}

        />

        <Stack.Screen
          //  Nome da tela
          name='Login'
          //  Componente que será chamdo
          component={Login}
          //  Título da tela
          options={{ title: 'Login' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
