import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateRoleDto } from 'src/roles/dto/create-role.dto';
import { Role } from 'src/roles/roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}

  async createRole(dto: CreateRoleDto): Promise<Role> {
    const role = await this.roleModel.create(dto);

    return role;
  }
  async getRoleByValue(value: string): Promise<Role> {
    const role = await this.roleModel.findOne({ where: { value } });

    return role;
  }
}
