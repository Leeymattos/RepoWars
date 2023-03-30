import { useState } from "react"

function App() {
  const [showGame, setShowGame] = useState<boolean>(false);
  const [repos, setRepos] = useState([])

  const handleStartClick = () => {
    setShowGame(true);
  }

  return (
    <main>
      {!showGame && (
        <>
          <h1>Welcome to RepoWars</h1>
          <h2>A developer-driven guessing game</h2>
          {repos.length === 0 ? (
            <p>Loading Game...</p>
          ) : (
            <button
              type="submit"
              onClick={handleStartClick}>
              Start
            </button>
          )}
        </>
      )}
      {
        showGame && (
          <>
            <h1>Game</h1>
          </>
        )
      }
    </main>
  )
}

export default App
