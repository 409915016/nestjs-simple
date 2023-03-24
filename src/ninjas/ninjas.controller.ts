import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateNinjaDto }                                         from './dto/update-ninja.dto';
import { NinjasService }                                          from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks'){
    //const service = new NinjasService()
    return this.ninjasService.getNinjas(weapon)
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
