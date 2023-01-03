import React, { useContext, useEffect, useState } from 'react';
import './Simulacao.css';
import { endpointGenerate, mockCNPJ, mockErrorLimit, mockErrorInvalidCNPJ, mockJSONCNPJ } from "../helpers/mockCNPJ";
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { cnaesArray } from '../helpers/cnaes';

function Simulacao() {

  const {
    nome,
    telefone,
    email,
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
    contato,
    tipo,
  } = useContext(AppContext);

  const [fetching, setFetching] = useState(true);
  // const [error, setError] = useState(true);
  const [cnae, setCnae] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [risco, setRisco] = useState('');
  const [endereco, setEndereco] = useState('');
  const [riscosFisicos, setRiscosFisicos] = useState('Não');
  const [riscosQuimicos, setRiscosQuimicos] = useState('Não');
  const [riscosBiologicos, setRiscosBiologicos] = useState('Não');
  const [riscosErgonomicos, setRiscosErgonomicos] = useState('Não');
  const [documentos, setDocumentos] = useState(['LTCAT']);
  const [preco, setPreco] = useState(1000);
  const [mensalidade, setMensalidade] = useState(150);

  const navigate = useNavigate();

  const verifyRisks = () => {
    if (ruido || calor || vibracao || pressao || radiacao || humidade ) {
     setRiscosFisicos('Sim');
    }
    if (quimico) {
      setRiscosQuimicos('Sim');
    }
    if (biologico) {
      setRiscosBiologicos('Sim');
    }
    if (peso || repeticao || postura) {
      setRiscosErgonomicos('Sim');
    }
  };

  const neededDocumentation = () => {
    const existingRisks = riscosBiologicos === 'Sim' || riscosErgonomicos === 'Sim' || riscosFisicos === 'Sim' || riscosQuimicos === 'Sim';
    let typeOfCompany = true;
    let grauDeRisco = true;
    switch (tipo) {
      case 'MEI':
        typeOfCompany = false
        break;
    case 'ME':
        typeOfCompany = false
        break;
    case 'EPP':
        typeOfCompany = false
        break;
      default:
        typeOfCompany = true;
        break;
    }
    if (risco <= 2) {
      grauDeRisco = false;
    }
    let newArray = ['LTCAT'];

    if (existingRisks || typeOfCompany || grauDeRisco) {
      newArray.push('PCMSO');
      newArray.push('PGR');
    }

    if (tipo === 'MEI') {
      newArray = newArray.filter((element) => (
        element !== 'PGR'
      ))
    }

    let newString = '';
    newArray.forEach((element, index) => {
      if (index < newArray.length - 1) {
        newString = newString + element + ', ';
      } else {
        newString = newString + element;
      }
    })

    setDocumentos(newString);

    let coefTipo = 1;
    let coefRisco = 1;
    let coefFuncoes = 1;
    let coefFuncionarios = 1;
    
    switch (risco) {
      case 1:
        coefRisco = 1;
        break;
      case 2:
        coefRisco = 1.05;
        break;
      case 3:
        coefRisco = 1.10;
        break;  
      case 4:
        coefRisco = 1.15;
        break;
      default:
        break;
    }

    switch (tipo) {
      case 'MEI':
        coefTipo = 1;
        break;
      case 'ME':
        coefTipo = 1;
        break;
      case 'EPP':
        coefTipo = 1;
        break;
      default:
        coefTipo = 1.15;
        break;
    }
    if (funcoes > 2) {
      coefFuncoes += funcoes/10;
    }

    if (funcionarios <= 5) {
      coefFuncionarios = 1;
    } else if (funcionarios > 5) {
      coefFuncionarios = 1 + (funcionarios/100);
    }

    let valor = 1000 * coefTipo * coefRisco * coefFuncionarios * coefFuncoes;
    let valorMensal = 150 * coefTipo * coefFuncionarios;

    // let valor = 0;
    // let valorMensal = 0;

    if (tipo === 'MEI') {
      valor = 800;
      valorMensal= 100;
    }

    setPreco(valor.toFixed(2));
    setMensalidade(valorMensal.toFixed(2));
  };

  const fetchCNPJ = async () => {
    // const newString = cnpj.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    // const response = await fetch(endpointGenerate(newString));
    // const data = await response.json();
    const data = mockJSONCNPJ;
    // console.log(data);
    if (Object.keys(data).includes("TypeError")) {
      alert(`Desculpe, ${ data.TypeError }`);
      navigate('/e-social/orcamento');
    } else if (Object.keys(data).includes("error")) {
      alert(`Desculpe, ${ data.error }`);
      navigate('/e-social/orcamento');
    }
    setEmpresa(data['RAZAO SOCIAL']);
    // console.log(cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"));
    let cnaeString = '';
    for (let i = 0; i <= 4; i +=1) {
      cnaeString += data['CNAE PRINCIPAL CODIGO'][i];
    }
    const cnaeFormated = cnaeString.replace(/^(\d{2})(\d{2})(\d{1})/, "$1.$2-$3");
    setCnae(`${cnaeFormated} ${data['CNAE PRINCIPAL DESCRICAO']}`);
    const cnaeRisco = cnaesArray.filter((cnae) => (
      cnae.id === cnaeFormated
    ))[0].risco;
    // const cnaeRisco = 4;
    setRisco(cnaeRisco)
    const enderecoCompleto = `${data['TIPO LOGRADOURO']} ${data.LOGRADOURO}, ${data.NUMERO}, ${data.BAIRRO}, ${data.MUNICIPIO} - ${data.UF}`
    setEndereco(enderecoCompleto);
    // setTimeout(() => {
    //   setFetching(false);
    // }, 1000);

    setFetching(false);
  } 

  useEffect(() => {
    fetchCNPJ();
  }, []);

  useEffect(() => {
    verifyRisks();
    neededDocumentation();
  }, [empresa]);

  const imprimirOrcamento = () => {
    window.print();
  }

  return (
    <main className="page-container">
      {
        fetching ? <p>Processando dados</p> : (
          <form className="relatory-container" action="https://formsubmit.co/romildo.silvafilho1@gmail.com" method="POST">
            <input type="hidden" name="_next" value="https://romildofh.github.io/e-social/" />
            <label className="relatory-input">
              Solicitante
              <input type="text" value={ nome } readOnly />
            </label>
            <label className="relatory-input">
              Telefone
              <input type="text" value={ telefone } readOnly />
            </label>
            <label className="relatory-input">
              E-mail
              <input type="text" value={ email } readOnly />
            </label>
            <label className="relatory-input">
              Empresa
              <input type="text" value={ empresa } readOnly />
            </label>
            <label className="relatory-input">
              CNAE Principal
              <input type="text" value={ cnae } readOnly />
            </label>
            <label className="relatory-input">
              Grau de risco
              <input type="text" value={ risco } readOnly />
            </label>   
            <label className="relatory-input">
              Tipo de empresa
              <input type="text" value={ tipo } readOnly />
            </label>
            <label className="relatory-input">
              Endereço
              <input type="text" value={ endereco } readOnly />
            </label>
            <label className="relatory-input">
              Riscos Físicos
              <input type="text" value={ riscosFisicos } readOnly />
            </label>    
            <label className="relatory-input">
              Riscos Químicos
              <input type="text" value={ riscosQuimicos } readOnly />
            </label> 
            <label className="relatory-input">
              Riscos Biológicos
              <input type="text" value={ riscosBiologicos } readOnly />
            </label> 
            <label className="relatory-input">
              Riscos Ergonômicos
              <input type="text" value={ riscosErgonomicos } readOnly />
            </label>
            <label className="relatory-input">
              N° de funcionários
              <input type="text" value={ funcionarios } readOnly />
            </label>
            <label className="relatory-input">
              N° de cargos
              <input type="text" value={ funcoes } readOnly />
            </label>
            <label className="relatory-input">
              Programas Necessários
              <input type="text" value={ documentos } readOnly />
            </label>
            <label className="relatory-input">
              Investimento Inicial
              <input type="text" value={ `R$ ${preco}` } readOnly />
            </label>
            <label className="relatory-input">
              Investimento Mensal
              <input type="text" value={ `R$ ${mensalidade}` } readOnly />
            </label>
            <button type="button" onClick={imprimirOrcamento}>
              Imprimir
            </button>
            <button type="submit">
              Solicitar contato
            </button>
          </form>
        )
      }
    </main >
  )
}

export default Simulacao;
