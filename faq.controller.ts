import {Controller, Post, Get, HttpCode, Param} from '@nestjs/common';
@Controller('faqcontroller')
export class Faqcontroller{
    preguntas: Pregunta[]=[];

    @Get('mostrarPreguntas')
    mostrarPreguntas(){
        let aux: string = '';
        for (const preg of this.preguntas){
            aux += `<h1>${preg.PREGUNTA}</h1><br/>\n<p>${preg.RESPUESTA}</p1><br/> \n`;
            console.log(aux);
        }
        return aux;
    }

    @Post('crearPregunta/:pregunta/:respuesta')
    @HttpCode(203)
    crearPregunta(@Param() param){
        this.preguntas.push(new Pregunta(param.pregunta, param.respuesta));
        return 'Pregunta Guardada';
    }
}
class Pregunta{
    constructor(public PREGUNTA?: string, public RESPUESTA?: string){
    }
}