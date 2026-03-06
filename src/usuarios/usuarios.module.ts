import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { UsuarioEntity } from './entities/usuario.entity/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [TypeOrmModule.forFeature([UsuarioEntity])]
})
export class UsuariosModule {}
