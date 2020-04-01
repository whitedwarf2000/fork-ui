"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootAlert = exports.rootNotification = exports.root = void 0;
var root = document.createElement('div');
exports.root = root;
var rootNotification = document.createElement('div');
exports.rootNotification = rootNotification;
var rootAlert = document.createElement('div');
exports.rootAlert = rootAlert;
root.id = 'root-portal';
rootNotification.id = 'root-notification';
rootAlert.id = 'root-alert';
root.appendChild(rootNotification);
root.appendChild(rootAlert);
document.body.appendChild(root);