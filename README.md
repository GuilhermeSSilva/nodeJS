<h2><ul><li>Aplicação desenvolvida com typescript, express e knex.</li> <br>
	
<li>Usados como gerenciador de pacotes o yarn.</li> <br>

<li>Essa aplicação foi desenvolvida totalmente usando node.js suas ferramentas e bibliotecas, não foi utilizado HTML nem CSS para visualização das listagens. </li> <br>

<li>Foi utilizado para testar a aplicação o programa Insomnia.</li> <br>

<li>A aplicação roda na porta 3333.</li></ul></h2>


<h3>// Rotas</h3>

 <strong>Cadastrar Cidade:</strong> 

  Para a cidade ser cadastrada com êxito deve ser passados o nome da cidade e o estado na forma de um objeto json:
  {	
	"nome": "nome da cidade",
	"estado": "nome do estado da cidade"
  }


 Cadastrar Cliente: 

 <p> Para o cliente ser cadastrado com êxito deve ser passados nome, sexo, data de nascimento, idade e cidade na forma de um objeto json: </p> <br>

  <p>{ <br>
	"nome": "nome do Usuário", <br>
	"sexo": "sexo do Usuário", <br>
	"data_de_nascimento": "&&/&&/&&&&", <br>
	"idade": "&&", <br>
	"cidade": "cidade do Usuário" <br>
  } </p>

<strong> Consultar Cidade pelo nome: </strong>

 <p> Para consultar a cidade pelo nome com êxito deve ser passado nomeCidade na requisição pela url localhost:3333/cidade?nomeCidade=nome da cidade. </p>



<strong> Consultar Cidade pelo Estado: </strong>

<p>  Para consultar a cidade pelo nome com êxito deve ser passado nomeCidade na requisição pela url localhost:3333/cidade?nomeEstado=nome do Estado. </p>


 
<strong> Consultar Cliente pelo nome: </strong>

 <p> Para consultar o cliente pelo nome com êxito deve ser passado nomeUsuario na requisição pela url localhost:3333/usuario?nomeUsuario=nome do usuário. </p>



<strong> Consultar Cliente pelo id: </strong>

<p>  Para consultar o cliente pelo id com êxito deve ser passado id na requisição pela url localhost:3333/usuario?id=id do usuário. </p>



<strong> Remover Cliente pelo id: </strong> 

 <p> Para remover o cliente pelo id com êxito deve ser passado id na requisição pela url localhost:3333/usuario?id=id do usuário. </p>



<strong> Alterar o nome do Cliente: </strong>

<p>  Para alterar o nome do cliente com êxito deve ser passado id e nome na requisição pela url localhost:3333/usuario?id=id do usuário&nome= nome do usuário. </p>
