import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GitHubController } from './git-hub.controller';
import { GitHubService } from './git-hub.service';


@Module({
  imports: [HttpModule],
  controllers: [GitHubController],
  providers: [GitHubService],
  exports: [GitHubService]
})

export class GitHubModule {}
