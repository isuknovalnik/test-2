(function () {
  if (document.querySelector('#phone')) {
    $('#phone').mask('+7(999) 999-9999', {
        positionCaretOnClick: "radixFocus",
        radixPoint: ",",
        _radixDance: true,
        numericInput: true,
        placeholder: "-",
        definitions: {
            "0": {
                validator: "[0-9\uFF11-\uFF19]"
            }
        }
    });
  }
})();
