import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

// 类：数据传输对象
// Dto:DataTransferObject
class CreatePostDto {
    @ApiProperty({description:'帖子标题'})
    title: string
    @ApiProperty({ description: '帖子内容' })
    content: string
}


@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({ summary: '显示博客列表' })
    index() {
        return []
    }

    @Post()
    @ApiOperation({ summary: '创建帖子' })
    create(@Body() body: CreatePostDto) {
        return {
            success: true
        }
    }

    @Get(':id')
    detail() {
        return {
            id: 1,
            title: '123'
        }
    }
}
