require([
  'require',
  'lib/sinon',
  'lib/expect',
  'lib/sinon-expect',
  'lib/mocha'
], function(
  require
){
  mocha.setup('bdd');
  require(['problemSpec'], function(person){
    mocha.run();
  });
});
