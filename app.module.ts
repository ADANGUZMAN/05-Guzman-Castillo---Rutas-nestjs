import { Module } from '@nestjs/common';
import {InicioController} from './inicio.controller';
import { Faqcontroller } from './faq.controller';

@Module({
  imports: [],
  controllers: [InicioController, Faqcontroller],
})
export class AppModule {}
