import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { RolesService } from 'src/roles/roles.service';
import { CreateRoleDto } from 'src/roles/dto/create-role.dto';
import { Role } from 'src/roles/roles.model';

@Controller('/api/roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string): Promise<Role> {
    return this.roleService.getRoleByValue(value);
  }
}
