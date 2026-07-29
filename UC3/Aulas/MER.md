# MER

Este documento descreve o que é MER e como e porque utiliza-lo.

## O que é MER?

O MER é a sigla para *Modelo Entidade-Relacionamento*. Ele é, basicamente, um **desenho** representando o nosso banco de dados e como nossas **entidades** (que serão nossas tabelas depois) se ligam e se **relacionam**.

## Porque preciso fazer esse desenho? Não é mais fácil só fazer o banco?

É sim possível criar o banco sem fazer o MER. Porém, o MER faz parte do *planejamento* do nosso banco de dados. É como fazer um prédio sem desenhar a planta antes. É possível, mas garanto que você não iria querer morar nele.

Ao fazer o MER, nós estamos cuidando para que nosso banco de dados saia exatamente como necessário, sem mais nem menos. Assim, evitamos retrabalho lá na frente.

## Onde e como eu posso fazer esse desenho?

O MER pode ser feito em qualquer plataforma ou programa que permita desenhar. Existem alguns programas específicos para trabalhar com ele, mas você pode usar até mesmo o Canva, o PhotoShop, o Paint ou até mesmo numa folha de papel. No entanto, eu recomendo utilizar os programas específicos como o <u>[BRModelo Web](https://www.brmodeloweb.com/)</u>.

## Qual o passo a passo para desenhar?

Antes de fazermos o MER, precisamos definir quais são as **entidades** *(tabelas)* e também precisamos fazer o **dicionário de dados** *(aquela lista que define os campos e os tipos de dados desses campos)*. Então, podemos começar desenhando as entidades no MER. Elas são representadas pelos **retângulos** com o nome dentro.

Os **atributos** que nós planejamos anteriormente para estas **entidades** também devem aparecer no desenho (assim sabemos como construir as tabelas depois de só olhar o desenho). Eles são representados por bolinhas sem fundo, ou "brancas".

**ATENÇÃO:** se um atributo for uma **chave primária** ele será representado por uma bolinha preenchida, ou "preta".

Ambas devem estar ligadas às entidades (retângulos) por **linhas**.

## Relacionamentos

Para podermos criar as **chaves estrangeiras**, que são os campos que ligam uma tabela em outra, normalmente pegando emprestad oa **chave primária** de outra tabela. Não usamos **bolinhas** para representá-las, e sim **losangos** com linhas ligando as entidades em questão. Dentro desse losango, damos um título para a relação. Por exemplo, um **aluno** pertence à uma **turma**, ou então um **cliente** compra uma **bicicleta**.

Um passo importante para entender os relacionamentos é a **cardinalidade**. Ela nos ajuda a entender quantos registros dentro de uma tabela conseguem se relacionar com quantos de outra tabela. Confuso?

Pense só: em quantas vendas uma bicicleta pode estar? Uma só. Note que eu usei a palavra **pode**.

Agora, uma venda pode ter quantas bicicletas? Várias, correto?

Um cliente pode fazer várias compras, quantas ele quiser. Pode também não fazer nenhuma. 

### Tipos de cardinalidade

* **(0,1)** - Pode não participar de um relacionamento ou apenas um.

    *Exemplo: Um funcionário pode ou não ter um carro da empresa.*

* **(1,1)** - Deve participar de exatamente 1 relacionamento.
    
    *Exemplo: Todo empréstimo deve estar associado a um único cliente.*

* **(0,N)** - Pode não participar de nenhum relacionamento ou participar de vários.
    
    *Exemplo: Um cliente pode nunca fazer um empréstimo ou fazer vários ao longo do tempo.*

* **(1,N)** - Deve participar de um relacionamento, mas pode participar de vários.
    
    *Exemplo: Um empréstimo deve conter pelo menos uma bicicleta, mas pode conter várias*

* **(N,N)** - Ambos os lados podem participar de vários relacionamentos. Também é chamado de relacionamento muitos-para-muitos.
    
    *Exemplo: Um aluno pode cursar várias disciplinas, e uma disciplina pode conter vários alunos.*
    
### Resumindo

* **0** - Opcional (pode não existir)
* **1** - Obrigatório (deve existir)
* **N** - Muitos (vários)

Então:

* **(0,1)** → Opcional e no máximo um.
* **(1,1)** → Obrigatório e exatamente um.
* **(0,N)** → Opcional e vários.
* **(1,N)** → Obrigatório e vários.
