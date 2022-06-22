import axios from 'axios'

export default async function caller(repo) {
  try {
    let response = await axios('http://localhost:2000/github', {
      method: 'POST', 
      data: {
        author: repo.author,
        repo: repo.repo
      }
    })
    return response.data
  } catch(err) {console.log(err)}
}