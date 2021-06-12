import React from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
const QuoteDetail = props => {
  const params = useParams()
  return (
    <>
      <h1>Quote Details Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail
