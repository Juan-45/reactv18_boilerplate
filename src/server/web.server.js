const express = require("express");
const path = require("path");
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

    this.app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "public/index.html"));
    });
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
