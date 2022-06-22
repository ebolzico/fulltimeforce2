import React, { useState, useEffect } from 'react'
import caller from '../Helpers/caller'

import './List.css'

export default function List() {
  
  const [commits, setCommits] = useState([])
  const [refresh, serRefresh] = useState(false)
  const [repo, setRepo] = useState({
    author: 'ebolzico',
    repo: 'fulltimeforce2'
  })

  useEffect(() => {
    async function getCommits() {
      let data = await caller(repo)
      setCommits([])
      setCommits(data)
    }
    getCommits()
    document.getElementsByClassName("input").value = ''
  }, [refresh])

  return (
    <div className='container'>
      <div className='repo'>
        <h1>REPOSITORY: {repo.repo}</h1>
        <h2>AUTHOR: {repo.author}</h2>
        <p>Any other?</p>
        <input className='input' onChange={(e) => setRepo({...repo, author: e.target.value})} placeholder="Author"></input>
        <input className='input' onChange={(e) => setRepo({...repo, repo: e.target.value})} placeholder="Repo"></input>
        <button className='btn' onClick={() => serRefresh(!refresh)}>Get commits</button>
      </div>
      <div className='list'>
        {
          commits ?
            commits.map((commit, index) => {
              return (
                <div className='row' key={index}>
                  <p className='text'>Commiter: {commit.name}</p>
                  <p className='text'>Date: {commit.date}</p>
                  <p className='text'>{commit.message}</p>
                </div>
              )
          }) 
          :
          <></>
        }
      </div>
    </div>
  )
}
