//js goes here

let h1 = document.querySelector('h1');
	h1.addEventListener('click', function() {
	h1.style.fontSize = "5em";
	h1.style.color = "blue";
})

let button  = document.querySelector('button');
button.addEventListener('click', function() {
	let message = "You clicked " + event.offsetX + " and " + event.offsetY;
	let clickedElement = event.target;

	console.log(message);
	console.log(event.target);
})

let stylesheet = document.querySelector('[href*="css/none.css"]');
console.log(stylesheet);

function doSomething(item) {
	document.querySelector(`#${item}`).addEventListener('click',
		function() {
			stylesheet.setAttribute('href', `css/${item}.css`);
		});
}

let listItems = document.querySelectorAll(".styles li");
for(var i in Object.keys(listItems)) doSomething(listItems[i].id);

document.addEventListener('keydown', function(event){
	if(event.key === 'ArrowUp') {
		document.querySelector('h2').style.fontSize = "5em";
	} else if (event.key === 'ArrowDown') {
		document.querySelector('h2').style.fontSize = "1em";
	}
})

let clickCount = 0;  //keep track of the "state" (global)
document.querySelector('button').addEventListener('click', function() {
    if(clickCount > 10) {  //decide what to do
        console.log("I think you've had enough");
    }
    else {
        clickCount++;  //change state (+1)
        console.log('You clicked me!');
    }
});

