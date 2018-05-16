"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var Faqcontroller = /** @class */ (function () {
    function Faqcontroller() {
        this.preguntas = [];
    }
    Faqcontroller.prototype.mostrarPreguntas = function () {
        var aux = '';
        for (var _i = 0, _a = this.preguntas; _i < _a.length; _i++) {
            var preg = _a[_i];
            aux += "<h1>" + preg.pregunta + "</h1><br/>\n<p>" + preg.respuesta + "</p1><br/> \n";
            console.log(aux);
        }
        return aux;
    };
    Faqcontroller.prototype.crearPregunta = function (parametros) {
        this.preguntas.push(new Pregunta(parametros.pregunta, parametros.respuesta));
        return 'pregunta guardada existosamente';
    };
    __decorate([
        common_1.Get('mostrarPreguntas')
    ], Faqcontroller.prototype, "mostrarPreguntas", null);
    __decorate([
        common_1.Post('crearPregunta/:pregunta/:respuesta'),
        common_1.HttpCode(203),
        __param(0, common_1.Param())
    ], Faqcontroller.prototype, "crearPregunta", null);
    Faqcontroller = __decorate([
        common_1.Controller('faqcontroller')
    ], Faqcontroller);
    return Faqcontroller;
}());
exports.Faqcontroller = Faqcontroller;
var Pregunta = /** @class */ (function () {
    function Pregunta(pregunta, respuesta) {
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }
    return Pregunta;
}());
