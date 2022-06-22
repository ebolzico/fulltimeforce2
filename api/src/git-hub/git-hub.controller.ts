import { Controller, Get, Post, RawBodyRequest, Req } from '@nestjs/common';
import { GitHubService } from './git-hub.service';

@Controller('github')
export class GitHubController {
  constructor(private GitHubService: GitHubService) {}

  @Post()
  async getHistory(@Req() req: RawBodyRequest<Request>) {
    try {
      const body: any = req.body   
      const response: any = await this.GitHubService.getHistory(body)
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
    } catch(err) {console.log(err)}
  }
}
