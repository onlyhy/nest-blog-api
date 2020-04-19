/*
 * @Date: 2020-04-19 16:44:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-19 17:17:57
 */
// 定义post模型
import { getModelForClass, prop } from '@typegoose/typegoose'

export class Post{
    @prop()
    title: string
    @prop()
    content: string
}

export const PostModel = getModelForClass(Post)