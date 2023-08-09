## ESTUDO DE CASO: Um software que não foi entregue como o esperado.


Uma empresa de desenvolvimento de software concluiu recentemente um projeto para um cliente, mas o software foi entregue com vários problemas. 

### O Software proposto pela empresa foi:

- Desenvolver uma aplicação para uma loja de produtos naturais.
- O Software faria todo o controle dos produtos e seus devidos estoques.
- Porém, além de vender fisicamente a empresa optou por oferecer seus serviços online, onde assim a empresa fornecedora do software apresentou uma proposta de um marketplace para vender seus produtos, onde este marketplace estivesse já vinculado com todas as informações de gerenciamento dos produtos, no sistema que ficaria a disposição da empresa para seus controles.
- Ou seja, sempre que um cliente efetivasse a compra de um produto online o sistema de marketplace teria que se comunicar com o sistema instalado na empresa física para sinalizar que chegou um pedido, e que este já se encontra como faturado. Por fim, foi realizado um planejamento inadequado do tempo em que essa empresa levaria para entregar o projeto como um todo, e então o projeto foi entregue as pressas, pois a loja de produtos naturais tinha uma certa "pressa" para a sua inauguração. 

## Problemas:

- Ao concluir o desenvolvimento e entregar o produto as pressas, o cliente recebeu seu produto, mas não conforme o planejado e esperado;
- Estavam faltando várias funcionalidades.
Dentre as funcionalidades que estavam faltando, foi o fechamento de caixa, sabemos que o processo de fechamento de caixa é um dos processos de controle financeiros mais importantes da empresa.
- O primeiro dia de vendas físicas, foi um sucesso, mas ao chegar ao final do dia e o dono da loja tentar executar o fechamento do seu caixa, para saber se todos os valores estão batendo, então se deparou com um erro, o fechamento do caixa ao ser acessado bloqueou a gaveta de dinheiro do estabelecimento, não permitindo que assim nenhuma outra venda pudesse ser realizada.
- Um outro problema que foi identificado foi a loja virtual, onde esta também teve bons resultados em suas vendas, mas ao realizar o fluxo de integração do markeplace com o sistema de gerenciamento da empresa, os registros não estavam sendo persistidos na base, o que levava a empresa a não ter controle e nem saber o que estava acontecendo com seus produtos. Pois ela não recebia os dados do pedido do cliente em seu sistema, para que este posteriormente fosse enviado ao cliente final.

## RESPONDA AS SEGUINTES QUESTÕES:

- Como todos estes problemas poderiam ter sido evitados?
- Afinal, quais foram os principais problemas?
- Você como uma pessoa que testa aplicações, teria uma sugestão para que a antecipação de problemas pudesse ter sido realizada? Como?
- Perante todo o estudo de caso visto até aqui, você como uma pessoa que testa aplicações recebe essas informações relacionadas aos problemas ocorridos com o software, e agora precisa atuar no projeto desde o início, quais os processos que você precisa realizar, para que agora ao ter que refazer todo o teste novamente, você exerceria para a entrega do produto, agora com uma qualidade melhor e que esteja atendendo as necessidades do cliente?

# 

Deveria ser realizada uma separação em pequenas entregas de maneira que agregasse valor para o cliente ao longo do desenvolvimento da da aplicação.Também poderiam ser realizados mais testes e documentação dos requisitos para melhor assertividade do funcionamento da plataforma 

A entrega de todas as funcionalidade de maneira pouco planejada e com uma entrega com todas as funcionalidades com tempo curto, gerou a baixa qualidade e um grande quantidade de problemas na execução. Uma integração ruim como a plataforma de marketplace e pouco escalabilidade do software da empresa

### Deveriam ser realizados testes em diversos cenários da aplicação:
  - Adquirir última unidade de um produto no marketplace
  - Adquirir última unidade de um produto na plataforma
  - Adquirir um produto na loja fisica e verificar unidades no marketplace
  - Adquirir um produto na loja fisica e verificar unidades na plataforma
  - Fazer o fechamento de caixa da plataforma
  - Fazer uma compra no marketplace e verificar se quantidade é alterada
  - Fazer uma compra na plataforma e verificar se quantidade é alterada

### Fluxo de testes: 
- Realizar o levantamento das funcionalidade da aplicação 
- Regras de negócio
- Compreender quais deveriam ser os comportamentos esperados 
- Organizar os tipos de testes necessários para uma maior cobertura da aplicação
- Documentar em documentos onde todos os colaboradores tenham um bom entendimento

# 