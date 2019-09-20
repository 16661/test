/* $(document).ready(function() {
  $(".carousel").carousel();
});
var instance = M.Carousel.getInstance(elem); */
var instance = M.TapTarget.getInstance(elem);
/* M.AutoInit(); */
/* $(document).ready(function() {
  $(".collapsible").collapsible();
}); */
$(document).ready(function() {
  $(".tap-target").tapTarget();
});

instance.next();
instance.next(3); // Move next n times.

M.toast({ html: "I am a toast!" });

var toastHTML =
  '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
M.toast({ html: toastHTML });
