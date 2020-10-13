if (/(android)/i.test(navigator.userAgent)) {
  document.querySelectorAll('a[href]').forEach(function (link) {
    link.href = link.href.replace('http://play.google.com/store/apps/','market://');
    link.href = link.href.replace('https://play.google.com/store/apps/','market://');
  });
}
