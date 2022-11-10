import { ApiProperty } from "@nestjs/swagger/dist/decorators"

export class UsuarioLogin {

    @ApiProperty()
    usuario: string

    @ApiProperty()
    senha: string
    
}