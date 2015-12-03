/*jslint white: true */
/*jslint vars: true */
/*jslint sloppy: true */
/*jslint devel: true */
/*jslint plusplus: true */
/*jslint browser: true */
/*jslint todo: true */

/*jslint unparam: true*/ // allow unused parameters in function signatures

/*global $, jQuery*/



//3 Variablen für hideIt();
var isFirst = true;
var firstList = [],
    secondList = [];

//hideIt() versteckt alle Listenelemente, und bringt einige wieder hervor.
function hideIt() {
  //Alle verschwinden lassen
  $('.breadcrumb li').addClass("hidden");
  //das Erste wieder hervorzaubern...
  $('.breadcrumb li:first').removeClass("hidden");
  //...das Letzte...
  $('.breadcrumb li:last').removeClass("hidden");
  //...das Kurselement
  $('.breadcrumb li').has('a[href*="https://mdl-tst.htwchur.ch/course/view"]').removeClass("hidden");
  //...die "..."-Separatoren.
  $('.breadcrumb .listEllipsis').removeClass("hidden");
  //Die Liste in "vor dem Kurselement" und "nach dem Kurselement" aufteilen.

  $('.breadcrumb li').each(function(i, e) {
    if ($(e).has('a[href*="https://mdl-tst.htwchur.ch/course/view"]').length &&
      isFirst === true) {
      isFirst = false;
    } else if ($(e).hasClass("hidden") && isFirst === true) {
      firstList.push($(e));
    } else if ($(e).hasClass("hidden") &&
      isFirst === false) {

      secondList.push($(e));
    }
  });
}
//Den ersten Teil der Liste sichtbar machen.
function showFirst() {
  firstList.forEach(function(e) {
    e.toggleClass("hidden");
  });
  $('.breadcrumb .listEllipsis:first').toggleClass('hidden');
}
//Den zweiten Teil der Liste sichtbar machen.
function showSecond() {
  secondList.forEach(function(e) {
    e.toggleClass("hidden");
  });
  $('.breadcrumb .listEllipsis:last').toggleClass('hidden');
}
//
//seitenAufruf() Setzt die Punktseparatoren mit onClick ein.
//
function seitenAufruf() {
  //Es folgt das Einsetzen des ersten ">...>"-Dividers.
  jQuery('<li/>', {
      'id': 'foo',
      'class': 'listEllipsis',
      'title': 'foo',
      'text': '...'
    })
    .on("click", showFirst)
    //.appendTo('.breadcrumb li') //<----Working
    .insertAfter('.breadcrumb>li:first')
    .toggleClass("hidden");
  //Alles hierrunter setzt die ersten Divider ein
  jQuery('<span/>', {
      'title': 'T1',
      'class': 'divider',
      'id': 'T1',
      'text': '▶'
    })
    .appendTo('li#foo');

  jQuery('<span/>', {
      'title': 'T2',
      'id': 'T2',
      'class': 'accesshide'
    })
    .appendTo('li#T1');

  jQuery('<span/>', {
      'title': 'arrowText',
      'class': 'arrow_text'
    })
    .appendTo('li#T2');

  jQuery('<span/>', {
      'title': 'arrowText',
      'class': 'arrow_text'
    })
    .appendTo('li#T2');

  //Es folgt der zweite ">...>"-Divider

  jQuery('<li/>', {
      'id': 'foo2',
      'class': 'listEllipsis',
      'title': 'foo2',
      'text': '...'
    })
    .on("click", showSecond)
    .insertBefore('.breadcrumb>li:last')
    .toggleClass("hidden");

  //Es folgen Spans, die für den zweiten Divider wichtig zu sein scheinen
  jQuery('<span/>', {
      'title': 'T1_2',
      'class': 'divider',
      'id': 'T1_2',
      'text': '▶'
    })
    .appendTo('li#foo2');

  jQuery('<span/>', {
      'title': 'T2_2',
      'id': 'T2_2',
      'class': 'accesshide'
    })
    .appendTo('li#T1_2');

  jQuery('<span/>', {
      'title': 'arrowText_2',
      'class': 'arrow_text'
    })
    .appendTo('li#T2_2');

  jQuery('<span/>', {
      'title': 'arrowText_2',
      'class': 'arrow_text'
    })
    .appendTo('li#T2_2');
  hideIt();
}

//Aufruf von seitenAufruf wenn der body geladen ist.
//window.addEventListener('load', seitenAufruf);
console.log($('.breadcrumb li a[href*="https://mdl-tst.htwchur.ch/course/view"]').length);
if ($('.breadcrumb li a[href*="https://mdl-tst.htwchur.ch/course/view"]').length){
seitenAufruf();
}
