import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';



export default function App() {

  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
    })();
  }, [])

  return (
    <View style={styles.container}>
      <Camera
        ratio={'16:9'}
        type={tipoCamera}
        style={styles.camera}
      >
       <View style={styles.viewFlip}>
        <TouchableOpacity style={styles.btnFlip} onPress={()=>{setTipoCamera(tipoCamera===CameraType.front?CameraType.back: CameraType.front)}}>
          <Text style={styles.txtFlip}> Trocar </Text>
        </TouchableOpacity>
       </View>
      </Camera>
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
  camera: {
    flex: 1,
    height: '80%',
    width: '100%',
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFlip:{
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 15
  },
  txtFlip : {
    fontSize: 20,
    color: '#FFF',
  }

});
