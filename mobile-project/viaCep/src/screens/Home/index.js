import { useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";
import { Alert } from "react-native";

export function Home () {
//Hooks - states
const [cep, setCep] = useState("1235");
//Hooks - effects
  //Chama da API

  function buscarCep(){
    if(cep != ""){
      alert('dsadasdasdas');
      
    }
  }

  return(
    //ScrollForm
    //ContainerForm
    //BoxInput
     //Label
     //Input
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel = "Informe o cep"
          placeholder = "Exemplo"
          fieldValue = {cep}
          editable = {true}
          maxLength = {9}
          minLength = {8}
          onChangeText={(fieldValue) => {
            setCep(fieldValue)
            
          }}
          keyboardType="numeric"         
        />
        <BoxInput
          textLabel="Logradouro"
          placeholder="Logradouro..."                 
          maxLength= {50}
          minLength= {0}
        />
        <BoxInput
          textLabel="Bairro"
          placeholder="Bairro..."          
          maxLength= {50}
          minLength= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLength= {50}
          minLength= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLength= {50}
          minLength= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLength= {50}
          minLength= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLength= {50}
          minLength= {0}
        />
      </ContainerForm>
    </ScrollForm>
  );
};