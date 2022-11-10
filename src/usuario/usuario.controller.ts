import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger/dist/decorators";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./usuario.service";

@ApiTags('Usuário')
@Controller("/usuarios")
@ApiBearerAuth()
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService){}

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll()
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/cadastrar')
    async create(@Body()usuario: Usuario) : Promise<Usuario> {
        return await this.usuarioService.create(usuario);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise <Usuario> {
        return this.usuarioService.update(usuario)
    }
}