import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Ism familiya',
    example: 'John Doe',
  })
  fullName: string;

  @ApiProperty({
    description: 'Yosh kiriting',
    example: 19,
    required: true,
  })
  age: number;

  @ApiProperty({
    description: 'Course Id kiriting',
    example: 1,
    required: true,
  })
  courseId: number;
}
