# 🎬 CATAFLIX

Um catálogo de filmes inspirado no layout da Netflix, desenvolvido como projeto acadêmico utilizando React + TypeScript.

---

## 👤 Autor

**Matheus Gabriel Reboucas - 01858232**

---

## 📌 Sobre o Projeto

O **Cataflix** é um aplicativo simples de catálogo de filmes, permitindo:

- ➕ **Adicionar** filme
- ✏️ **Editar** filme
- 🗑️ **Excluir** filme
- 📄 Exibir lista em cards estilizados no padrão Netflix
- 📱 Layout responsivo com design inspirado na Netflix e Prime Video

O sistema utiliza um _fake backend_ com **json-server** para simular uma API REST local.

---

## Explicação do Projeto

![Texto alternativo para a imagem](assets/cataflix.png)
Veja o vídeo de demonstração do nosso projeto: [Assista à Explicação do GitHub do Projeto](**https://drive.google.com/file/d/1y9NGLUOjDvz3bjDtmodeitlfKPPAsZBO/view?usp=sharing**)

---

## 🧰 Tecnologias e Bibliotecas Utilizadas

### **Front-end**

- ⚛️ **React**
- 🟦 **TypeScript**
- 🌐 **React Router DOM**
- 🎨 **CSS puro**
- 🔄 **Fetch API**

### **Back-end Fake (API)**

- 📦 **json-server**

---

## 📁 Estrutura do Projeto

```bash
src/
├── components/
│ ├── Header/
│ ├── Card/
│ └── Form/
│
├── pages/
│ ├── Home/
│ └── List/
│
├── services/
│ └── List.ts
│
├── App.tsx
└── index.css
```

---

## 🚀 Funcionalidades Detalhadas

### ✔️ Cadastro de Filme

- Usando o componente `Form.tsx`.
- Envia dados via POST para o json-server.

### ✔️ Edição de Filme

- O mesmo Form é usado, detectando pelo `id` presente na URL.
- Busca dados atuais, permite editar e salva via PATCH.

### ✔️ Exclusão

- Ícone "Excluir" no Card.
- Requisição DELETE + atualização automática do estado.

### ✔️ Listagem

- Interface em cards, responsiva e com visual de catálogo.

---

## 🎨 Layout

Frontend estilizado manualmente em CSS, **inspirado no design da Netflix**, com:

- Fundo escuro (#141414)
- Destaques em vermelho (#e50914)
- Cards com sombra e bordas arredondadas
- Tipografia semelhante ao serviço original

---

## 🏁 Como Rodar o Projeto

### 1️⃣ Instalar dependências

npm install

graphql

### 2️⃣ Iniciar API Fake (json-server)

npx json-server db.json --port 3001

shell

### 3️⃣ Rodar o Front-end

npm run dev

yaml

---

## 📌 Observações

Projeto desenvolvido para fins acadêmicos, com foco em boas práticas, componentização e estilização manual.

---

## 🎥 Inspiração

🔥 **Interface levemente baseada no layout da Netflix.**

mr44dev
