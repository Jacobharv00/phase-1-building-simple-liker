// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeBtn = Array.from(document.getElementsByClassName('like-glyph'))
//console.log(likeBtn === array)

likeBtn.forEach(like => {
  like.addEventListener('click', (e) => {
    // Everything below this line is broken!
    console.log(e.target)

  //   then((valueHeart) => {
     
  //   }) 
    
  //   try {
  //     mimicServerCall()
  //   } catch (error) {
  //     console.log(error)
  //   }
   })
})


















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
