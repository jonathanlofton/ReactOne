import React from 'react';

const Comment = (props) => {
  const {comment, idx} = props;
  console.log(comment);
  return (
    <p className="post-comment">
      {comment.body}
    </p>
  )
}

export default Comment;