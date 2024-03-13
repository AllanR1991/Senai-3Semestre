/* importando navegação  */

import Mapview, 
      { Maker,
        Marker,
        PROVIDER_GOOGLE } from 'react-native-maps'

import { useEffect, useRef, useState } from "react"

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'

import { 
  ActivityIndicator, 
  StyleSheet, 
  Text, 
  View } from 'react-native'
import MapViewDirections from 'react-native-maps-directions'
import { mapskey } from '../../utils/mapsApiKey'

export const MapLocation = ({ navigation }) => {

  const mapReference = useRef(null);

  const clinica = [{ latitude: -23.6983, longitude: -46.5473, clinica: 'Health Clinic' }]
  // Criando UseState para setar localização inicial e destino.9
  // Destino deve ser passado como props pois cada clinica tem um destino.
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: clinica[0].latitude,
    longitude: clinica[0].longitude
  })

  // Captura Localização
  async function CurrentLocation() {
    /* Verifica se a permissão foi garantida ou seja se foi autorizado. */
    const { granted } = await requestForegroundPermissionsAsync();
    //console.log(granted);
    if (granted) {
      // Se permissao for autorizada obtemos a localização atual.
      const captureLocation = await getCurrentPositionAsync();
      //console.log(captureLocation)

      // Define a localizaçao inicial
      setInitialPosition(captureLocation);
    }
  }




  useEffect(() => {
    CurrentLocation();
    //monitora a posiçao em tempo real
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      async (response) => {
        // Recebe e guarda a nova posiçao
        await setInitialPosition(response)
      }
    )
  }, [1000])


  useEffect(() => {
    recarregarVizualizacaoMapa()
  }, [initialPosition])

  async function recarregarVizualizacaoMapa() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [{
          latitude: initialPosition.coords.latitude,
          longitude: initialPosition.coords.longitude
        },
        {
          latitude: finalPosition.latitude,
          longitude: finalPosition.longitude,
        }], {
        edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
        animated: true,
      })
    }
  }

  return (
    <View style={styles.container}>

      {
        initialPosition != null ?
          <Mapview
            ref={mapReference}
            //Definindo Ponto inicial -23.745093706934128, -46.53144640134541
            initialRegion={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
            // Especifica o provedor de dados.
            provider={PROVIDER_GOOGLE}
            // Estilizaçao do mapa
            customMapStyle={grayMapStyle}

            style={{
              height: 200,
              width: '100%',
            }}
          >
            {/* Definindo ponto indicando onde voce se encontra. */}
            <Marker
              coordinate={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
              }}
              title='Voce está aqui.'
              description='Posição inicial'
              pinColor='green'
            />
            {/* Definindo ponto da clinica */}
            <Marker
              coordinate={{
                latitude: clinica[0].latitude,
                longitude: clinica[0].longitude,
                LatitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              title={clinica[0].clinica}
              pinColor='blue'
            />
            {/* Rota entre os dois ponto */}
            <MapViewDirections
              origin={initialPosition.coords}
              destination={{
                latitude: clinica[0].latitude,
                longitude: clinica[0].longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              strokeWidth={5}
              strokeColor='#496BBA'
              apikey={mapskey}

            />


          </Mapview> :

          <>
            <Text>Localizacão nao encontrado</Text>
            <ActivityIndicator />
          </>


      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];


