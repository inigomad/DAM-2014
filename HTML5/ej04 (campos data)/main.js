$('li.user').each(function(i) {
     /* iterate through array or object */
    console.log($('li.user')[i].dataset);
});

$('li.user').each(function(i) {
     /* iterate through array or object */
    if ($('li.user')[i].dataset.lang==='es') $('li.user')[i].dataset.lang='_ES';
});

$('li.user').each(function(i) {
     /* iterate through array or object */
    if ($('li.user').data('lang')==='_ES') $('li.user').data('lang','ESO');
    console.log($('li.user').data());
});

$('li.user').each(function(i) {
     /* iterate through array or object */
    if ($('li.user')[i].dataset.delete==="true") $('li.user')[i].remove();
});
