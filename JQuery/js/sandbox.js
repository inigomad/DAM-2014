$(document).ready(function(){
    'use strict';
    var $divs = $('div.module');
    console.log($divs[0]);
    var  $li = $('#myList li').eq(2);
    console.log($li[0]);
    $li = $('#myList').find('li').eq(2);
    console.log($li[0]);
    $li = $('#myList li:nth-child(3)');
    console.log($li[0]);
    $li = $('#myListItem');
    console.log($li[0]);


    var $ocultos = $(':hidden');
    console.log($ocultos.length);

    var $imgs = $('img[alt]');
    console.log($imgs.length);

//  var $filas = $('tbody tr:odd').css('background-color','gray');
//  console.log($filas.length);

    $imgs.each(function(idx, el){
        console.log(el.alt);
    });

    $imgs.each(function(){
        console.log(this.alt);
    });

    var $input = $('input');
    $input.closest('form').addClass('formulario');

    var $actual = $('#myList li.current').removeClass('current').next().addClass('current');

    var $submit = $('#specials select').closest('form').find('input[type=submit');

    var $slide = $('#slideshow li:first').addClass('current').siblings().addClass('disabled');

    var $elemento;

    var tiempo = new Date();

    for (var i = 1; i <= 6 ; i++) {
        
        $elemento = $('<li>Nuevo elemento ' + i + '</li>');
        $elemento.appendTo('#myList');

    }

    console.log(new Date() - tiempo);

    var tiempo2 = new Date();

    var myItems = [], $myList = $('#myList');
 
        for (var i=0; i<6; i++) {
            myItems.push('<li>Nuevo elemento ' + i + '</li>');
    }
 
    $myList.append(myItems.join('')); 

    console.log(new Date() - tiempo2);

    var $milista = $('#myList li:even').remove();

    $('div.module:last')
        .append('<h2>Lorem ipsum</h2>')
        .append('<p>Loren Ipsum</p>');

    $('select').append('<option value="wednesday">Wednesday</option>');

    var $div = $('div.module').last();

    var $nuevo = $('<div/>', {
        'class' : 'module',
        'id' : 'myModule'
    });

    $nuevo.append($imgs.first().clone()).insertAfter($div);

    var $input = $('input.input_text');
    var $label = $input.closest('form')
        .find('label[for="' + $input.attr('name') + '"]');
    
    $input.val($label.text());
    $label.hide();
    $input.addClass('hint');
    $input.on('keypress',function(){
            if ($input.val() === $label.text()) {
                $input.val("");
            }
    });

    $input.on('click',function(){
            if ($input.val() === $label.text()) {
            setTimeout(function(){
                $input[0].setSelectionRange(0,0);
            }, 0);
        }
            
    });

    $input.on('blur',function(){
            if($input.val() === "" || $input.val() === $label.text())
                {
                    $input.val($label.text());
                }
    });

    var $divmodule = $('div.module');
    var $nuevalista = $('<ul/>', {
        'id' : 'milista',
        'class' : 'tabs'
    });

    $divmodule.hide();

    var $lis = [];
    $divmodule.each(function() {
        var $div = $(this);
        var $li = $('<li/>', {
            'text' : $div.find('h2').first().text()
        });

        $li.data('contentDiv',$div);

        $lis.push($li[0]);

    });

    $nuevalista.append($lis).insertBefore($divmodule.first());

    $(document).on('click', '.tabs li', function(){
            $(this).addClass('current').siblings('.current').removeClass('current');
            $(this).data('contentDiv').show().siblings('.module').hide();
        }); 


    $(document).on('hover','#nav li',function(index, val) {
         
             $(this).find('ul').toggle();
         
        });

    });

