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
          filedWidth= {100}
          editable= {true}
          maxLenght= {9}
          minLenght= {8}
        />
      </ContainerForm>
    </ScrollForm>
  );
};