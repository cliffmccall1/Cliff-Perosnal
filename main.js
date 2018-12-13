$('.button').on('click', function() {
  var modal = $(this).data('modal');
  $(modal).show();
});

$('.modal').on('click', function(e) {
  var className = e.target.className;
  if (className === 'modal' || className === 'close') {
    $(this)
      .closest('.modal')
      .hide();
  }
});

// $(function() {
//   // Cache the Window object
//   var $window = $(window);

//   // Parallax Backgrounds
//   // Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

//   $('div[data-type="background"]').each(function() {
//     var $bgobj = $(this); // assigning the object

//     $(window).scroll(function() {
//       // Scroll the background at var speed
//       // the yPos is a negative value because we're scrolling it UP!
//       var yPos = -($window.scrollTop() / $bgobj.data('speed'));

//       // Put together our final background position
//       var coords = '50% ' + yPos + 'px';

//       // Move the background
//       $bgobj.css({ backgroundPosition: coords });
//     }); // end window scroll
//   });
// });
