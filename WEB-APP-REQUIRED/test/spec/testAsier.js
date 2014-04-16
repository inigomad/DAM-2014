/* global describe, it */

(function() {
    'use strict';

    require.config({
        paths: {
            jquery: '../bower_components/jquery/jquery'
        },
        baseUrl: '../app/scripts',
        nodeRequire: require

    });

    describe('Test', function() {

        var mod;

        beforeEach(function(done) {
            require(['FizzBuzz'], function(module) {
                mod = module;
                done();
            });
        });
        describe('Devuelve "" para llamada sin argumentos', function() {
            it('tiene que devolver ""', function() {
                assert.equal('', mod.testnumber());
            });
        });
        describe('Devuelve "" para llamada con espacios', function() {
            it('tiene que devolver ""', function() {
                assert.equal('', mod.testnumber("                 "));
            });
        });
        describe('Devuelve "" para llamada con NaN', function() {
            it('tiene que devolver ""', function() {
                assert.equal('', mod.testnumber("Mira! Un lindo gatito"));
            });
        });
        describe('Devuelve "" para llamada con Undefined', function() {
            it('tiene que devolver ""', function() {
                var undf;
                assert.equal('', mod.testnumber(undf));
            });
        });
        describe('Devuelve "" para llamada con varios argumentos', function() {
            it('tiene que devolver 1', function() {
                var undf;
                assert.equal(1, mod.testnumber(1, 4, "patata"));
            });
        });
        describe('Devuelve "" para llamada con varios argumentos', function() {
            it('tiene que devolver ""', function() {
                var undf;
                assert.equal('', mod.testnumber("Gatete", 1, 4, "patata"));
            });
        });
        describe('Devuelve el numero que se le pasa', function() {
            it('tiene que devolver 1', function() {
                assert.equal(1, mod.testnumber(1));
            });
        });
        describe('Devuelve el numero que se le pasa', function() {
            it('tiene que devolver 2', function() {
                assert.equal(2, mod.testnumber(2));
            });
        });
        describe('Devuelve FIZZ en lugar del numero que se le pasa', function() {
            it('tiene que devolver Fizz', function() {
                assert.equal('FIZZ', mod.testnumber(3));
            });
        });
        describe('Devuelve el numero que se le pasa', function() {
            it('tiene que devolver 4', function() {
                assert.equal(4, mod.testnumber(4));
            });
        });
        describe('Devuelve BUZZ en lugar del numero que se le pasa', function() {
            it('tiene que devolver BUZZ', function() {
                assert.equal('BUZZ', mod.testnumber(5));
            });
        });
        describe('Devuelve FIZZ en lugar del numero que se le pasa', function() {
            it('tiene que devolver 6', function() {
                assert.equal('FIZZ', mod.testnumber(6));
            });
        });
        describe('Devuelve el numero que se le pasa', function() {
            it('tiene que devolver 7', function() {
                assert.equal(7, mod.testnumber(7));
            });
        });
        describe('Devuelve el numero que se le pasa', function() {
            it('tiene que devolver 8', function() {
                assert.equal(8, mod.testnumber(8));
            });
        });
        describe('Devuelve FIZZ en lugar del numero que se le pasa', function() {
            it('tiene que devolver FIZZ', function() {
                assert.equal('FIZZ', mod.testnumber(9));
            });
        });
        describe('Devuelve BUZZ en lugar del numero que se le pasa', function() {
            it('tiene que devolver BUZZ', function() {
                assert.equal('BUZZ', mod.testnumber(10));
            });
            describe('Devuelve el numero que se le pasa', function() {
                it('tiene que devolver 11', function() {
                    assert.equal(11, mod.testnumber(11));
                });

            });
            describe('Devuelve FIZZ en lugar del numero que se le pasa', function() {
                it('tiene que devolver FIZZ', function() {
                    assert.equal('FIZZ', mod.testnumber(12));
                });

            });
            describe('Devuelve el numero que se le pasa', function() {
                it('tiene que devolver 13', function() {
                    assert.equal(13, mod.testnumber(13));
                });

            });
            describe('Devuelve el numero que se le pasa', function() {
                it('tiene que devolver 14', function() {
                    assert.equal(14, mod.testnumber(14));
                });

            });
            describe('Devuelve FIZZ BUZZ en lugar del numero que se le pasa', function() {
                it('tiene que devolver FIZZ BUZZ', function() {
                    assert.equal('FIZZ BUZZ', mod.testnumber(15));
                });

            });
            describe('Devuelve el numero que se le pasa', function() {
                it('tiene que devolver 16', function() {
                    assert.equal(16, mod.testnumber(16));
                });

            });


        });
        describe('Devuelve el numero que se le pasa', function() {
            it('tiene que devolver 17', function() {
                assert.equal(17, mod.testnumber(17));
            });

        });


        ///////////////////////////////////////////////////////////////////////////////

        describe('Testea la listapara llamada sin argumentos', function() {
            it('tiene que devolver ""', function() {
                assert.equal("", mod.testlist());
            });
        });

        describe('Testea la listapara llamada con espacios', function() {
            it('tiene que devolver ""', function() {
                assert.equal("", mod.testlist("             "));
            });
        });

        describe('Testea la listapara llamada con NaN', function() {
            it('tiene que devolver ""', function() {
                assert.equal("", mod.testlist("Mira! Una monton de lindos gatitos"));
            });
        });


        describe('Testea la listapara llamada con Undefined', function() {
            it('tiene que devolver ""', function() {
                var undf;
                assert.equal("", mod.testlist(undf));
            });
        });

        describe('Testea la listapara llamada con varios argumentos', function() {
            it('tiene que devolver 1', function() {
                var undf;
                assert.equal(1, mod.testlist(1, "Patata", 6));
            });
        });

        describe('Testea la listapara llamada con varios argumentos', function() {
            it('tiene que devolver ""', function() {
                var undf;
                assert.equal("", mod.testlist("un cesto de Gatos", 1, "Patata", 6));
            });
        });

        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1", mod.testlist(1));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2", mod.testlist(2));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ", mod.testlist(3));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4", mod.testlist(4));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ", mod.testlist(5));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ", mod.testlist(6));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7", mod.testlist(7));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8", mod.testlist(8));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8,FIZZ", mod.testlist(9));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8,FIZZ,BUZZ", mod.testlist(10));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8,FIZZ,BUZZ,11", mod.testlist(11));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8,FIZZ,BUZZ,11,FIZZ", mod.testlist(12));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8,FIZZ,BUZZ,11,FIZZ,13", mod.testlist(13));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8,FIZZ,BUZZ,11,FIZZ,13,14", mod.testlist(14));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8,FIZZ,BUZZ,11,FIZZ,13,14,FIZZ BUZZ", mod.testlist(15));
            });
        });
        describe('Testea la lista de numero desde el numero dado', function() {
            it('tiene que devolver una lista', function() {
                assert.equal("1,2,FIZZ,4,BUZZ,FIZZ,7,8,FIZZ,BUZZ,11,FIZZ,13,14,FIZZ BUZZ,16", mod.testlist(16));
            });
        });






    });

})();