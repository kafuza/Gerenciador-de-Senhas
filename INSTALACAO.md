# 🚀 GUIA DE INSTALAÇÃO - Electron

## Passo a Passo Completo

### 📥 PASSO 1: Instalar Node.js

#### Windows:
1. Acesse: https://nodejs.org/
2. Clique em **"Download"** (versão LTS recomendada)
3. Execute o instalador `.msi` baixado
4. Clique em **"Next"** em todas as telas
5. Marque **"Automatically install necessary tools"** se aparecer
6. Clique em **"Install"**
7. Aguarde a instalação
8. Clique em **"Finish"**

#### Mac:
1. Acesse: https://nodejs.org/
2. Baixe a versão **macOS Installer (.pkg)**
3. Abra o arquivo baixado
4. Siga o assistente de instalação
5. Digite sua senha quando solicitado

#### Linux:
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Fedora
sudo dnf install nodejs

# Arch Linux
sudo pacman -S nodejs npm
```

### ✅ PASSO 2: Verificar Instalação

Abra o terminal/prompt de comando:

**Windows:**
- Pressione `Windows + R`
- Digite `cmd` e Enter

**Mac:**
- Pressione `Cmd + Espaço`
- Digite `Terminal` e Enter

**Digite os comandos:**
```bash
node --version
```
Deve mostrar algo como: `v20.10.0`

```bash
npm --version
```
Deve mostrar algo como: `10.2.3`

✅ **Se aparecerem as versões, está tudo certo!**

---

### 📂 PASSO 3: Preparar a Pasta do Projeto

1. **Extraia a pasta `electron-password-manager`** para um local fácil
   - Exemplo: Área de Trabalho, Documentos, etc.

2. **Abra o terminal nesta pasta:**

**Windows - Jeito Fácil:**
1. Abra a pasta `electron-password-manager` no Explorador de Arquivos
2. Clique na barra de endereço (onde mostra o caminho)
3. Digite `cmd` e aperte Enter
4. O terminal abrirá já na pasta certa!

**Windows - Jeito Manual:**
```bash
cd C:\caminho\para\electron-password-manager
```

**Mac/Linux:**
```bash
cd /caminho/para/electron-password-manager
```

### ✅ Confirmar que está na pasta certa:
Digite:
```bash
dir       # Windows
ls        # Mac/Linux
```

Deve ver os arquivos:
- `package.json`
- `main.js`
- `index.html`

---

### 📦 PASSO 4: Instalar Dependências

No terminal (na pasta do projeto), digite:

```bash
npm install
```

**O que vai acontecer:**
- Vai começar a baixar arquivos
- Vai criar uma pasta `node_modules/`
- Pode demorar **3-5 minutos**
- Você verá muitas mensagens aparecendo

**✅ Sucesso quando aparecer:**
```
added 212 packages in 2m
```

**⚠️ Se der erro:**
```bash
# Limpe e tente novamente:
npm cache clean --force
npm install
```

---

### ▶️ PASSO 5: Executar o Aplicativo

Ainda no terminal, digite:

```bash
npm start
```

**🎉 O aplicativo abrirá em uma janela!**

Você verá:
- Uma janela desktop
- Interface roxa bonita
- "Gerenciador de Senhas" no topo
- Botão "Nova Senha"

---

### 🎮 PASSO 6: Usar o App

Agora você pode:
- ✅ Adicionar senhas
- ✅ Editar senhas
- ✅ Deletar senhas
- ✅ Buscar senhas
- ✅ Gerar senhas fortes

**Para fechar:**
- Clique no X da janela
- OU pressione `Alt + F4` (Windows)
- OU pressione `Cmd + Q` (Mac)

---

### 📦 PASSO 7: Criar Executável (Opcional)

Para criar um arquivo `.exe` que você pode distribuir:

```bash
npm run build:win     # Windows
npm run build:mac     # Mac
npm run build:linux   # Linux
```

**⏱️ Isso pode demorar 5-10 minutos!**

**Quando terminar:**
- Abra a pasta `dist/`
- Você verá o executável gerado!
- Pode copiar e enviar para outras pessoas

**Tamanhos aproximados:**
- Windows: ~120 MB
- Mac: ~150 MB
- Linux: ~100 MB

---

## ❓ PERGUNTAS FREQUENTES

### Preciso ter internet para usar?
- **Instalar:** SIM (para npm install)
- **Executar:** NÃO (funciona offline!)

### Preciso deixar o terminal aberto?
- **No modo dev (npm start):** SIM
- **Executável (.exe):** NÃO

### Onde ficam salvos os dados?
Windows: `C:\Users\SeuNome\AppData\Roaming\gerenciador-senhas\`
Mac: `~/Library/Application Support/gerenciador-senhas/`
Linux: `~/.config/gerenciador-senhas/`

### Posso deletar a pasta node_modules?
- **Durante uso:** NÃO
- **Depois de gerar .exe:** SIM (mas guarde o .exe)

### Como atualizar o app depois?
1. Faça mudanças no código
2. Execute `npm start` para testar
3. Execute `npm run build:win` para novo .exe

---

## 🆘 PROBLEMAS COMUNS

### "npm não é reconhecido"
**Solução:** Node.js não instalado corretamente
1. Reinstale o Node.js
2. Reinicie o computador
3. Tente novamente

### "Cannot find module 'electron'"
**Solução:**
```bash
npm install electron --save-dev
```

### Instalação muito lenta
**Solução:**
```bash
# Use outro registry:
npm install --registry=https://registry.npm.taobao.org
```

### Erro de permissão (Linux/Mac)
**Solução:**
```bash
sudo npm install
```

### Build falha no Windows
**Solução:**
1. Instale: https://visualstudio.microsoft.com/downloads/
2. Marque "Desktop development with C++"
3. Tente `npm run build:win` novamente

---

## 📋 CHECKLIST FINAL

Antes de usar, verifique:

- [ ] Node.js instalado (`node --version`)
- [ ] npm instalado (`npm --version`)
- [ ] Pasta do projeto extraída
- [ ] Terminal aberto na pasta certa
- [ ] `npm install` executado com sucesso
- [ ] Pasta `node_modules/` existe
- [ ] `npm start` abre a janela
- [ ] App funciona normalmente

**✅ Tudo OK? Aproveite seu app!** 🎉

---

## 🎯 RESUMO RÁPIDO

```bash
# 1. Verificar Node.js
node --version

# 2. Ir para a pasta
cd electron-password-manager

# 3. Instalar
npm install

# 4. Executar
npm start

# 5. Criar .exe (opcional)
npm run build:win
```

**Pronto! Simples assim!** 🚀
