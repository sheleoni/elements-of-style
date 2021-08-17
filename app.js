prevButton = document.querySelector('#prevButton');
nextButton = document.querySelector('#nextButton');

chapterTitle = document.querySelector('.chapter-title');
subchapterNumber = document.querySelector('.subchapter-number');
subchapterTitle = document.querySelector('.chapter-subtitle');
body = document.querySelector('body');

// Flip-page Command

function flipPage(e) {
    switch (e.key) {
        case 'ArrowLeft':
            prevPage();
        break

        case 'ArrowUp':
        break

        case 'ArrowDown':
            nextPage();
        break

        case 'ArrowRight':
            nextPage();
        break
    
        case ' ':
            randomlinks();
        break

        case 'Enter':
            randomlinks();
        break

        default:
            console.log('Key not recognised')
    }
}

body.addEventListener('keydown', flipPage)


// Next Page and Previous Page Functions

function prevPage() {
      console.log('Previous Page');
      window.history.back();

}

function nextPage() {
    console.log('Next Page');
    window.history.forward();
}

function randomPage() {
    console.log('Random Page');
}

// Add button click page flipping function

prevButton.addEventListener('click', prevPage);
nextButton.addEventListener('click', nextPage);


// Storing all existing chapter  in an array

    let links = [

    '/I-1.html', 
    '/I-2.html', 
    '/I-3.html', 
    '/I-4.html', 
    '/I-5.html', 
    '/I-6.html', 
    '/I-7.html', 
    '/I-8.html', 
    '/I-9.html', 
    '/I-10.html', 
    '/I-11.html', 
    '/II-13.html', 
    '/II-14.html', 
    '/II-15.html', 
    '/II-16.html', 
    '/II-17.html', 
    '/II-18.html', 
    '/II-19.html', 
    '/II-20.html', 
    '/II-21.html', 
    '/II-22.html', 
    '/III.html', 
    '/IV.html', 
    '/V-1.html', 
    '/V-2.html', 
    '/V-3.html', 
    '/V-4.html',
    '/V-5.html', 
    '/V-6.html', 
    '/V-7.html', 
    '/V-8.html', 
    '/V-9.html', 
    '/V-10.html', 
    '/V-11.html', 
    '/V-12.html', 
    '/V-13.html', 
    '/V-14.html', 
    '/V-15.html', 
    '/V-16.html', 
    '/V-17.html', 
    '/V-18.html', 
    '/V-19.html', 
    '/V-20.html', 
    '/V-21.html'
]


function randomlinks(){    

    let randLink = Math.floor(links.length*Math.random())

    // Trial of getting current directory

    var loc = window.location.pathname;
    var linkDir = loc.substring(0, loc.lastIndexOf('/'));

    let randPage = linkDir + links[randLink]

    console.log(links[randLink])
    console.log(linkDir + links[randLink])

    window.location.href = randPage;

}


// Alternative: Click top-sticky bar to navigate to random page:

const stickyBar = document.querySelector('.top-sticky')
console.log(stickyBar)
stickyBar.addEventListener('click', randomlinks)


// Trial swipe event: source - https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm
// Nothing here yet....