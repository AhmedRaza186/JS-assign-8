var studentnames = []

var studentNames = new Array()

var stringsArray = ["Apple", "Banana", "Orange"]

var numbersArray = [1, 2, 3, 4, 5]

var booleanArray = [true, false, true, false]

var mixedArray = ["Ahmed", 17, true, null]

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.writeln(`<h3>Qualifications in Pakistan:</h3>`)
document.writeln(`1) ${qualifications[0]}<br>`)
document.writeln(`2) ${qualifications[1]}<br>`)
document.writeln(`3) ${qualifications[2]}<br>`)
document.writeln(`4) ${qualifications[3]}<br>`)
document.writeln(`5) ${qualifications[4]}<br>`)
document.writeln(`6) ${qualifications[5]}<br>`)
document.writeln(`7) ${qualifications[6]}<br>`)
document.writeln(`8) ${qualifications[7]}<br><br>`)



var students = ["Ahmed", "Sara", "Ali"]
var scores = [400, 350, 380]
var totalMarks = 500
document.writeln(`Score of ${students[0]} is ${scores[0]}. Percentage: ${(scores[0] / totalMarks) * 100}%<br>`)
document.writeln(`Score of ${students[1]} is ${scores[1]}. Percentage: ${(scores[1] / totalMarks) * 100}%<br>`)
document.writeln(`Score of ${students[2]} is ${scores[2]}. Percentage: ${(scores[2] / totalMarks) * 100}%<br><br>`)

var originalcolors = ["Red", "Green", "Blue"]
alert(`Original colors:\n${originalcolors.join("\n")}`)
setTimeout(function () {
  var startcolor = prompt("Which color do you want to add at the beginning?")
  originalcolors.unshift(startcolor)
  alert(`Updated colors:\n${originalcolors.join("\n")}`)
}, 100)


setTimeout(function () {
  var endcolor = prompt("Which color do you want to add at the End?")
  originalcolors.push(endcolor)
  alert(`Updated colors:\n${originalcolors.join("\n")}`)
}, 100)


setTimeout(function () {
  var firstcolor = prompt("Give me First color to add in the beggining")
  var secondcolor = prompt("Give me Second color to add in the beggining")
  originalcolors.unshift(secondcolor)
  originalcolors.unshift(firstcolor)
  alert(`Updated colors:\n${originalcolors.join("\n")}`)
}, 100)


setTimeout(function () {
  alert("Removing First color")
  originalcolors.shift()
  alert(`Updated colors:\n${originalcolors.join("\n")}`)
}, 100)


setTimeout(function () {
  alert("Removing last color")
  originalcolors.pop()
  alert(`Updated colors:\n${originalcolors.join("\n")}`)
}, 100)


setTimeout(function () {
  var addindex = +prompt("At which index do you want to add a color?")
  var addcolor = prompt("Enter the color name:")
  originalcolors.splice(addindex, 0, addcolor)
  alert(`Updated colors:\n${originalcolors.join("\n")}`)
}, 100)


setTimeout(function () {
  var delindex = +prompt("At which index do you want to remove a color?")
  var delcount = +prompt("How many colors you want to delete?")
  originalcolors.splice(delindex, delcount);
  alert(`Updated colors:\n${originalcolors.join("\n")}`)
}, 100)



var scores = [320, 230, 480, 120]
document.writeln(`Scores: ${scores}  <br>`)
scores.sort()
document.writeln(`Sorted Scores: ${scores} <br><br>`)



var cities =["karachi","hyderabad","lahore","islamabad","multan"]
document.writeln(`<br> Cities :<br>${cities.join("<br>")}`)
var Selectedcities = cities.slice(0,3)
document.writeln(`<br> <br> Selected Cities:<br>${cities.join("<br>")}<br><br>`)


var arr = ["This", " is", " my", " cat"]
var singleString = arr.join("")
document.writeln(`Single string: ${singleString} <br><br>`)




var fifo = []
fifo.push("Keyboard")
fifo.push("Mouse")
fifo.push("Printer")
fifo.push("Monitor")
document.writeln(fifo)
document.writeln("<br>FIFO:<br>");
document.writeln(fifo.shift() + "<br>");
document.writeln(fifo.shift() + "<br>");
document.writeln(fifo.shift() + "<br>");
document.writeln(fifo.shift() + "<br>");
