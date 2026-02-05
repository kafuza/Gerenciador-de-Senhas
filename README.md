# 🔐 Gerenciador de Senhas - Electron Desktop

Aplicativo desktop multiplataforma desenvolvido com **Electron** e **React**.

## 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org/)
- **npm** (vem junto com Node.js)

## 🚀 Instalação e Execução

### Passo 1: Verificar Node.js

```bash
node --version
npm --version
```

Se não tiver instalado, baixe em: https://nodejs.org/

### Passo 2: Instalar Dependências

```bash
npm install
```

⏱️ Isso pode demorar alguns minutos na primeira vez.

### Passo 3: Executar o Aplicativo

```bash
npm start
```

🎉 O aplicativo abrirá em uma janela desktop!

## 📦 Gerar Executável

### Windows (.exe)

```bash
npm run build:win
```

O arquivo `.exe` estará em `dist/`

### macOS (.dmg)

```bash
npm run build:mac
```

O arquivo `.dmg` estará em `dist/`

### Linux (.AppImage)

```bash
npm run build:linux
```

O arquivo `.AppImage` estará em `dist/`

### Todas as plataformas

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
electron-password-manager/
├── main.js              # Processo principal do Electron
├── index.html           # Interface React do app
├── package.json         # Configurações e dependências
├── assets/              # Ícones (crie esta pasta)
│   └── icon.png         # Ícone do aplicativo
└── dist/                # Executáveis gerados (após build)
```

## ✨ Funcionalidades

- ✅ Interface moderna com React
- ✅ Adicionar, editar e deletar senhas
- ✅ Gerador de senhas fortes (16 caracteres)
- ✅ Busca em tempo real
- ✅ Mostrar/ocultar senhas
- ✅ Copiar para área de transferência
- ✅ Armazenamento local persistente
- ✅ App nativo para Windows, Mac e Linux
- ✅ Sem necessidade de navegador

## 🛠️ Tecnologias

- **Electron** - Framework para apps desktop
- **React 18** - Biblioteca UI
- **Tailwind CSS** - Framework CSS
- **Font Awesome** - Ícones
- **JavaScript** - Lógica

## 🎯 Vantagens do Electron

✅ **Multiplataforma** - Um código roda em Windows, Mac e Linux
✅ **Interface Web** - Use HTML, CSS e React
✅ **Apps Nativos** - Gera executáveis reais (.exe, .dmg, .AppImage)
✅ **Auto-update** - Pode adicionar atualizações automáticas
✅ **Distribuição fácil** - Basta enviar o executável

## 📝 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm install` | Instala todas as dependências |
| `npm start` | Executa o app em modo desenvolvimento |
| `npm run build` | Gera executável para todas plataformas |
| `npm run build:win` | Gera executável apenas para Windows |
| `npm run build:mac` | Gera executável apenas para macOS |
| `npm run build:linux` | Gera executável apenas para Linux |

## 🔒 Onde os Dados São Salvos?

**Windows:**
```
C:\Users\SeuNome\AppData\Roaming\gerenciador-senhas\
```

**macOS:**
```
~/Library/Application Support/gerenciador-senhas/
```

**Linux:**
```
~/.config/gerenciador-senhas/
```

Os dados ficam salvos no localStorage do Electron.

## ⚙️ Personalização

### Mudar o Nome do App

Edite `package.json`:
```json
"name": "seu-app-name",
"productName": "Seu App Name"
```

### Mudar o Ícone

1. Crie a pasta `assets/`
2. Adicione um arquivo `icon.png` (512x512 pixels)
3. O ícone será usado automaticamente

## 🚀 Distribuir o App

### Opção 1: Enviar o executável
Após executar `npm run build`, compartilhe o arquivo da pasta `dist/`

### Opção 2: Microsoft Store / App Store
Use os serviços de publicação de cada plataforma

### Opção 3: GitHub Releases
Faça upload dos executáveis no GitHub

## 🐛 Solução de Problemas

### "npm não encontrado"
→ Node.js não instalado. Baixe em nodejs.org

### "Erro ao instalar dependências"
→ Tente limpar o cache:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### "Electron failed to install"
→ Tente instalar manualmente:
```bash
npm install electron --save-dev
```

### Executável muito grande
→ Normal! Electron empacota o Chromium (~100MB)

### Antivírus bloqueia o executável
→ Adicione exceção ou assine digitalmente o executável

## 📊 Comparação: Electron vs Python

| Característica | Electron | Python/Tkinter |
|---------------|----------|----------------|
| Interface | Web (moderna) | Nativa |
| Tamanho executável | ~100-150 MB | ~15-30 MB |
| Tecnologia UI | HTML/CSS/React | Tkinter |
| Curva de aprendizado | Fácil (web dev) | Fácil |
| Performance | Boa | Excelente |
| Aparência | Muito moderna | Básica |

## 🎓 Próximos Passos

1. **Adicionar auto-update**
```bash
npm install electron-updater
```

2. **Adicionar menu nativo**
```javascript
const { Menu } = require('electron');
```

3. **Adicionar notificações**
```javascript
const { Notification } = require('electron');
```

4. **Integrar com API**
- Conecte com backend Python
- Sincronize na nuvem

## 📄 Licença

MIT - Livre para uso pessoal e comercial

---

🚀

---

Desenvolvido com ❤️ usando Electron + React
