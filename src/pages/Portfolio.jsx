import { useEffect, useState } from "react"

export default function Portfolio() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/Rezito1/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <main className="portfolio-main">
      <h1>My GitHub Projects:</h1>

      <div className="projects">
        {repos.map((repo) => (
          <div className="project-card" key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            
            <a
              href={repo.html_url}
              target="_blank"
              className="portfolio-button"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}