$(document).ready(function(){

    var db = openDatabase('tweetdb', '1.0', 'Mis tweets', 2 * 1024 * 1024);
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS users (user, nombre, imagen)', [], getUsers);
            tx.executeSql('CREATE TABLE IF NOT EXISTS tweets (id, user, date, text)', [], getTweets);
    });

    var muestraTweets = function(i){
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM tweets',[],
            function(tx, results) {
            var html = [];
            html.push('<li>' + results.rows.item(i).id + ' - ' + results.rows.item(i).user + ' - ' + results.rows.item(i).date + ' - ' + results.rows.item(i).text + '</li>');
            $(html.join('')).appendTo('#lista');
            });
        });
    };

   var muestraUsers = function(i){

        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM users',[],
            function(tx, results) {
            var html = [];
            html.push('<li>' + results.rows.item(i).user + ' - ' + results.rows.item(i).nombre + ' - ' + results.rows.item(i).imagen + '</li>');
            $(html.join('')).appendTo('#lista');
         });
     });

    };

    var getTweets = function() {
        var tweets = $.ajax({
            url : 'tweets.json', 
            data : {},
            dataType : 'json',
            type : 'POST',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                    $.each(data, function(index) {
                        db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                        var idt = data[index].id,
                            usert = data[index].user,
                            timet = new Date().getTime();
                            textt = data[index].text;
                        tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)',
                        [idt, usert, timet, textt],muestraTweets(index),function(tx,error){console.log(error.message);});
                    });
                });
            },
            error : function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
            }
        });

    };

    var getUsers = function() {
        var tweets = $.ajax({
            url : 'users.json', 
            data : {},
            dataType : 'json',
            type : 'POST',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                    $.each(data, function(index) {
                        var idu = data[index].user, 
                            nombreu = data[index].nombre, 
                            imagenu = data[index].imagen;
                        db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                        tx.executeSql('INSERT INTO users (user, nombre, imagen) VALUES (?, ?, ?)',
                        [idu, nombreu, imagenu],muestraUsers(index),function(tx,error){console.log(error.message);});
                    });
                });
            },
            error : function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
            }
        });

    };

});