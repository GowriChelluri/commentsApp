import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment, date, id, isLiked} = commentDetails
  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }
  const postedTime = formatDistanceToNow(date)
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div>
        <div className="icon-container">
          <button type="button" className="icon">
            {name[0]}
          </button>
          <div className="name-time-container">
            <h1 className="name">{name}</h1>
            <p>{postedTime}</p>
          </div>
        </div>
        <p>{comment}</p>
        <div className="like-delete-container">
          <div className="like-container">
            <img src={imageUrl} alt="like" />
            <button type="button" onClick={onClickLike}>
              Like
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    </li>
  )
}
export default CommentItem
