import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuarios/entities/usuario.entity/usuario.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'node_modules/bcryptjs';
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private usuarioRepository: Repository<UsuarioEntity>,
        private jwtService: JwtService
    ) {}

    async signIn(email: string, password: string){
        const user = await this.usuarioRepository.findOne({ where: { email } });
        if (!user) throw new UnauthorizedException('Usuario no encontrado');

        const valio = await bcrypt.compare(password, user.password);
        if (!valio) throw new UnauthorizedException('Contraseña incorrecta');

        const payload = {sub: user.id, email: user.email, role: user.rol};
        return {
            access_token: await this.jwtService.signAsync(payload),
            usuario:{id: user.id, email: user.email, role: user.rol}
        };
    }
}
