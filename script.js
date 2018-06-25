// Get div for page visit counter
var visitedText = document.getElementById('visited-text')

// Get number of visits from local storage
var visitCount = window.localStorage.getItem('visitCount')

// Check if user has visited the site and how many times
if (visitCount === null) {
  visitCount = 1
  window.localStorage.setItem('visitCount', visitCount)
} else if (parseInt(visitCount) !== 0) {
  visitCount = parseInt(visitCount)
  visitCount = visitCount + 1
  window.localStorage.setItem('visitCount', visitCount)
}

// Update visit count from local local storage
visitedText.innerHTML = visitCount

// Get theme from local storage
var localTheme = window.localStorage.getItem('theme')

// Get the element that toggles theme
var btnTheme = document.getElementById('btn-theme')

// Check if local storage exists & applies theme
if (localTheme === null || localTheme === undefined) {
  window.localStorage.setItem('theme', 'day-theme')
  localTheme = window.localStorage.getItem('theme')
  document.body.setAttribute('class', localTheme)
} else {
  document.body.setAttribute('class', localTheme)
}

// Function to toggle theme via local storage
var toggleTheme1 = function () {
  if (localTheme === null || localTheme === undefined) {
    window.localStorage.setItem('theme', 'day-theme')
  }
  else if (localTheme === 'day-theme') {
    window.localStorage.setItem('theme', 'night-theme')
  } else if (localTheme === 'night-theme') {
    window.localStorage.setItem('theme', 'day-theme')
  }
  localTheme = window.localStorage.getItem('theme')
  document.body.setAttribute('class', localTheme)
}

// Add event listener to button to change theme
btnTheme.addEventListener('click', toggleTheme1)
