import { Module } from '@nestjs/common';
import { GitHubService } from './git-hub/git-hub.service';
import { GitHubModule } from './git-hub/git-hub.module';
import { HttpModule } from '@nestjs/axios'
import { GitHubController } from './git-hub/git-hub.controller';

@Module({
  imports: [GitHubModule, HttpModule],
  controllers: [GitHubController],
  providers: [GitHubService],
})
export class AppModule {}
