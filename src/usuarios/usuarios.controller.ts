import { Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Body } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

    @Get()
    findAll() {
        return this.usuariosService.findAll();
    }

    @Post()
    create(@Body() data: any) {
        return this.usuariosService.create(data);
    }
}
