export const jsonCNPJ = {
  "NOME FANTASIA":"","RAZAO SOCIAL":"POLLO'S FARDAMENTOS LTDA","CNPJ":"12323602000169","STATUS":"ATIVA","SETOR":"Comercio Por Atacado","CNAE PRINCIPAL DESCRICAO":"Confecção de roupas profissionais, exceto sob medida","CNAE PRINCIPAL CODIGO":"1413401","CEP":"55292818","DATA ABERTURA":"26/07/2010","DDD":"87","TELEFONE":"37621996","EMAIL":"pllosfardamentos@hotmail.com","TIPO LOGRADOURO":"AVENIDA","LOGRADOURO":"EUCLIDES LAURINDO DE SOUZA","NUMERO":"536","COMPLEMENTO":"TERREO","BAIRRO":"BOA VISTA","MUNICIPIO":"Garanhuns","UF":"PE"
};

export const mockCNPJ = '12.323.602/0001-69';


export const endpointGenerate = (cnpj) => {
 return `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`;
}
