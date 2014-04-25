require.config({
    paths: {
        'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev',
        lungo: '../bower_components/lungo/lungo',
        quo: ['https://raw.githubusercontent.com/arkaitzgarro/EarthQuakeLungo/master/js/vendor/quo.debug',
              '../bower_components/quojs/quo'
            ],
        handlebars: '../bower_components/handlebars.js/dist/handlebars'
    },
    shim: {
        'ydn-db': {
            exports: 'ydn'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        quo : {
            exports: '$$'
        },
        lungo : {
            deps : [
                'quo'
            ],
            exports : 'Lungo'
        }
    }
});

require(['app'], function () {
    'use strict';
    // use app here

});
