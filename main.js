// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeBtn = Array.from(document.getElementsByClassName('like-glyph'))
//console.log(likeBtn)

likeBtn.forEach(like => like.addEventListener('click', handleClick))

function handleClick(e) {
  let heart = e.target
  mimicServerCall()
  
  .then(function(resolve) {
    heart.classList.add(('activated-heart'))
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART
      heart.className = ('activated-heart') 
      heart.style.cursor = 'pointer'
    } else {
      heart.style.cursor = 'pointer'
      heart.className = 'like-glyph'
      heart.textContent = EMPTY_HEART
    }
  })
  .catch(function(error) {
    document.querySelector('#modal').classList.remove('hidden')
    setTimeout(function () {
      document.querySelector('#modal').classList.add('hidden')
    }, 3000)
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
