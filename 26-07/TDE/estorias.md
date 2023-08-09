## Estórias

**Funcionalidade**: Desconectar Usuário<br>
**Como**: Usuário da aplicação<br>
**Desejo**: Sair da aplicação<br>
**Para**: Manter a segurança dos usuários

**Cenário**: Sair da aplicação <br>
**Dado que**: o usuário tenha acesso ao botão <br>
**E**: clique com o curso no mesmo<br>
**Quando**: Tentar acessar a aplicação <br>
**Então**: deverá ser solicitado novamente o login<br>
**Mas**: não deve permitir entrada de forma direta para as rotas privadas

# 

**Funcionalidade**: Apresentação da Estante<br>
**Como**: Usuário da aplicação<br>
**Desejo**: Visualizar listagem de livros<br>
**Para**: Encontrar livros com a leitura finalizada, em andamento e com interesse de leitura  

**Cenário**: Visualizar a listagem de livros cadastrados pelo usuário<br>
**Dado que**: o usuário esteja logado<br>
**E**: possua livros cadastrados na sua conta <br>
**Quando**: Entrar na página de listagem <br>
**Então**: deverá ser apresetado a lista de livros cadastradas anteriormente<br>
**Mas**: não deve apresentar a lista de livros de outras pessoas

# 

**Funcionalidade**: Tela de Login<br>
**Como**: Usuário deve informar suas credenciais<br>
**Desejo**: Receber acesso a aplicação<br>
**Para**: Visualizar e Utilizar as funcionalidades  

**Cenário**: Entrar na plataforma de Estante de Livros Virtual<br>
**Dado que**: o usuário informe as credenciais <br>
**E**: seja referente a um usuário<br>
**Quando**: Informar as credenciais corretamente <br>
**Então**: deverá ser permitido a entrada no sistema<br>
**Mas**: não deve ser permitida a entrada com credeciais inválidas

# 

**Funcionalidade**: Cadastrar Usuários<br>
**Como**: Usuário deve informar os dados do usuário<br>
**Desejo**: Criar novo acesso para a plataforma <br>
**Para**: receber acesso a plataforma  

**Cenário**: Cadastrar novo usuário<br>
**Dado que**: o usuário informe 
 dados válidos<br>
**E**: não exista outro com informações iguais<br>
**Quando**: Informar os dados corretamente <br>
**Então**: deverá ser realizado o cadastro de um novo acesso<br>
**Mas**: não deve ser permitida o cadastro de usuário iguais
