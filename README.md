Aplicação desenvolvida com typescript, express e knex.
Usados como gerenciador de pacotes o yarn.
Essa aplicação foi desenvolvida totalmente usando node.js e suas ferramentas e bibliotecas, não foi utilizado HTML nem CSS para visualização das listagens, foi utilizado para testar a aplicação o programa Insomnia.
A aplicação roda na porta 3333


// Rotas

 Cadastrar Cidade: 

  Para a cidade ser cadastrada com êxito deve ser passados o nome da cidade e o estado na forma de um objeto json:
  {	
	"nome": "nome da cidade",
	"estado": "nome do estado da cidade"
  }


 Cadastrar Cliente: 

  Para o cliente ser cadastrado com êxito deve ser passados nome, sexo, data de nascimento, idade e cidade na forma de um objeto json:

  {
	"nome": "nome do Usuário",
	"sexo": "sexo do Usuário",
	"data_de_nascimento": "&&/&&/&&&&",
	"idade": "&&",
	"cidade": "cidade do Usuário"
  }

 Consultar Cidade pelo nome: 

  Para consultar a cidade pelo nome com êxito deve ser passado nomeCidade na requisição pela url localhost:3333/cidade?nomeCidade=nome da cidade.



 Consultar Cidade pelo Estado: 

  Para consultar a cidade pelo nome com êxito deve ser passado nomeCidade na requisição pela url localhost:3333/cidade?nomeEstado=nome do Estado.


 
 Consultar Cliente pelo nome: 

  Para consultar o cliente pelo nome com êxito deve ser passado nomeUsuario na requisição pela url localhost:3333/usuario?nomeUsuario=nome do usuário.



 Consultar Cliente pelo id:

  Para consultar o cliente pelo id com êxito deve ser passado id na requisição pela url localhost:3333/usuario?id=id do usuário.



 Remover Cliente pelo id: 

  Para remover o cliente pelo id com êxito deve ser passado id na requisição pela url localhost:3333/usuario?id=id do usuário.



 Alterar o nome do Cliente:

  Para alterar o nome do cliente com êxito deve ser passado id e nome na requisição pela url localhost:3333/usuario?id=id do usuário&nome= nome do usuário.