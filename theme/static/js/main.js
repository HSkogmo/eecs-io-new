
$document.on('click', '[data-action]', function(e) {

  switch(action) {
    case 'share-gplus':
      _openWindow(
        'https://plus.google.com/share?url=' + encodeURIComponent(location.href),
        600, 600);
      break;
    case 'share-facebook':
      _openWindow(
        'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href),
        436, 626);
      break;
    case 'share-twitter':
      _openWindow(
        'https://twitter.com/share?url=' + encodeURIComponent(location.href) + '&text=' + encodeURIComponent(document.title),
        440, 550);
      break;
  }
}