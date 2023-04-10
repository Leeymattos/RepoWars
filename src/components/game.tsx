import React, { useEffect, useState } from "react"
import { FaExchangeAlt } from "react-icons/fa"
import './game.css'
import RepoCard from './RepoCard'

interface GameProps {
  repoState: [Repo[], React.Dispatch<React.SetStateAction<Repo[]>>]
  originalList: Repo[]
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Game({ repoState, originalList, setShowGame }: GameProps) {

  const [over, setOver] = useState(false)
  const [repo1, setRepo1] = useState<Repo | null>(null)
  const [repo2, setRepo2] = useState<Repo | null>(null)

  useEffect((
  ) => {
    setRepo1(originalList[0])
    setRepo2(originalList[1])
  }, [])

  const handleChoice = (repo: Repo) => { }
  return (
    <div className="game">
      {over ? (<div className="score" > </div>) : (
        repo1 && repo2 && (
          <div className="repos">
            <h1 className="title">Choose the Repo with most Stars</h1>
            <div className="container">
              <RepoCard content={repo1} handler={handleChoice} />
              <div className="dashboard">
                <FaExchangeAlt className="icon-versus" />
              </div>
              <RepoCard content={repo2} handler={handleChoice} />
            </div>
          </div>
        )

      )}

      <div className="buttons">
        <button
          type="submit"
          className="button gradient alternate"
          onClick={() => setShowGame(false)}>
          {over ? "Play Again" : "Back"}
        </button>
        {!over && (
          <button
            type="submit"
            className="button gradient"
            onClick={() => setShowGame(false)}>
            Skip
          </button>
        )}

      </div>
    </div>
  )
}