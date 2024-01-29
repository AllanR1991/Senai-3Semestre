import { StyleSheet,Text, View } from "react-native";


//Components Person
//Props: name, age

const Person =({name, age})=>{
    
    return (
        <View style={stayles.container}>
            <Text style={stayles.textName}>Nome: {name}</Text>
            <Text style={stayles.textAge}>Idade: {age}</Text>
        </View>
    );
}

const stayles = StyleSheet.create({
    container:{
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 10,
        borderRadius:5,
        width:'100%',
        alignItems:'center'
    },
    textAge:{
        fontFamily: 'MontserratAlternates_800ExtraBold',
        color: 'orange',
        fontWeight: '700'
    },
    textName:{
        fontFamily: 'MontserratAlternates_800ExtraBold',
        color: 'black',
        fontWeight:'500'
    }
})

export default Person;