import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/usuario.entity/usuario.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import bcrypt from 'node_modules/bcryptjs';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>) { }

    findAll() {
        return this.usuarioRepository.find();
    }
    async create(data: any) {
        const hash = await bcrypt.hash(data.password, 10);
        const usuario = this.usuarioRepository.create({
            ...data,
            password: hash,
            salario: data.salario ? Number(data.salario) : 0,
            bonificacion: data.bonificacion ? Number(data.bonificacion) : 0,
            porcentaje: data.porcentaje ? Number(data.porcentaje) : 0,
        });
        return this.usuarioRepository.save(usuario);
    }
}
