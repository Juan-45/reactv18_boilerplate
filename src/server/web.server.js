const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

export default class WebServer {
  constructor() {
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
      setTimeout(() => {
        liveReloadServer.refresh("/");
      }, 100);
    });

    this.app = express();
    this.app.use(connectLiveReload());
    this.app.use(express.static("dist/public"));
  }
  start() {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(3000, function () {
          resolve();
        });
      } catch (e) {
        console.error(e);
        reject(e);
      }
    });
  }
  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve();
        });
      } catch (e) {
        console.error(e.message);
        reject(e);
      }
    });
  }
}
