import React, { useEffect, useState } from "react"
import { FaCheckCircle, FaExchangeAlt, FaTimesCircle } from "react-icons/fa"
import './game.css'
import RepoCard from './RepoCard'

interface GameProps {
  repoState: [Repo[], React.Dispatch<React.SetStateAction<Repo[]>>]
  originalList: Repo[]
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Game({ repoState, originalList, setShowGame }: GameProps) {


  const [repositories, setRepositories] = repoState
  const [over, setOver] = useState(false)
  const [repo1, setRepo1] = useState<Repo | null>(null)
  const [repo2, setRepo2] = useState<Repo | null>(null)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)

  const randomSelect = (arr: Repo[]) => {
    if (arr.length < 2) {
      setRepositories(originalList)
      setOver(true)
      return
    }

    const generateRandomIndex = () => Math.floor(Math.random() * arr.length)

    const radomIndex1 = generateRandomIndex()
    let randomIndex2 = generateRandomIndex()

    while (randomIndex2 === radomIndex1) {
      randomIndex2 = generateRandomIndex()
    }

    const randomRepo1 = arr[radomIndex1]
    const randomRepo2 = arr[randomIndex2]

    const updatedArr = arr.filter((repo) => repo.id !== randomRepo1.id && repo.id !== randomRepo2.id)

    setRepo1(randomRepo1)
    setRepo2(randomRepo2)
    setRepositories(updatedArr)
  }

  useEffect(() => {
    randomSelect(repositories)
  }, [])


  useEffect((
  ) => {
    setRepo1(originalList[0])
    setRepo2(originalList[1])
  }, [])

  const handleChoice = (repo: Repo) => {
    const chosenRepo = repo.id == repo1?.id ? repo1 : repo2
    const winner = repo1?.stargazere_count! > repo2?.stargazere_count! ? repo1 : repo2

    if (chosenRepo?.id === winner?.id) {
      setCorrect(prev => prev + 1)
    } else {
      setWrong(prev => prev + 1)
    }
    randomSelect(repositories)
  }

  return (
    <div className="game">
      {over ? (<div className="score" > </div>) : (
        repo1 && repo2 && (
          <div className="repos">
            <h1 className="title">Choose the Repo with most Stars</h1>
            <div className="container">
              <RepoCard content={repo1} handler={handleChoice} />

              <div className="dashboard">
                <div className="result corret">
                  <p>{correct}</p>
                  <FaCheckCircle />
                </div>

                <FaExchangeAlt className="icon-versus" />

                <div className="result wrong">
                  <p>{wrong}</p>
                  <FaTimesCircle />
                </div>
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
            onClick={() => randomSelect(repositories)}>
            Skip
          </button>
        )}

      </div>
    </div>
  )
}