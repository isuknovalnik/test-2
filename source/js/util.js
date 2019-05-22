(function () {
  var removeError = function (errorWrapper, errorInput) {
    errorInput.addEventListener('blur', function (event) {
      if (errorWrapper.classList.contains("error-input")) {
        errorWrapper.classList.remove("error-input");
        var inputLabel = errorWrapper.querySelector('.text-input__label');
        var oldErrorText = inputLabel.querySelector('.text-input__error-text');
        if (oldErrorText) {
          inputLabel.removeChild(oldErrorText);
        }
        var oldErrorLink = errorWrapper.querySelector('#first-error');
        if (oldErrorLink) {
          errorWrapper.removeChild(oldErrorLink);
        }
      }
    });
  };

  window.showError = function (errorWrappers, errorInputs, submitBtn) {
    submitBtn.addEventListener('click', function (event) {
      var noErrors = true;
      for (var i = 0; i < errorInputs.length; i++) {
        var inputLabel = errorWrappers[i].querySelector('.text-input__label');
        var oldErrorText = inputLabel.querySelector('.text-input__error-text');
        if (oldErrorText) {
          inputLabel.removeChild(oldErrorText);
        }
        var validity = errorInputs[i].validity;
        if (validity.valid) {
          errorWrappers[i].classList.remove("error-input");
        } else {
          errorWrappers[i].classList.add("error-input");
          var errorText = document.createElement('span');
          errorText.classList.add('text-input__error-text');
          if (validity.valueMissing) {
            errorText.textContent = ' - поле не заполнено';
          } else {
            errorText.textContent = ' - поле заполнено некорректно';
          }
          inputLabel.appendChild(errorText);
          if (noErrors) {
            var firstErrorPosition = errorWrappers[i].getBoundingClientRect().top + pageYOffset - 30;
            noErrors = false;
            event.preventDefault();
          }
        }
      }
      if (!noErrors) {
        $('body,html').animate({
          scrollTop: firstErrorPosition
        }, 800);
      }
    });

    for (var j = 0; j < errorInputs.length; j++) {
      removeError(errorWrappers[j], errorInputs[j]);
    }
  };

})();
