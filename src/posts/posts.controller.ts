import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

// 类：数据传输对象
// Dto:DataTransferObject
class CreatePostDto {
    @ApiProperty({ description: '帖子标题' })
    title: string
    @ApiProperty({ description: '帖子内容' })
    content: string
}



@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({ summary: '显示帖子列表' })
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
    @ApiOperation({ summary: '帖子详情' })
    detail(@Param('id') id: string) {
        return {
            id: id,
            title: '123'
        }
    }

    @Put(':id')
    @ApiOperation({ summary: '编辑帖子' })
    update(@Param('id') id: string, @Body() body: CreatePostDto) {
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除帖子' })
    remove(@Param('id') id: string){
        return {
            success: true
        }
    }

}
