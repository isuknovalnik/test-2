(function () {

  var feedbackSubmit = document.querySelector('.feedback__button');
  var errorWrappers = document.querySelectorAll(".text-input");
  var errorInputs = document.querySelectorAll(".text-input__input");

  window.showError(errorWrappers, errorInputs,  feedbackSubmit);
  
})();
