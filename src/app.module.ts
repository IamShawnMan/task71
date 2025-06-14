import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/models/user.model';
import { CourseModule } from './course/course.module';
import { Course } from './course/models/course.entity';
const vars = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: vars.PG_HOST,
      username: vars.PG_USER,
      port: Number(vars.PG_PORT),
      password: String(vars.PG_PASS),
      database: vars.PG_DB,
      synchronize: true,
      autoLoadModels: true,
      logging: false,
      models: [User, Course],
    }),
    UserModule,
    CourseModule,
  ],
})
export class AppModule {}
