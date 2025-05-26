import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from './models/course.entity';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course) private model: typeof Course) {}
  async create(createCourseDto: CreateCourseDto) {
    const newCourse = await this.model.create({ ...createCourseDto });
    return newCourse;
  }

  async findAll() {
    return this.model.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const course = await this.model.findByPk(id, { include: { all: true } });
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.model.update(updateCourseDto, {
      where: { id },
      returning: true,
    });
    return course;
  }

  async remove(id: number) {
    await this.model.destroy({ where: { id } });
    return { data: {} };
  }
}
