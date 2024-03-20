import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    const {name, comment, commentsList} = this.state
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {name, comment, commentsList, date} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <p className="description">Say something about 4.0 Technologies</p>
        <div className="comments-bg-container">
          <form className="comments-container" onSubmit={this.onAddComment}>
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              onChange={this.onChangeName}
            />
            <textarea
              placeholder="Your Comment"
              className="input"
              rows="8"
              cols="12"
              onChange={this.onChangeComment}
            />

            <button type="submit" className="btn">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="img"
          />
        </div>
        <ul className="list-items-container">
          {commentsList.map(eachItem => (
            <CommentItem
              commentDetails={eachItem}
              key={eachItem.id}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
