// ; (function ($) {
//     $(function () {
//         // DOM ready
//         $('#nav-toggle').on('click', function () {
//             this.classList.toggle('active')
//         })
//     })
// })(jQuery)

(function ($) { // Begin jQuery
    $(function () { // DOM ready
        // Clicking away from dropdown will remove the dropdown class
        // $('html').on('click', function () {
        //     $('.nav-dropdown').hide();
        // });
        // Toggle open and close nav styles on click
        $('#nav-toggle').on('click', function () {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery;





// in Tabletop Shop Report I saw this message and changed the original
// code for this project due to deprication (see below).

// Cause: The .on() and .trigger() methods can set an event handler or
// generate an event for any event type, and should be used instead of
// the shortcut methods.This message also applies to the other event
// shorthands, including: blur, focus, focusin, focusout, resize,
// scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout,
// mouseenter, mouseleave, change, select, submit, keydown, keypress,
// keyup, and contextmenu.

// Solution: Instead of .click(fn) use .on("click", fn). Instead of
// .click() use.trigger("click").