// Selection of all the CSS selectors
const score = document.querySelector('.score span')
//const Timer = document.querySelector('.Timer span')
const holes = document.querySelectorAll('.hole')
const start_btn = document.querySelector('.buttons .start')
const stop_btn = document.querySelector('.buttons .stop')
const cursor = document.querySelector('.hammer img')

// Here we changing our default cursor to hammer
// (e) refers to event handler
window.addEventListener('mousemove', (e) => {
	cursor.style.top = e.pageY + "px"
	cursor.style.left = e.pageX + "px"
})

// It is used to give the animation to
// our hammer every time we click it
// on our screen
window.addEventListener('click', () => {
	cursor.style.animation = 'none'
	setTimeout(() => {
		cursor.style.animation = ''
	}, 101)
})

// From this part our game starts when
// we click on the start button
start_btn.addEventListener('click', () => {
	start_btn.style.display = 'none'
	stop_btn.style.display = 'inline-block'

	let holee;
	let points = 0;

	function getPoints() {
		points = points + 10;
		score.innerText = points;
	}

	// Update the score when hitting the rat
	/*function hitRat() {
	points++;
	score.innerText = points;
	}

	const game = setInterval(() => {

		// Here we are taking a random hole
		// from where mouse comes out
		let ran1 = Math.floor(Math.random() * 12)
		let ran2 = Math.floor(Math.random() * 12)
		let holee1 = holesArr[ran1]
		let holee2 = holesArr[ran2]
		// This part is used for taking the
		// mouse up to the desired hole
		let set_img1 = document.createElement('img')
		set_img1.setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210303135621/rat.png')
		set_img1.setAttribute('class', 'rat')
		holee1.appendChild(set_img1)

		let set_img2 = document.createElement('img')
		set_img2.setAttribute('src','ratty.png')
		set_img2.setAttribute('class', 'rat')
		holee2.appendChild(set_img2)
		// This part is used for taking
		// the mouse back to the hole
		setTimeout(() => {
			holee1.removeChild(set_img1)
			holee2.removeChild(set_img2)
		}, 700);
	}, 800)

	holesArr.forEach((hole) => {
		hole.addEventListener('click', (e) => {
		  const clickedRat = e.target.closest('.rat');
		  if (clickedRat) {
			hitRat();
			hole.removeChild(clickedRat);
		  }
		});
	  });
	});
	*/
	const game = setInterval (() => {
	  let ran = Math.floor(Math.random() * 12);
	  holee = holes[ran];
	  let set_img = document.createElement('img')
	  set_img.setAttribute('src',
       'https://media.geeksforgeeks.org/wp-content/uploads/20210303135621/rat.png')
		set_img.setAttribute('class', 'rat')
		holee.appendChild(set_img)
		setTimeout(() => {
			holee.removeChild(set_img)
		}, 700);
	}, 800);
	window.addEventListener('click', (e) => {
		if (e.target === holee) {
			getPoints();
		}


	
	}
	);
	// This is coded for changing the score
	// to 0 and change the stop button
	// again to the start button!
	// Stop the game when the stop button is clicked
	/*stop_btn.addEventListener('click', () => {
		clearInterval(game);
		stop_btn.style.display = 'none';
		start_btn.style.display = 'inline-block';
		score.innerHTML = '0';
		holesArr.forEach((hole) => {
		hole.innerHTML = '';
		});
	
	});*/
	stop_btn.addEventListener('click', () => {
		clearInterval(game)
		stop_btn.style.display = 'none'
		start_btn.style.display = 'inline-block'
		score.innerHTML = '0'
	})

	const Duration = 1; // 5 minutes in milliseconds
	let remainingTime = Duration * 60;
	const count = document.getElementById('Timer');
	const timer = setInterval(updateCoun, 1000);
		function updateCoun() {
		    const minutes = Math.floor(remainingTime / 60);
		     let seconds = remainingTime % 60;
			 seconds = seconds < 10 ? 0 + seconds : seconds;
		     count.innerHTML = `Timeleft:${minutes}: ${seconds}`;
		     remainingTime--;
		     if (remainingTime < 0) {
			  clearInterval(game);
			  clearInterval(timer);
			  stop_btn.style.display = 'none';
			  start_btn.style.display = 'inline-block';
			  score.innerText = points;
			 
			   
		     }
		}
	
		 /* const duration = 5;
		  let time = duration * 60;
		  setInterval(updateCount, 1000);
		  function updateCount() {
			let min = time / 60;
			let sec = time % 60;
			timer.innerHTML = `${minutes}: ${seconds}`;
			time--;
		  } 
  		  */
			// game loop code goes here
			// ...
		  
		});
