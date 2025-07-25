import React from 'react'

function BookCard({ book }) {
  return (
    <div className="card">
      <img src={book.imageLinks?.thumbnail || "https://via.placeholder.com/150x200?text=No+Image"} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.authors?.join(", ") || "Unknown"}</p>
      <p>{book.description?.slice(0, 120) || "No description"}...</p>
    </div>
  )
}

export default BookCard
