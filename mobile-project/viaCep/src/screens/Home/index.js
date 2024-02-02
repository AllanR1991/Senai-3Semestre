import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";

export function Home () {
//Hooks - states

//Hooks - effects
  //Chama da API

  return(
    //ScrollForm
    //ContainerForm
    //BoxInput
     //Label
     //Input
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel="Informe o cep"
          placeholder="Exemplo"
          editable= {true}
          maxLenght= {9}
          minLenght= {8}
        />
        <BoxInput
          textLabel="Logradouro"
          placeholder="Logradouro..."                 
          maxLenght= {50}
          minLenght= {0}
        />
        <BoxInput
          textLabel="Bairro"
          placeholder="Bairro..."          
          maxLenght= {50}
          minLenght= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLenght= {50}
          minLenght= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLenght= {50}
          minLenght= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLenght= {50}
          minLenght= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLenght= {50}
          minLenght= {0}
        />
      </ContainerForm>
    </ScrollForm>
  );
};