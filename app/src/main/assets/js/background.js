// // add event handler realization
// var addEvent = (function () {
//   if (document.addEventListener) {
//     return function (el, type, fn) {
//       if (el && el.nodeName || el === window) {
//         el.addEventListener(type, fn, false);
//       } else if (el && el.length) {
//         for (var i = 0; i < el.length; i++) {
//           addEvent(el[i], type, fn);
//         }
//       }
//     };
//   } else {
//     return function (el, type, fn) {
//       if (el && el.nodeName || el === window) {
//         el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
//       } else if (el && el.length) {
//         for (var i = 0; i < el.length; i++) {
//           addEvent(el[i], type, fn);
//         }
//       }
//     };
//   }
// })();

// // variables
// var aLoops = []; // sound loops

// // initialization
// addEvent(window, 'load', function (event) {

//     // load music files
//     aLoops[0] = new Audio('Audio/background.ogg');
//     aLoops[0].volume = 0.3;
//     aLoops[0].addEventListener('ended', function() { // loop background sound
//         this.currentTime = 0;
//         this.play();
//     }, false);
//     aLoops[0].play();
// });

// // all the buttons
// var aBtns = document.querySelectorAll('.btn-xl');

// // onmouseover event handler

// // onclick event handler
const playButton = document.getElementById('playButton');
const audioElement = document.getElementById('audioElement');

playButton.addEventListener('click', () => {
  audioElement.play()
    .then(() => {
      // Audio berhasil diputar setelah tombol diklik
    })
    .catch((error) => {
      // Tangani kesalahan jika ada
      console.error('Terjadi kesalahan:', error);
    });
});