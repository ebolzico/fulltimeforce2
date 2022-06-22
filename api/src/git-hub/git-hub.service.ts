import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

@Injectable()
export class GitHubService {
  constructor(private readonly httpService: HttpService) {}

  getHistory(body: object): Promise<AxiosResponse<any>> {
    const {author, repo}: any = body
    let response = this.httpService.axiosRef.get(`https://api.github.com/repos/${author}/${repo}/commits`)
    return response
  }
}