import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import "./Budget.css";

function Budget() {

  const {
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
  } = useContext(AppContext);

  const navigate = useNavigate();

  // regex para separação de dígitos
  // /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/
  // regex para insersão dos caracteres especiais
  // "$1.$2.$3/$4-$5"
  // console.log(cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"));

  const handleChange = ({ target }) => {
    const { name, type } = target;

    const value = type === "checkbox" ? target.checked : target.value;

    switch (name) {
      case "nome":
        setNome(value);
        break;
      case "telefone":
        setTelefone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "funcionarios":
        setFuncionarios(value);
        break;
      case "funcoes":
        setFuncoes(value);
        break;
      case "cnpj":
        setCnpj(
          value.replace(
            /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
            "$1.$2.$3/$4-$5"
          )
        );
        break;
      case "tipo":
        console.log('acessou')
        setTipo(value);
        break;
      case "ruido":
        if (value === "true") {
          setRuido(true);
        } else {
          setRuido(false);
        }
        break;
      case "calor":
        if (value === "true") {
          setCalor(true);
        } else {
          setCalor(false);
        }
        break;
      case "vibracao":
        if (value === "true") {
          setVibracao(true);
        } else {
          setVibracao(false);
        }
        break;
      case "pressao":
        if (value === "true") {
          setPressao(true);
        } else {
          setPressao(false);
        }
        break;
      case "radiacao":
        if (value === "true") {
          setRadiacao(true);
        } else {
          setRadiacao(false);
        }
        break;
      case "humidade":
        if (value === "true") {
          setHumidade(true);
        } else {
          setHumidade(false);
        }
        break;
      case "quimico":
        if (value === "true") {
          setQuimico(true);
        } else {
          setQuimico(false);
        }
        break;
      case "biologico":
        if (value === "true") {
          setBiologico(true);
        } else {
          setBiologico(false);
        }
        break;
      case "peso":
        if (value === "true") {
          setPeso(true);
        } else {
          setPeso(false);
        }
        break;
      case "repeticao":
        if (value === "true") {
          setRepeticao(true);
        } else {
          setRepeticao(false);
        }
        break;
      case "postura":
        if (value === "true") {
          setPostura(true);
        } else {
          setPostura(false);
        }
        break;
      case "consulta":
          setConsulta(value);
        break;
      case "contato":
          setContato(value);
        break;
      default:
        break;
    }
  };

  const validationForms = () => {
    const nameValidation = nome.length > 3;
    const telefoneValidation = telefone.length >= 10;
    const emailValidation = email.includes('@');
    const cnpjValidation = cnpj.length  === 18;
    const funcionariosValidation = Number(funcionarios) > 0;
    const funcoesValidation = Number(funcoes) > 0;
    const consultaValidation = consulta === true;

    const result = (nameValidation && telefoneValidation && emailValidation && cnpjValidation && funcionariosValidation && funcoesValidation && consultaValidation)

    return (result);
  }

  const handleSubmit = () => {
    const validation = validationForms();
    if (!validation) {
      alert("Verifique os dados informados e autorize a consulta");
    } else {
      navigate("/e-social/simulacao");
    }
  }

  return (
    <main className="page-container">
      <form className="simulation-form">
        <label htmlFor="nome" className="input-form">
          Nome
          <input
            id="nome"
            type="text"
            name="nome"
            placeholder="Insira seu nome"
            value={nome}
            onChange={handleChange}
            className="input-text"
          />
        </label>
        <label htmlFor="telefone" className="input-form">
          Telefone
          <input
            id="telefone"
            type="text"
            name="telefone"
            placeholder="Insira seu telefone"
            value={telefone}
            onChange={handleChange}
            className="input-text"
          />
        </label>
        <label htmlFor="email" className="input-form">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Insira seu email"
            value={email}
            onChange={handleChange}
            className="input-text"
          />
        </label>
        <label htmlFor="cnpj" className="input-form">
          CNPJ
          <input
            id="cnpj"
            type="text"
            name="cnpj"
            placeholder="CNPJ (apenas números)"
            value={cnpj}
            onChange={handleChange}
            maxLength={18}
            minLength={18}
            className="input-text"
          />
        </label>
        <label htmlFor="tipo" className="input-form">
          Tipo de empresa
          <select
            id="tipo"
            name="tipo"
            value={tipo}
            onChange={handleChange}
            className="input-select"
          >
            <option value="MEI">
              MEI
            </option>
            <option value="ME">
              ME
            </option>
            <option value="EPP">
              EPP
            </option>
            <option value="EI">
              EI
            </option>
            <option value="EIRELI">
              EIRELI
            </option>
            <option value="SLU">
              SLU
            </option>
            <option value="Ltda">
              Ltda
            </option>
            <option value="SS">
              SS
            </option>
            <option value="S/A">
              S/A
            </option>
            <option value="Demais">
              Demais
            </option>
          </select>
        </label>
        <label htmlFor="funcionarios" className="input-form">
          N° de funcionários
          <input
            id="funcionarios"
            type="number"
            name="funcionarios"
            placeholder="N° de funcionários"
            value={funcionarios}
            onChange={handleChange}
            minLength={1}
            className="input-text"
          />
        </label>
        <label htmlFor="funcoes" className="input-form">
          N° de funções laborais
          <input
            id="funcoes"
            type="number"
            name="funcoes"
            placeholder="N° de funções laborais"
            value={funcoes}
            onChange={handleChange}
            minLength={1}
            className="input-text"
          />
        </label>
        <fieldset id="riscos-fisicos">
          <legend>Riscos Físicos</legend>
          <label htmlFor="ruido-sim" className="pergunta-riscos">
            Existe algum equipamento que provoque ruído?
            <label className="responsta-label">
              Sim
              <input
                id="ruido-sim"
                type="radio"
                name="ruido"
                value={true}
                onChange={handleChange}
                checked={ruido}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="ruido"
                value={false}
                onChange={handleChange}
                checked={!ruido}
                className="radio-input"
              />
            </label>
          </label>
          <label htmlFor="calor-sim" className="pergunta-riscos">
            Alguma atividade está sujeita a temperaturas elevadas?
            <label className="responsta-label">
              Sim
              <input
                id="calor-sim"
                type="radio"
                name="calor"
                value={true}
                onChange={handleChange}
                checked={calor}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="calor"
                value={false}
                checked={!calor}
                onChange={handleChange}
                className="radio-input"
              />
            </label>
          </label>
          <label htmlFor="vibracao-sim" className="pergunta-riscos">
            Alguma atividade está sujeita a vibrações?
            <label className="responsta-label">
              Sim
              <input
                id="vibracao-sim"
                type="radio"
                name="vibracao"
                value={true}
                onChange={handleChange}
                checked={vibracao}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="vibracao"
                value={false}
                onChange={handleChange}
                checked={!vibracao}
                className="radio-input"
              />
            </label>
          </label>
          <label htmlFor="pressao-sim" className="pergunta-riscos">
            Alguma atividade está sujeita a pressões muito elevadas ou baixas?
            <label className="responsta-label">
              Sim
              <input
                id="pressao-sim"
                type="radio"
                name="pressao"
                value={true}
                onChange={handleChange}
                checked={pressao}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="pressao"
                value={false}
                onChange={handleChange}
                checked={!pressao}
                className="radio-input"
              />
            </label>
          </label>
          <label htmlFor="radiacao-sim" className="pergunta-riscos">
            Alguma atividade está sujeita a radiações ionizantes?
            <label className="responsta-label">
              Sim
              <input
                id="radiacao-sim"
                type="radio"
                name="radiacao"
                value={true}
                onChange={handleChange}
                checked={radiacao}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="radiacao"
                value={false}
                onChange={handleChange}
                checked={!radiacao}
                className="radio-input"
              />
            </label>
          </label>
          <label htmlFor="humidade-sim" className="pergunta-riscos">
            Alguma atividade está sujeita a humidade?
            <label className="responsta-label">
              Sim
              <input
                id="humidade-sim"
                type="radio"
                name="humidade"
                value={true}
                onChange={handleChange}
                checked={humidade}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="humidade"
                value={false}
                onChange={handleChange}
                checked={!humidade}
                className="radio-input"
              />
            </label>
          </label>
        </fieldset>
        <fieldset id="riscos-quimicos">
          <legend>Riscos Químicos</legend>
          <label htmlFor="quimico-sim" className="pergunta-riscos">
            Durante alguma atividade algum colaborador faz uso de algum produto
            químico?
            <label className="responsta-label">
              Sim
              <input
                id="quimico-sim"
                type="radio"
                name="quimico"
                value={true}
                onChange={handleChange}
                checked={quimico}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="quimico"
                value={false}
                onChange={handleChange}
                checked={!quimico}
                className="radio-input"
              />
            </label>
          </label>
        </fieldset>
        <fieldset id="riscos-biologicos">
          <legend>Riscos Biológicos</legend>
          <label htmlFor="biologico-sim" className="pergunta-riscos">
            Em algum momento o trabalhador pode ser exposto a vírus, bactérias
            ou protosoários mesmo que utilizando equipamentos de proteção?
            <label className="responsta-label">
              Sim
              <input
                id="biologico-sim"
                type="radio"
                name="biologico"
                value={true}
                onChange={handleChange}
                checked={biologico}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="biologico"
                value={false}
                onChange={handleChange}
                checked={!biologico}
                className="radio-input"
              />
            </label>
          </label>
        </fieldset>
        <fieldset id="riscos-ergonomicos">
          <legend>Riscos Ergonômicos</legend>
          <label htmlFor="peso-sim" className="pergunta-riscos">
            Durante alguma atividade, é necessário que algum colaborador
            carregar peso superior a 20kg?
            <label className="responsta-label">
              Sim
              <input
                id="peso-sim"
                type="radio"
                name="peso"
                value={true}
                onChange={handleChange}
                checked={peso}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="peso"
                value={false}
                onChange={handleChange}
                checked={!peso}
                className="radio-input"
              />
            </label>
          </label>
          <label htmlFor="repeticao-sim" className="pergunta-riscos">
            Durante alguma atividade, é necessário que algum colaborador execute
            os mesmos movimentos repetidas vezes?
            <label className="responsta-label">
              Sim
              <input
                id="repeticao-sim"
                type="radio"
                name="repeticao"
                value={true}
                onChange={handleChange}
                checked={repeticao}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="repeticao"
                value={false}
                onChange={handleChange}
                className="radio-input"
              />
            </label>
          </label>
          <label htmlFor="postura-sim" className="pergunta-riscos">
            Durante alguma atividade, é necessário que algum colaborador execute
            ou permanessa em postura inadequada, ou passe longos períodos em pé
            ou sentado?
            <label className="responsta-label">
              Sim
              <input
                id="postura-sim"
                type="radio"
                name="postura"
                value={true}
                onChange={handleChange}
                checked={postura}
                className="radio-input"
              />
            </label>
            <label className="responsta-label">
              Não
              <input
                type="radio"
                name="postura"
                value={false}
                onChange={handleChange}
                className="radio-input"
              />
            </label>
          </label>
        </fieldset>
        <label htmlFor="autorizacao-01" className="autorizacao">
          <input type="checkbox" id="autorizacao-01" name="consulta" checked={ consulta } onChange={ handleChange } />
          Autorizo que seja feita consulta com base no CNPJ e informações prestadas neste formulário.
        </label>
        <label htmlFor="autorizacao-02" className="autorizacao">
          <input type="checkbox" id="autorizacao-02" name="contato" checked={ contato } onChange={ handleChange } />
          Deseja que nossa equipe entre em contato? (opcional)
        </label>
        <button type="button" onClick={ handleSubmit } className="btn-form">Simular</button>
      </form>
    </main>
  );
}

export default Budget;
