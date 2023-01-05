export const mockJSONCNPJ = {
  "NOME FANTASIA": "DIRECAO GERAL",
  "RAZAO SOCIAL": "Silva e Vieira Consultoria de Segurança do Trabalho",
  "CNPJ": "00000000000001",
  "STATUS": "ATIVA",
  "CNAE PRINCIPAL DESCRICAO": "Consultoria em gestão de segurança do trabalho e meio ambiente",
  "CNAE PRINCIPAL CODIGO": "70204",
  "CEP": "55290600",
  "DATA ABERTURA": "01/12/2022",
  "DDD": "87",
  "TELEFONE": "999241374",
  "EMAIL": "romildo.silvafilho1@gmail.com",
  "TIPO LOGRADOURO": "RUA",
  "LOGRADOURO": "01",
  "NUMERO": "SN",
  "COMPLEMENTO": "",
  "BAIRRO": "CENTRO",
  "MUNICIPIO": "GARANHUNS",
  "UF": "PE"
};

export const mockErrorLimit = {
    "TypeError": "Você chegou no seu limite de consultas, envie um email pra gente amplia-lo gratuitamente"
  };

export const mockErrorInvalidCNPJ = {
    "error": "cnpj: 00000000000100 não encontrado"
  }

export const mockCNPJ = '00.000.000/0001-91';


export const endpointGenerate = (cnpj) => {
 return `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`;
}
