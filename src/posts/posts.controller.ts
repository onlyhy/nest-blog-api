import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

// 类：数据传输对象
// Dto:DataTransferObject
class CreatePostDto {
    @ApiProperty({ description: '帖子标题',example:'帖子标题1' })
    title: string
    @ApiProperty({ description: '帖子内容',example:'帖子内容1' })
    content: string
}



@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({ summary: '帖子列表' })
    async index() {
        return await PostModel.find()
    }

    @Post()
    @ApiOperation({ summary: '创建帖子' })
    async create(@Body() createPostDto: CreatePostDto) {
        await PostModel.create(createPostDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({ summary: '帖子详情' })
    async detail(@Param('id') id: string) {
         return await PostModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({ summary: '编辑帖子' })
    async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
        await PostModel.findByIdAndUpdate(id, updatePostDto)
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除帖子' })
    async remove(@Param('id') id: string){
        await PostModel.findByIdAndRemove(id)
        return {
            success: true
        }
    }

}
