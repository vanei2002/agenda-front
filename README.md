# Clínica Médica - Front-end

Este é o front-end da aplicação **Clínica Médica**, responsável por fornecer a interface para agendamento de exames e consultas médicas.

## 🧰 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/) (componentes visuais)

## 📦 Instalação e execução local

### 1. Clone o repositório

```bash
git clone https://git@github.com:vanei2002/agenda-front.git
cd agenda-front
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn
```

### 3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto e adicione:


```bash
VITE_MICROSERVICE=http://localhost:3000
```
Essa variável indica a URL base do serviço back-end, usado para comunicação com a API.

### 4. Execute o projeto


```bash
npm run dev
# ou
yarn dev

```