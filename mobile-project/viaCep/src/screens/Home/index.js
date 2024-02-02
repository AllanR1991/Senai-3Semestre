import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";
import { Alert } from "react-native";
import Api from "../../services/api"
import axios from "axios";

export function Home() {
  //Hooks - states
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [alertLength, setAlertLength] = useState("");

  //Hooks - effects
  //Chama da API

  function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    setRua("");
    setBairro("");
    setCidade("");
    setUf("");
    setIbge("");
  }



  // async function buscarCep(valor) {

  //   //Nova variável "cep" somente com dígitos.
  //   var cep = valor.replace(/\D/g, '');

  //   //Verifica se campo cep possui valor informado.
  //   if (cep != "") {

  //     //Expressão regular para validar o CEP.
  //     var validacep = /^[0-9]{8}$/;

  //     //Valida o formato do CEP.
  //     if (validacep.test(cep)) {

  //       //Preenche os campos com "..." enquanto consulta webservice.
  //       setRua("...");
  //       setBairro("...");
  //       setCidade("...");
  //       setUf("...");

  //       try {
  //         const response = await Api.get(`/${cep}/json/`)
  //         setRua(response.data.logradouro);
  //         setBairro(response.data.bairro);
  //         setCidade(response.data.localidade);
  //         setUf(response.data.uf);

  //       } catch (error) {
  //         alert(error)
  //       }



  //     } //end if.
  //     else {
  //       //cep é inválido.
  //       limpa_formulário_cep();
  //       alert("Formato de CEP inválido.");
  //     }
  //   } //end if.
  //   else {
  //     //cep sem valor, limpa formulário.
  //     limpa_formulário_cep();
  //   }
  // };


  const alertMin = (cep) => {
    if (cep.length < 8 && cep != "") {
      setAlertLength("Valor digitado menor que 8 digitos!!!")
    } else {
      setAlertLength("")
    }
  }

  useEffect(() => {
    const api = async () => {
    try {
      if (cep.length >= 8) {
        const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setRua(endereco.data.logradouro);
        setBairro(endereco.data.bairro);
        setCidade(endereco.data.localidade);
        setUf(endereco.data.uf);
      }

      
    } catch (error) {
      alert(`Erro ao buscar o CEP : ${error}`);
    }
  }

    api();
  }, [cep])

//   // ao carregar do componente
//   useEffect(() => {

//   }, []);//array dependências

// // ao carregar do componente
// // ao alterar do xpto
//   useEffect(() => {

//   }, [xpto]);//array dependências

//   // ao carregar do componente
// // ao alterar do xpto
// // ao desmontar do componente
//   useEffect(() => {
//     return alert("fui desmontado,morri!!");
//   }, [xpto]);//array dependências



//   // ao carregar do componente
// // loop infinito
//   useEffect(() => {
//     return alert("fui desmontado,morri!!");
//   });//sem array dependências - programador esqueceu!

  return (
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
          fieldValue={cep}
          editable={true}
          maxLength={9}
          minLength={8}
          textAlert={alertLength}
          onChangeText={(fieldValue) => {
            setCep(fieldValue)
          }}
          // onBlur={() => {
          //   alertMin(cep)
          //   buscarCep(cep)
          // }
          // }

          keyboardType="numeric"
        />
        <BoxInput
          textLabel="Logradouro"
          placeholder="Logradouro..."
          fieldValue={rua}
          maxLength={50}
          minLength={0}
        />
        <BoxInput
          textLabel="Bairro"
          placeholder="Bairro..."
          fieldValue={bairro}
          maxLength={50}
          minLength={0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          fieldValue={cidade}
          maxLength={50}
          minLength={0}
        />
        <BoxInput
          textLabel="UF"
          placeholder="UF..."
          fieldValue={uf}
          maxLength={50}
          minLength={0}
        />
      </ContainerForm>
    </ScrollForm>
  );
};