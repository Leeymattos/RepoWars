import React, { useEffect, useState } from "react"

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
  return (
    <div className="game">
      {over ? (<div className="score" > </div>) : (
        repo1 && repo2 && (
          <div className="repos">
            <h1 className="title">Choose the Repo with most Stars</h1>
            <div className="container">
              <div>
                <h1>{repo1.name} - {repo1.full_name}</h1>
              </div>
              <div className="dashboard">
                Versus
              </div>
              <div>
                <h1>{repo2.name} - {repo2.full_name}</h1>
              </div>
            </div>
          </div>
        )

      )}

      <div className="buttons">
        <button
          type="submit"
          className="button gradient"
          onClick={() => setShowGame(false)}>Back</button>
        <button
          type="submit"
          className="button gradient"
          onClick={() => setShowGame(false)}>Next</button>
      </div>
    </div>
  )
}