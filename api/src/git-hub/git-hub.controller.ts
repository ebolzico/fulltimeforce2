import { Controller, Get } from '@nestjs/common';
import { GitHubService } from './git-hub.service';

@Controller('github')
export class GitHubController {
  constructor(private GitHubService: GitHubService) {}

  @Get()
  async getHistory() {   
    let response: any = await this.GitHubService.getHistory()
    let commits: any = []
    commits = response.data.map(commit => {
      let data = commit.commit
      return {
        name: data.author.name,
        date: data.author.date,
        message: data.message,
        id: data.tree.sha
      }
    })
    return commits
  }
}
