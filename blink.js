$(document).ready(() => {
    for (var i = 1; i < totalFrames + 1; i++) {
      $('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/Eye-${i}.svg');"></div>`);
    }
  });