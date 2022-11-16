import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(dto);
    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.findAll({ include: { all: true } });

    return users;
  }

  async remove(id: number): Promise<void> {
    const user = await this.userModel.findOne({ where: { id } });
    await user.destroy();
  }
}
