import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { AppService } from './app.service';

@Controller()
@ApiTags('默认')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  index(){
    return 'index'
  }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
