import React, { useState, useEffect } from 'react'
import caller from '../Helpers/caller'

import './List.css'

export default function List() {
  
  const [commits, setCommits] = useState([])

  useEffect(() => {
    async function getCommits() {
      let data = await caller()
      setCommits(data)
    }
    getCommits()
  }, [])
  

  return (
    <div className='container'>
      {
        commits?.map((commit, index) => {
          return (
            <div className='row' key={index}>
              <h2>{commit.name}</h2>
              <h4>{commit.date}</h4>
              <h4>{commit.message}</h4>
            </div>
          )
        })
      }
    </div>
  )
}
