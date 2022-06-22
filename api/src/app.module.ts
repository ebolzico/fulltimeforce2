import { Module } from '@nestjs/common';
import { GitHubService } from './git-hub/git-hub.service';
import { GitHubModule } from './git-hub/git-hub.module';
import { HttpModule } from '@nestjs/axios'
import { GitHubController } from './git-hub/git-hub.controller';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 600,
      limit: 100,
    }),
    GitHubModule, HttpModule],
  controllers: [GitHubController],
  providers: [GitHubService],
})
export class AppModule {}
