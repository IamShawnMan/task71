import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private model: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.model.create({ ...CreateUserDto });
    return user;
  }

  async findAll() {
    return this.model.findAll();
  }

  async findOne(id: number) {
    const user = await this.model.findByPk(id, { include: { all: true } });
    if (!user) return `User not found by id ${id}`;
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.model.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    return user;
  }

  async remove(id: number) {
    await this.model.destroy({ where: { id } });
    return { data: {} };
  }
}
