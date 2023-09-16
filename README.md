# API do Organizador de Tarefas

Esta API permite gerenciar tarefas.

## Criar uma Nova Tarefa

- **Rota**: `POST /tasks`
- **Descrição**: Crie uma nova tarefa.
- **Corpo da Solicitação (Body)**:
  ```json
  {
    "name": "Nome da Tarefa",
    "description": "Descrição da Tarefa",
    "day": "DD-MM-AAAA",
    "responsible": "Responsável pela Tarefa",
    "status": "Status da Tarefa"
  }
- **Resposta de Sucesso (201 Created)**:
  ```json
  {
    "message": "Tarefa criada com sucesso"
  }


## Listar Todas as Tarefas

- **Rota**: `GET /tasks`
- **Descrição**: Liste todas as tarefas cadastradas.
- **Resposta de Sucesso (200 OK)**:
  ```json
  [
    {
      "id": 1,
      "name": "Nome da Tarefa 1",
      "description": "Descrição da Tarefa 1",
      "day": "DD-MM-AAAA",
      "responsible": "Responsável pela Tarefa 1",
      "status": "Status da Tarefa 1"
    },
    {
      "id": 2,
      "name": "Nome da Tarefa 2",
      "description": "Descrição da Tarefa 2",
      "day": "DD-MM-AAAA",
      "responsible": "Responsável pela Tarefa 2",
      "status": "Status da Tarefa 2"
    }
  ]
## Atualizar uma Tarefa
- **Rota**: `PUT /tasks/:id`
- **Descrição**:  Atualize uma tarefa com base no ID.
- **Corpo da Solicitação (Body)**:
  ```json
  {
  "name": "Novo Nome da Tarefa",
  "description": "Nova Descrição da Tarefa",
  "day": "DD-MM-AAAA",
  "responsible": "Novo Responsável pela Tarefa",
  "status": "Novo Status da Tarefa"
  }
- **Resposta de Sucesso (200 OK)**:
  ```json
  {
    "message": "Tarefa atualizada com sucesso"
  }

## Excluir uma Tarefa
- **Rota**: `DELETE /tasks/:id`
- **Descrição**:  Exclua uma tarefa com base no ID.
- **Resposta de Sucesso (200 OK)**:
  ```json
  {
    "message": "Tarefa excluída com sucesso"
  }
