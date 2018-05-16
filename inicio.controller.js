"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var fs = require('fs');
var InicioController = /** @class */ (function () {
    function InicioController() {
    }
    InicioController.prototype.home = function () {
        //console.log('accede al inicio');
        //return 'esto es el inicio';
        var header = fs.readFileSync(__dirname + '/html/header.html', 'utf8');
        var body = fs.readFileSync(__dirname + '/html/body.html', 'utf8');
        var footer = fs.readFileSync(__dirname + '/html/footer.html', 'utf8');
        var html = header + body + footer;
        return html;
    };
    __decorate([
        common_1.Get(),
        common_1.HttpCode(200)
    ], InicioController.prototype, "home", null);
    InicioController = __decorate([
        common_1.Controller('home')
    ], InicioController);
    return InicioController;
}());
exports.InicioController = InicioController;
