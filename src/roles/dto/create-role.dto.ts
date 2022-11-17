import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'User role (USER | ADMIN)' })
  readonly value: string;

  @ApiProperty({ example: 'user', description: 'User role description' })
  readonly description: string;
}
