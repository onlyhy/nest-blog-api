import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from './post.model'
@Module({
  imports: [
    // 引入定义的参数，这里就是创建一个模型了
    TypegooseModule.forFeature([Post])
  ],
  controllers: [PostsController]
})
export class PostsModule { }
