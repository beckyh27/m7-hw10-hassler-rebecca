// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE
var cookiesArr = document.cookie.split('; ')
var usernameCookie = cookiesArr.find(function(cookieStr) {
  return cookieStr.startsWith('username')
})
if (usernameCookie) {
  nameSpan.textContent = usernameCookie.split('=')[1]
}


var notes = localStorage.getItem('notes')
if (notes) {
  textarea.value = notes
}

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE

  nameContent = nameSpan.textContent
  document.cookie = 'username=' + nameContent + ";"

  noteContent = textarea.value
  localStorage.setItem('notes', noteContent)

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp