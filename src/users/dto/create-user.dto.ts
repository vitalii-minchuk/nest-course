import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@user.com', description: 'User email' })
  readonly email: string;

  @ApiProperty({ example: '1234567890', description: 'User password' })
  readonly password: string;
}
