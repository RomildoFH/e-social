import React, { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState("");
  const [funcionarios, setFuncionarios] = useState(1);
  const [funcoes, setFuncoes] = useState(1);
  const [ruido, setRuido] = useState(true);
  const [calor, setCalor] = useState(true);
  const [vibracao, setVibracao] = useState(true);
  const [pressao, setPressao] = useState(true);
  const [radiacao, setRadiacao] = useState(true);
  const [humidade, setHumidade] = useState(true);
  const [quimico, setQuimico] = useState(true);
  const [biologico, setBiologico] = useState(true);
  const [peso, setPeso] = useState(true);
  const [repeticao, setRepeticao] = useState(true);
  const [postura, setPostura] = useState(true);
  const [consulta, setConsulta] = useState(false);
  const [contato, setContato] = useState(false);
  const [tipo, setTipo] = useState('MEI');

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    nome,
    setNome,
    telefone,
    setTelefone,
    email,
    setEmail,
    cnpj,
    setCnpj,
    funcionarios,
    setFuncionarios,
    funcoes,
    setFuncoes,
    ruido,
    setRuido,
    calor,
    setCalor,
    vibracao,
    setVibracao,
    pressao,
    setPressao,
    radiacao,
    setRadiacao,
    humidade,
    setHumidade,
    quimico,
    setQuimico,
    biologico,
    setBiologico,
    peso,
    setPeso,
    repeticao,
    setRepeticao,
    postura,
    setPostura,
    consulta,
    setConsulta,
    contato,
    setContato,
    tipo,
    setTipo,
  }), [
    isLoading,
    nome,
    telefone,
    email,
    cnpj,
    funcionarios,
    funcoes,
    ruido,
    calor,
    vibracao,
    pressao,
    radiacao,
    humidade,
    quimico,
    biologico,
    peso,
    repeticao,
    postura,
    consulta,
    contato,
    tipo,
  ]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
