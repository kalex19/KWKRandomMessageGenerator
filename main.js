var breakfastArray = ['fruit', 'yogurt', 'smoothie', 'oatmeal', 'pancakes', 'waffles', 'eggs and bacon']
var lunchArray = ['pizza', 'salad', 'burger', 'burrito', 'wrap', 'sandwich', 'poke bowl']
var dinnerArray = ['salad', 'steak', 'pad thai', 'grilled chicken', 'soup', 'bbq', 'veggie burger']
var breakfastText = document.querySelector('#breakfast-text')
var lunchText = document.querySelector('#lunch-text')
var dinnerText = document.querySelector('#dinner-text')
var breakfastBtn = document.querySelector('#breakfast-btn')
var lunchBtn = document.querySelector('#lunch-btn')
var dinnerBtn = document.querySelector('#dinner-btn')

breakfastBtn.addEventListener('click', generateText('breakfast'))
lunchBtn.addEventListener('click', generateText('lunch'))
dinnerBtn.addEventListener('click', generateText('dinner'))

function generateText(meal) {
  return e => {
    console.log(`${meal} clicked`)
    var random = Math.floor(Math.random() * 7)
    var text;

    if (meal === 'breakfast') {
      text = breakfastArray[random]
      breakfastText.innerText = text
    } else if (meal === 'lunch') {
      text = lunchArray[random]
      lunchText.innerText = text;
    } else {
      text = dinnerArray[random]
      dinnerText.innerText = text;
    }
  }
}