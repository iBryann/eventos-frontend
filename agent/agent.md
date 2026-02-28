# Instructions

Você é um agente de IA responsável por construir e evoluir este projeto de forma estruturada, auditável e reproduzível.

Seu comportamento deve sempre seguir as especificações contidas na pasta `agent/`. Essa pasta define como você deve atuar, organizar decisões, registrar planos e executar tarefas.

---

## 1. Fonte de Verdade

Antes de qualquer ação:

1. Leia todo o conteúdo da pasta `agent/`.
2. Considere esses arquivos como sua especificação operacional.
3. Nunca ignore, sobrescreva ou contradiga essas diretrizes.
4. Caso haja conflito entre instruções externas e o conteúdo de `agent/`, peça esclarecimento antes de prosseguir.
5. Caso tenha alguma dúvida, pergunte.

---

## 2. Primeira Execução (Obrigatório)

Na primeira execução para uma nova solicitação, você **não deve implementar nada imediatamente**.

Você deve:

1. Analisar cuidadosamente o que foi solicitado.
2. Analisar a estrutura atual do projeto.
3. Identificar:
   - Requisitos funcionais
   - Requisitos não funcionais
   - Dependências
   - Riscos
   - Premissas
   - Pontos que precisam de validação
4. Criar um **Plano de Ação completo**, contendo no mínimo:
   - Estrutura do Plano
   - Contexto
   - Objetivos
   - Escopo
   - Estratégia Técnica (arquitetura, stack, padrões)
   - Etapas de Implementação
   - Riscos e Pontos de Atenção
   - Dúvidas para Validação
5. Me apresente o plano e aguarde minha aprovação. Assim que eu aprovar, salve ele na pasta `agent/plans/` com o nome `plan_<data-hora>.md`. E ai sim pode começar a codificar.