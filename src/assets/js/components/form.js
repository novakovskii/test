function CustomValidation() {}

CustomValidation.prototype = {

  invalidities: [],

  checkValidity: function (input) {
    let validity = input.validity
    if (validity.valueMissing) {
      this.addInvalidity('Это поле не может быть пустым')
    }
    if (validity.patternMismatch) {
      this.addInvalidity('Введите значение, соответствующее типу поля')
    }
  },

  addInvalidity: function (message) {
    this.invalidities.push(message)
  },

  getInvalidities: function () {
    return this.invalidities.join('. <br>')
  }

}

const form = document.querySelector('.footer__contact-form')
const submitButton = document.querySelector('.footer__contact-btn')
const inputs = document.querySelectorAll('.footer__contact-form .input')
const textAreas = document.querySelectorAll('.footer__contact-form .textarea')

if (submitButton) {
  submitButton.addEventListener('click', function (e) {

    let stopSubmit = false
    let errors = document.querySelectorAll('.input__error-message')
    
    if (errors) {
      errors.forEach(error => error.remove())
    }

    for (let i = 0; i < inputs.length; i++) {

      let input = inputs[i];
      if (input.classList.contains('textarea--error')) {
        input.classList.remove('textarea--error')
      }

      if (input.checkValidity() == false) {

        let inputCustomValidation = new CustomValidation()
        inputCustomValidation.invalidities = []

        inputCustomValidation.checkValidity(input)
        let customValidityMessage = inputCustomValidation.getInvalidities()

        input.setCustomValidity(customValidityMessage)
        if (customValidityMessage && customValidityMessage != '') {
          
          input.insertAdjacentHTML('afterend', '<p class="input__error-message">' + customValidityMessage + '</p>')
          stopSubmit = true
          if (!input.classList.contains('textarea--error')) {
            input.classList.add('textarea--error')
          }
        }
        
      } else {
        if (input.classList.contains('textarea--error')) {
          input.classList.remove('textarea--error')
        }
      }

    } 

    for (let i = 0; i < textAreas.length; i++) {

      let textArea = textAreas[i];
      if (textArea.classList.contains('textarea--error')) {
        textArea.classList.remove('textarea--error')
      }

      if (textArea.checkValidity() == false) {

        let inputCustomValidation = new CustomValidation()
        inputCustomValidation.invalidities = []

        inputCustomValidation.checkValidity(textArea)
        let customValidityMessage = inputCustomValidation.getInvalidities()

        textArea.setCustomValidity(customValidityMessage)
        if (customValidityMessage && customValidityMessage != '') {
          
          textArea.insertAdjacentHTML('afterend', '<p class="input__error-message">' + customValidityMessage + '</p>')
          stopSubmit = true
          if (!textArea.classList.contains('textarea--error')) {
            textArea.classList.add('textarea--error')
          }
        }
        
      } else {
        if (textArea.classList.contains('textarea--error')) {
          textArea.classList.remove('textarea--error')
        }
      }

    } 

    if (stopSubmit) {
      e.preventDefault()
    }
  })
}

form.addEventListener('submit', function (e) {

  e.preventDefault()

  //Отправка формы  

  //success

  const formModal = document.querySelector('.modal')

  if (formModal) {
    formModal.classList.toggle('modal--opened', true);
    setTimeout(() => {
      formModal.classList.toggle('modal--opened', false);
    }, 2000);
  }

  inputs.forEach(input => input.value = '')
  textAreas.forEach(textArea => textArea.value = '')

  //error
    
})

