import React from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' }
]
const QuoteDetail = props => {
  const params = useParams()
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
  if (!quote) {
    return <p>No Quote Found</p>
  }
  return (
    <>
      <h1>Quote Details Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail
