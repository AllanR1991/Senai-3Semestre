import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Notification from 'expo-notifications';

// Solicitar as permissoes de notificações ao iniciar o app
Notification.requestPermissionsAsync();

//Definir como as notificações devem ser tratadas quando recebidas
Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, // Configura se mostra alerta quando notificaçao recebida
    shouldPlaySound: true,// Configura som o receber a notificaçao
    shouldSetBadge: false, // Configura se exibe o numero de notificaçoes no app
  })
})

export default function App() {

  //Função para lidar com a chamada da notificaçao
  const handleCallNotifications = async () => {
    //Obtem o status das permissões
    const { status } = await Notification.getPermissionsAsync();

    if(status !== 'granted'){
      alert('Voce nao habilitou receber notificações do app')
      return;
    }

    // Obter o token de denvio de notificaçao

    const token = await Notification.getExpoPushTokenAsync();
    console.log(token)

    // Agendar uma notificaçao para ser exibida apos 5 segundos
    await Notification.scheduleNotificationAsync({
      content:{
        title: "Hello World!",
        body: 'Criando uma poc para implementar expo notifciations'
      },
      trigger:{seconds: 5}
    })

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 80,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}

        onPress={() => handleCallNotifications()}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        
        >Click aqui para receber notificaçao</Text>
      </TouchableOpacity>
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
});
