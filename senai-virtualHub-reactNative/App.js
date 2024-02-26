import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font"
import { Splash } from "./src/screens/Splash";
import { Login } from "./src/screens/Login";
import { RecoveryPassword } from "./src/screens/RecoveryPassword";
import { EmailCode } from "./src/screens/EmailCode";
import { NewPassword } from "./src/screens/NewPassword";
import { CreateAccount } from "./src/screens/CreateAccount";
import { PatientProfile } from "./src/screens/PatientProfile";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    'MontserratAlternates_500Medium': require('./node_modules/@expo-google-fonts/montserrat-alternates/MontserratAlternates_500Medium.ttf'),
    'MontserratAlternates_600SemiBold': require('./node_modules/@expo-google-fonts/montserrat-alternates/MontserratAlternates_600SemiBold.ttf'),
    'MontserratAlternates_700Bold': require('./node_modules/@expo-google-fonts/montserrat-alternates/MontserratAlternates_700Bold.ttf'),
    'Quicksand_400Regular': require('./node_modules/@expo-google-fonts/quicksand/Quicksand_400Regular.ttf'),
    'Quicksand_500Medium': require('./node_modules/@expo-google-fonts/quicksand/Quicksand_500Medium.ttf'),
    'Quicksand_600SemiBold': require('./node_modules/@expo-google-fonts/quicksand/Quicksand_600SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PatientProfile"
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen
          name="Splash"
          component={Splash}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="RecoveryPassword"
          component={RecoveryPassword}
        />

        <Stack.Screen
          name="EmailCode"
          component={EmailCode}
        />

        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
        />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
        />

        <Stack.Screen
          name="PatientProfile"
          component={PatientProfile}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}