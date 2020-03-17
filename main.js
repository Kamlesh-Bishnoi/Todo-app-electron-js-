const electron = require("electron");
const app = electron.app;
const path = require("path");
const url = require("url");
const BrowserWindow = electron.BrowserWindow;
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 500,
    frame: true,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "login.html"),
      protocol: "file",
      slashes: true
    })
  );
  win.webContents.openDevTools();
  win.on("close", () => {
    win = null;
  });
  win.on("ready-to-show", () => {
    win.show();
  });
}
app.on("ready",createWindow);