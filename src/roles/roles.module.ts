import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { RolesService } from 'src/roles/roles.service';
import { RolesController } from 'src/roles/roles.controller';
import { Role } from 'src/roles/roles.model';
import { User } from 'src/users/users.model';
import { UserRoles } from 'src/roles/user-roles.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
})
export class RolesModule {}
