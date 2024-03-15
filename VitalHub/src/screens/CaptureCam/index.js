import { AutoFocus, Camera, CameraType, FlashMode } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibary from 'expo-media-library';


import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

export default function CaptureCam({
  navigation
}
) {


  const cameraRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);

  const clearPhoto =  () =>{
    setPhoto(null);
    setOpenModal(false);
  }
  
  async function capturePhoto(){
    if(cameraRef){
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);

      setOpenModal(true);
    }
  }

  async function savePhoto(){
    if(photo){
      await MediaLibary.createAssetAsync(photo)
        .then(() => {
          alert('Sucesso', 'Foto Salva na Galeria');
        })
        .catch(error => {
          alert("Erro ao salvar foto. Detalhe : ", error);
        })
    }
  }

  useEffect(() => {
    (async () => {
      const {status: cameraStatus} = await Camera.requestCameraPermissionsAsync();
      const {status: mediaStatus} = await MediaLibary.requestPermissionsAsync();
    })
  })


  return(
    // Criar como modal facilita na mudança da tela

    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
      <Camera
        ref={cameraRef}
        ratio={'16:9'}
        type={tipoCamera}
        style={styles.camera}
        flashMode={FlashMode.auto}
        autoFocus={AutoFocus.on}
      >
        
      </Camera>

      <TouchableOpacity style={styles.btnCaptura} onPress={() => capturePhoto()}>
        <FontAwesome name='camera' size={23} color={'#FFF'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSwitch} onPress={() => { setTipoCamera(tipoCamera === CameraType.front ? CameraType.back : CameraType.front) }}>
        <MaterialIcons name="cameraswitch" size={24} color="#FFF" />
      </TouchableOpacity>


      <Modal animationType='slide' transparent={false} visible={openModal} onRequestClose={() => setOpenModal(false)}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <Image style={{ width: '100%', height: 500, borderRadius: 10, }} source={{ uri: photo }} />
          <View style={{ margin: 15, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.btnCancel} onPress={() => clearPhoto()}>
              <FontAwesome name='trash' size={35} color={'#FF0000'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpload} onPress={() => {
              savePhoto()
              navigation.navigate(
                // name: 'EditMedicalRecord',
                // params: {source: photo},
                // merge: true,
                "EditMedicalRecord", {foto : {photo} }
              )
              
            }}>
              <FontAwesome name='save' size={35} color={'#121212'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )

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