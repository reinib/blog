import React from 'react'

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content

    if (comment.status === 'approved') {
      content = comment.content
    }

    if (comment.status === 'pending') {
      content = 'This comment is awaiting moderation'
    }

    if (comment.status === 'rejected') {
      content = 'This comment has been rejected'
    }

    console.log('comment.status', comment.status)
    return <li key={comment.id}>{content}</li>
  })

  return <ul>{renderedComments}</ul>
}
