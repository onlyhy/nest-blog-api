/*
 * @Date: 2020-04-19 16:44:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-19 18:03:16
 */
// 定义post模型
import { prop } from '@typegoose/typegoose'

export class Post{
    @prop()
    title: string
    @prop()
    content: string
}