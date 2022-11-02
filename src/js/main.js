$(document).ready(function () {
    // Валидация формы
        $("#registration-form").validate({
           errorElement: 'span',
           errorPlacement: function (error, element) {
              if (element.attr("type") == "checkbox") {
                 return element.next('label').append(error);
              }
              error.insertAfter($(element));
           },
           rules: {
              name: {
                 required: true,
                 lettersonly: true,
              },
              secondname: {
                 required: true,
                 lettersonly: true,
              },
              date: {
               required: true,
               date: true,
              },
              city: {
               required: true,
               lettersonly: true,
              },
              adress: {
               required: true,
              },
              document: {
               required: true,
              },
              text: {
               required: true,
              },
              phone: {
               required: true,
              },
              checkbox: {
               required: true,
              },
              checkbox1: {
               required: true,
              },
              checkbox2: {
               required: true,
              },
              sms: {
               required: true,
               // number: true,
              }


           },
           messages: {

            name: {
               required: "Введите своё имя",
               lettersonly: "Введите корректное имя",
            },
            secondname: {
               required: "Введите свою фамилию",
               lettersonly: "Введите корректную фамилию",
            },
            date: {
               required: "Введите свою фамилию",
               date: "zxczxc",
            },
            city: {
               required: "Введите вашу страну",
               lettersonly: "Введите корректное имя страны",
            },
            adress: {
               required: "Введите ваш адресс",
            },
            document: {
               required: "Введите номер документа",
            },
            text: {
               required: "Введите дополнительные данные",
            },
            checkbox: {
               required: 'Примити соглашение',
            },
            checkbox1: {
               required: 'Примити подтверждение',
            },
            checkbox2: {
               required: 'Примити подтверждение',
            },
            sms: {
               required: 'Введите код'
            }
            // text: {
            //    required: "asdasd",
            // },


         },
         submitHandler: function(form) { // <- pass 'form' argument in
            $(".registration-btn").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        }
        });
        jQuery.validator.addMethod(
            "lettersonly",
            function (value, element) {
              return this.optional(element) || /^[a-zA-ZА-Яа-я\s,ё]+$/i.test(value);
            },
            "Incorrect format"
          );

        jQuery.validator.addMethod(
            "telephone",
            function (value, element) {
              return (
                this.optional(element) ||
                /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/i.test(value)
              );
            },
            "Incorrect format"
          );



   let documentInput = document.getElementById('document');
   let phoneInput = document.getElementById('phone');
    // Маска для даты
    if(documentInput) {
      var element = document.getElementById('date');
      var maskOptions = {
         placeholder: '00-00-0000',
         mask: '00-00-0000'
      };
      var mask = IMask(element, maskOptions);
    }

    // Маска для телеофона
    if(phoneInput) {
      var phone = document.getElementById('phone');
      var maskOptions = {
         placeholder: '+{7}(000)000-00-00',
         mask: '+{7}(000)000-00-00'
      };
      var mask = IMask(phone, maskOptions);
    }

   let emptyInput = true;
   let emptyTextarea = true;
   let emptyCheckbox = true;

    $('form * input').keyup(() => {
      $('form * input').each(function() {
         if($(this).val() !== '') {
            return emptyInput = false;
         }
      });
    })

    $('form * textarea').keyup(() => {
     $('form * textarea').each(function() {
         if($(this).val() === '') {
            return emptyTextarea = true;
         } else {
            return emptyTextarea = false;
         }
      });
    })

    $('form * input[type="checkbox"]').change(() => {
      $('input[type="checkbox"]').each(function(index) {
         if($(this).val() === "true") {
            $(this).val(false)
            return emptyCheckbox = false;
         } else if($(this).val() === "false") {
            $(this).val(true)
            return emptyCheckbox = true;
         }
      });
    })

    $('#test').mouseenter(() => {
      console.log(emptyInput)
      if(emptyInput) {
         $('#overlay').css('z-index', 999999);
         setTimeout(() => {
            $('#register').attr('disabled', 'disabled');
         }, 0)
      } else {
         $('#overlay').css('z-index', -1);
         setTimeout(() => {
            $('#register').removeAttr('disabled');
         }, 0)
      }
    })

   //  $(document).on('keyup change', function(e) {
   //    let emptyInput = false;
   //    let emptyTextarea = false;
   //    let emptyCheckbox = false;


   //    $('form * input').each(function() {
   //       if($(this).val() === '') {
   //          emptyInput = true;
   //       }
   //    });

   //    $('form * textarea').each(function() {
   //       if($(this).val() === '') {
   //          emptyTextarea = true;
   //       }
   //    });

   //    $('input[type="checkbox"]').each(function(index) {
   //       if(e.target === $(this)[index]) {
   //    console.log('asdasd')

   //          if($(this).val() === "false") {
   //             emptyCheckbox = true;
   //             $(this).val(true)
   //          } else if($(this).val() === "true") {
   //             emptyCheckbox = false;
   //             $(this).val(false)
   //          }
   //       }
   //    });


   //    console.log(emptyInput)

   //    if(emptyInput) {
   //       console.log('zxc')
   //       setTimeout(() => {
   //          $('#register').attr('disabled', 'disabled');
   //       }, 0)
   //    } else {
   //       console.log('aaaa')
   //       setTimeout(() => {
   //          $('#register').removeAttr('disabled');
   //       }, 0)
   //    }
   //  });
});
