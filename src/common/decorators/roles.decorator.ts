import { SetMetadata } from '@nestjs/common';
import { Role } from '../constants/role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
