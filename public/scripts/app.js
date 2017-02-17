angular.module('credit',[])
  .controller('CreditController', CreditController)

function CreditController () {
  var vm = this;
  vm.cardNumber = "0000000000000000"
  vm.expiry = {month:"00", year:"00"}
  vm.cvn = "000"
}
