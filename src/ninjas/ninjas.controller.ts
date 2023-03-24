import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateNinjaDto }                                         from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string){
    return [{ type }]
  }

  @Get()
  getOneNinjas(@Param('id') id: string){
    return {
      id,
    }
  }

  @Post()
  creatNinja(@Body() creatNinjaDto){
    return {
      name: creatNinjaDto.name
    }
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
    return {
      id,
      name: updateNinjaDto.name
    }
  }

  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return {
      id
    }
  }


}
