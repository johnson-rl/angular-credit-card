angular.module('credit',[])
  .controller('CreditController', CreditController)

function CreditController () {
  var vm = this;
  vm.card={
    number: "",
    month: "",
    year: "",
    cvn: ""
  }

  vm.submit = function(){
    console.log('HAH!  Now I have your credit card number, you fool!!!')
  }
}
