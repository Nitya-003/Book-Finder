import React, { useState } from 'react'
import BookCard from './BookCard'

function App() {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const searchBooks = async () => {
    if (!query) return
    setLoading(true)
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`)
      const data = await res.json()
      setBooks(data.items || [])
    } catch (err) {
      console.error(err)
      setBooks([])
    }
    setLoading(false)
  }

  return (
    <div className="app">
      <h1>📚 Book Finder</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      <div className="grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book.volumeInfo} />
        ))}
      </div>
    </div>
  )
}

export default App
