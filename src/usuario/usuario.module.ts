import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "../auth/bcrypt/bcrypt";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [Bcrypt, UsuarioService],
    controllers: [UsuarioController],
    exports: [UsuarioService]
})
export class UsuarioModule {}