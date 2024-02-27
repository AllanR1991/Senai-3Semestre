import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font"
import { Splash } from "./src/screens/Splash";
import { Login } from "./src/screens/Access/Login";
import { RecoveryPassword } from "./src/screens/Access/RecoveryPassword";
import { EmailCode } from "./src/screens/Access/EmailCode";
import { NewPassword } from "./src/screens/Access/NewPassword";
import { CreateAccount } from "./src/screens/Access/CreateAccount";
import { PatientProfile } from "./src/screens/Patient/PatientProfile";
import { Home } from "./src/screens/Doctor/Home";
import { ConsultDatePatient } from "./src/screens/Patient/ConsultDatePatient";
import { ConsultClinc } from "./src/screens/Patient/ConsultClinic";

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
        initialRouteName="ConsultClinc"
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

        <Stack.Screen
          name="ConsultDatePatient"
          component={ConsultDatePatient}
        />

        <Stack.Screen
          name="ConsultClinc"
          component={ConsultClinc}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}