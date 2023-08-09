# Sistema de Estante Virtual Pessoal

O sistema deve ser capaz de **cadastrar os dados de um usuário** para que ele possa ser acessado posteriormente pelo usuário. O sistema deve ser capaz de permitir o **cadastro de livros**, os livros podem ser **separados por categorias**, onde posso **cadastrar um livro que estou lendo, que quero ler (lista de desejos) e dos livros que eu já concluí a leitura**. É interessante que também tenha uma **página de quem somos**, para identificar o objetivo geral do site solicitado. Há, já estava me esquecendo, o sistema é de **uso pessoal.**


## Funcionalidades

Funcionalidade | Comportamento Esperado | Verificações | Critérios de Aceite
:---------: | :------: | :-------:| :-------:
Cadastrar Dados de Usuários | Devem ser informados as seguintes informações de forma válida: Nome completo(Sem valores numéricos), e-mail válido e confirmação do e-mail | Nome Completo, e-mail, confirmação do e-mail, senha e confirmação da senha | Informações seguindo os padrões da regre de negócio 
Cadastro de livros| Com um perfil válido e com o login realizado, deve ser possivel cadastrar livros, com sua categoria correspondente, se o livro já foi lido, está sendo lido no momento, ou será adicionado a sua lista de desejos | Nome do livro, categoria e status da leitura | Informações requeridas são cadastradas corretamente e somente para o usuário logado
Página "QUEM SOMOS"| Apresentar informaçoes importantes sobre a plataforma, como o objetivo do sistema, funcionamento, etc| Informações apresentadas sobre a plataforma | São apresentadas de forma clara e responsiva as informações para os usuários 
Usuários | Realização do login deve ser realizada de forma segura e simplificada utilizando o nome de usuário(Nome Completo ou email) e a senha referente ao usuário, na tela de login devem ser apresentado um botão para cadastro de novo usuário e botão para redefinição de senha(executada após a validação do e-mail da conta) | Campos para realizar login (Usuário e Senha), Link ou botão para redefinição de senha e Link ou Botão para Cadastra um novo usuário | Não devem existir usuários com mesmo e-mail, senha deve possuir validação para tornar a aplicação mais segura para os usuários, navegação do sistema deve ser permitida somente para usuários logado, o mesmo podendo acessar somente o conteudo cadastrado por ele|
Listagem das informações cadastradas pelo usuário | O usuário logado na plataforma tem a permissão e possibilidade de observar todas as informações/livros cadastradas ao longo da utilização do sistema | Listagem dos livros| Livros listados devem ser somente do usuário logado no momento |


## Riscos
Aplicação da maneira da maneria com esta apresentado, em um ambiente de produção geraria grandes problemas para os proprietarios e usuários. Visto que a segurança da aplicação esta comprometida, acesso de administrador está exposta para a internet e a plataforma não esta agregando valor para os usuários.


## Bugs
Bug | Passo para realização | Comportamento Esperado | Criticidade
:---------: | :------: | :-------:| :-------:|
Conta de Administrador com credenciais fracas | Usuário: admin , senha: 123 | Credenciais de Admin devem ser extremamente seguras| Alta
Dados do adminstrador estão expostos | No console de desenvolvedor é possivel visualizar a regra de negócio para realização de login | Dados Sensiveis deveriam ser extremamente seguros e criptografados| CRITICO
Funcionalidade da apresentação da estante e cadastro de livros não estão funcionando| Ao clicar no botão não redireciona para as páginas informadas | Principais funcionalidades da aplicação deveriam funcionar corretamente, com listagem dos livros cadastrados na página referente ao formulario de novo registros | CRITICO
Página onde está presente o formulário para contado não possui a validação de email, nome completo não devia possuir números e o campo para descrever os motivos poderia possuir um limite de conteudo para não sobrecarregar o banco de dados | URL: https://projeto-voluntario.vercel.app/contato.html adicionar numeros no campo nome, email inválido e texto gigante| Deve ser apresentado erros para cada campo do formulário caso seja cadastrado uma informação inválida | URGENTE
Campo Número de telefone do formulário de contaodo esta dificultando o cadastrado de números de telefone como padrão residencial e empresarial| URL: https://projeto-voluntario.vercel.app/contato.html| Deve ser permitido na mascara do campo números de telefone residenciais e comerciais| MEDIO
Falhas de segurança, aplicação está exposta| Ao utilizar um link interno da aplicação diretamente, não é necessário preencher formulário de login (https://projeto-voluntario.vercel.app/)| Deve ser permitido somente a entrada de usuários cadastrados| URGENTE
Apresentação da URL para os usuários não está intuitiva e amigavél, principalmente a de Login e HOME  | URL DE LOGIN: https://projeto-voluntario.vercel.app , URL HOME: https://projeto-voluntario.vercel.app/home.html| URLs da aplicação deveria ser apresentadas de forma mais amigável para os usuários | BAIXO
