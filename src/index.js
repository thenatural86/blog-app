import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"
import CommentDetail from "./CommentDetail"

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="sam"
        timeAgo="Today at 4:55PM"
        text="Sweet Georgia Brown"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="ben"
        timeAgo="Today at 1:55PM"
        text="Holla back youngin"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Carlos!"
        timeAgo="Yesterday at 10:55PM"
        text="get off my lawn"
        image={faker.image.avatar()}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
