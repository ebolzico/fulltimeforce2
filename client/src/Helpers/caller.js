import axios from 'axios'

export default async function caller() {
  let response = await axios('http://localhost:2000/github')
  return response.data
}