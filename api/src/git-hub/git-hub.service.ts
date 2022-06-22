import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

@Injectable()
export class GitHubService {
  constructor(private readonly httpService: HttpService) {}

  getHistory(): Promise<AxiosResponse<any>> {
    let response = this.httpService.axiosRef.get('https://api.github.com/repos/ebolzico/cumple/commits')
    console.log(response)
    return response
  }
}