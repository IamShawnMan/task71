import { ApiProperty } from '@nestjs/swagger';
export class CreateCourseDto {
  @ApiProperty({
    description: 'Title kiriting',
    example: 'English',
    required: true,
  })
  title: string;

  @ApiProperty({
    description: 'Add course description',
    example: 'Learn english in 3 month',
  })
  description: string;
}
