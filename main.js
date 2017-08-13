// This fires when you click submit
const onSubmitClick = (num) => () => {
  // Get the comment text from the textarea box
  const commentText = document.getElementById('comment-text-' + num)
  const text = commentText.value

  // Add a comment with that text
  // This is insecure because we don't check the content before adding it
  const commentBox = document.getElementById('comment-box-' + num)
  const html = '<div class="comment">Anon says: ' + text + '</div>'
  commentBox.innerHTML += html
}



// Hook up the add comment function with the buttons
const commentBtn0 = document.getElementById('comment-btn-0')
commentBtn0.onclick = onSubmitClick(0)

const commentBtn1 = document.getElementById('comment-btn-1')
commentBtn1.onclick = onSubmitClick(1)


// Set cookie so we can steal it later
document.cookie = 'secretCookie=123456;'