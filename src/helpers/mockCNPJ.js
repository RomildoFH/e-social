export const mockJSONCNPJ = {
  "NOME FANTASIA": "DIRECAO GERAL",
  "RAZAO SOCIAL": "BANCO DO BRASIL SA",
  "CNPJ": "00000000000191",
  "STATUS": "ATIVA",
  "CNAE PRINCIPAL DESCRICAO": "Bancos múltiplos, com carteira comercial",
  "CNAE PRINCIPAL CODIGO": "6422100",
  "CEP": "70040912",
  "DATA ABERTURA": "01/08/1966",
  "DDD": "61",
  "TELEFONE": "34939002",
  "EMAIL": "secex@bb.com.br",
  "TIPO LOGRADOURO": "QUADRA",
  "LOGRADOURO": "SAUN QUADRA 5 LOTE B TORRES I, II E III",
  "NUMERO": "SN",
  "COMPLEMENTO": "ANDAR 1 A 16 SALA 101 A 1601 ANDAR 1 A 16 SALA 101 A 1601 ANDAR 1 A 16 SALA 101 A 1601",
  "BAIRRO": "ASA NORTE",
  "MUNICIPIO": "Brasilia",
  "UF": "DF"
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
