const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false
        },
        icon: path.join(__dirname, 'assets', 'icon.png'),
        backgroundColor: '#667eea',
        title: 'Gerenciador de Senhas',
        autoHideMenuBar: true // Esconder menu bar
    });

    // Carregar o arquivo HTML
    mainWindow.loadFile('index.html');

    // Abrir DevTools (remova em produção)
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// Executar quando o Electron estiver pronto
app.on('ready', createWindow);

// Fechar quando todas as janelas forem fechadas (exceto macOS)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Recriar janela no macOS quando clicar no dock
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
