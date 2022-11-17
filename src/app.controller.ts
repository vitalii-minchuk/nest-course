import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AppService } from 'src/app.service';

@ApiTags('healthcheck')
@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'API check' })
  @ApiResponse({ status: 200, type: String, description: 'Hello World!' })
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
