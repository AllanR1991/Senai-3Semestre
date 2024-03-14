import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Modal, Image } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';

import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';


export default function App() {
  const cameraRef = useRef(null)

  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);


  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);

  async function capturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);

      setOpenModal(true);

      console.log(photo);
    }
  }


  function clearPhoto(){
    setPhoto(null)
    setOpenModal(false)
  }

  async function savePhoto(){
    if(photo){
      await MediaLibrary.createAssetAsync(photo)
        .then (() => {
          alert('Sucesso','Foto Salva na galeria')
        }).catch(error => {
          alert("Erro ao salvar foto. Detalhes: ", error)
        })
    }
  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

      const {status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
    })();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
      <Camera
        ref={cameraRef}
        ratio={'16:9'}
        type={tipoCamera}
        style={styles.camera}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => { setTipoCamera(tipoCamera === CameraType.front ? CameraType.back : CameraType.front) }}>
            <Text style={styles.txtFlip}> Trocar </Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.btnCaptura} onPress={() => capturePhoto()}>
        <FontAwesome name='camera' size={23} color={'#FFF'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSwitch} onPress={() => capturePhoto()}>
        <MaterialIcons name="cameraswitch" size={24} color="black" />
      </TouchableOpacity>


      <Modal animationType='slide' transparent={false} visible={openModal} onRequestClose={() => setOpenModal(false)}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <Image style={{ width: '100%', height: 500, borderRadius: 10, }} source={{ uri: photo }} />
          <View style={{ margin: 15, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.btnCancel} onPress={() => clearPhoto()}>
              <FontAwesome name='trash' size={35} color={'#FF0000'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpload} onPress={() => savePhoto()}>
              <FontAwesome name='save' size={35} color={'#121212'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  btnFlip: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 15
  },
  txtFlip: {
    fontSize: 20,
    color: '#FFF',
  },
  btnCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#121212',

    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSwitch: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#121212',

    alignItems: 'center',
    justifyContent: 'center'
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center'
  },
  btnUpload: {
    padding: 20,
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center'
  }


});
