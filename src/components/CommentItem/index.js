import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props

  const {name, comment, date, id, isLiked, initialClassName} = commentDetails
  const likeTextClassName = isLiked ? 'like-btn active' : 'like-btn'
  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }
  const postedTime = formatDistanceToNow(date)
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div>
        <div className="icon-container">
          <button className={`${initialClassName} icon`} type="button">
            {name[0].toUpperCase()}
          </button>

          <div className="name-time-container">
            <h1 className="name">{name}</h1>
            <p className="time">{postedTime}</p>
          </div>
        </div>
        <p className="comment">{comment}</p>
        <div className="like-delete-container">
          <div className="like-container">
            <img src={imageUrl} alt="like" className="like-icon" />
            <button
              type="button"
              onClick={onClickLike}
              className={likeTextClassName}
            >
              Like
            </button>
          </div>
          <button
            type="button"
            onClick={onDeleteComment}
            className="delete-btn"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
        <hr className="comment-line" />
      </div>
    </li>
  )
}
export default CommentItem
