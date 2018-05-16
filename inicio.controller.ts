import {Controller, Get, HttpCode} from '@nestjs/common';
const fs=require('fs');
@Controller('home')
export class InicioController{
    @Get()
    @HttpCode(200)
    home(){
        let header = fs.readFileSync(__dirname + '/html/header.html','utf8');
        let body = fs.readFileSync(__dirname + '/html/body.html','utf8');
        let footer = fs.readFileSync(__dirname + '/html/footer.html','utf8');

        let html: any = header + body + footer;
        return html;
    }

}