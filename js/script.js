document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// // /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// // function openNav() {
// //     document.getElementById("mySidebar").style.width = "250px";
// //     document.getElementById("main").style.marginLeft = "250px";
// //   }
  
// //   /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// //   function closeNav() {
// //     document.getElementById("mySidebar").style.width = "0";
// //     document.getElementById("main").style.marginLeft = "0";
// //   }

// //   $(document).ready(function () {
// //     $('.sidenav').sidenav();
// //     });

// $(document).ready(function () {
//   $('.parallax').parallax();
//   var stickyNavTop = $('body').offset().top;
//   var navHeight = $('.navbar').height();
//   $('.home-link').click(function (e) {
//       // e.preventDefault();
//       $('html,body').animate({
//           scrollTop: $('#home').offset().top
//       }, 300);
//   });
//   $('.about-link').click(function (e) {
//       // e.preventDefault();
//       $('html,body').animate({
//           scrollTop: ($('#about').offset().top - navHeight)
//       }, 300);
//   });
//   // $('.project-link').click(function (e) {
//   //     e.preventDefault(); 
//   //     $('html,body').animate({
//   //         scrollTop: ($('#project').offset().top - navHeight)
//   //     }, 300);
//   // });
//   $('.news-link').click(function (e) {
//       // e.preventDefault();
//       $('html,body').animate({
//           scrollTop: ($('#news').offset().top - navHeight)
//       }, 300);
//   });
//   $('.contact-link').click(function (e) {
//       $('html,body').animate({
//           scrollTop: ($('#contact').offset().top - navHeight)
//       }, 300);
//   });


  
