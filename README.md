# Checkpoint #5 – Next.js, APIs, Hooks e Deploy

Aplicação em **Next.js (App Router)** que consome uma API com **axios**, lista usuários, permite buscar por nome e navegar até uma página de detalhes.

## 🌐 Deploy

**https://mock-app-five.vercel.app/**

## 👥 Integrantes

Veja o arquivo [`participantes.md`](./participantes.md).

## 🔌 API utilizada

**MockAPI** (https://mockapi.io), recurso `users`.

| Ação | Endpoint |
|---|---|
| Listar usuários | `GET /users` |
| Detalhe do usuário | `GET /users/{id}` |
| Remover usuário | `DELETE /users/{id}` |

A configuração do axios (baseURL, timeout e headers) está em `app/services/api.js`.

## ✨ Funcionalidades

- Listagem de usuários com axios (`/`)
- Página de detalhes de um usuário, buscando os dados na API pelo id da URL
- Navegação entre usuários (Anterior / Próximo) e botão de voltar
- Remoção de usuário
- Busca por nome com filtro em tempo real
- Tratamento de **loading** e **erro**

## 🧠 Hooks utilizados

| Hook | Onde | Para quê |
|---|---|---|
| `useState` | `page.js`, `UserDetails`, `UserNavigation` | Guardar usuários, filtro, loading e erro |
| `useEffect` | `page.js`, `UserDetails`, `UserNavigation`, `Header` | Carregar dados da API e focar o input de busca |
| `useMemo` | `page.js` | Calcular a lista filtrada só quando filtro ou usuários mudam |
| `useCallback` | `page.js`, `UserDetails` | Memorizar as funções de busca na API |
| `useRef` | `Header` | Acessar o input de busca e dar foco ao carregar |

## 🗂️ Estrutura

```
app/
├── page.js                # Página principal (lista)
├── layout.js              # Layout raiz
├── details/[id]/page.js   # Página de detalhes do usuário
├── services/api.js        # Instância do axios
└── components/
    ├── header.js          # Título + campo de busca
    ├── usersList.js       # Lista de usuários
    ├── userInfo.js        # Item da lista
    ├── UserDetails.js     # Detalhes do usuário
    ├── userNavigation.js  # Botões Anterior / Próximo
    ├── loading.js         # Mensagem de carregamento
    └── error.js           # Mensagem de erro
participantes.md
README.md
```

## 🚀 Como rodar localmente

**Pré-requisitos:** Node.js 20 ou superior e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/Gabriellluna/Mock_App.git
cd Mock_App

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção

```bash
npm run build
npm start
```

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [axios](https://axios-http.com)
- [Tailwind CSS](https://tailwindcss.com) (apenas visual)
- Deploy na [Vercel](https://vercel.com)

## 🔒 Observações

Nenhum segredo ou variável de ambiente é necessário: a API do MockAPI é pública e a URL base fica em `app/services/api.js`.