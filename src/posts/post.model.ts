/*
 * @Date: 2020-04-19 16:44:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-19 18:40:44
 */
// 定义post模型
import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

// 可以直接把controller里面的Dto放到这里来
export class Post{
    @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
    @prop()
    title: string
    @ApiProperty({ description: '帖子内容', example: '帖子内容1' })
    @prop()
    content: string
}

// export class Post {
//     @prop()
//     title: string
//     @prop()
//     content: string
// }