
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;





// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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
               required: "Введите дату",
               date: "Введите корректную дату",
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
               required: 'Обязательное поле',
            },
            checkbox1: {
               required: 'Обязательное поле',
            },
            checkbox2: {
               required: 'Обязательное поле',
            },
            sms: {
               required: 'Введите код'
            }
         },
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
    // Маска для даты
    if(documentInput) {
      var element = document.getElementById('date');
      var maskOptions = {
         placeholder: '00-00-0000',
         mask: '00-00-0000'
      };
      var mask = IMask(element, maskOptions);
    }
  

// Disables button
   $('#registration-form input').bind('keyup blur click', function () { 
      if ($('#registration-form').validate().checkForm()) {                   
         $('#submit').removeClass('btn-disabled').prop('disabled', false); 
      } else {
         $('#submit').addClass('btn-disabled').prop('disabled', true);   
      }
 });

    
});




const mask = (selector) => {
    function setMask() {
        let matrix = '+###############';

        maskList.forEach(item => {
            let code = item.code.replace(/[\s#]/g, ''),
                phone = this.value.replace(/[\s#-)(]/g, '');

            if (phone.includes(code)) {
                matrix = item.code;
            }
        });

        let i = 0,
            val = this.value.replace(/\D/g, '');

        this.value = matrix.replace(/(?!\+)./g, function(a) {
            return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        if (!input.value) input.value = '+';
        input.addEventListener('input', setMask);
        input.addEventListener('focus', setMask);
        input.addEventListener('blur', setMask);
    });
};

mask(".mask-phone");
const maskList = [
    { "code": "+247 ####" },
    { "code": "+290 ####" },
    { "code": "+290 ####" },
    { "code": "+683 ####" },
    { "code": "+690 ####" },
    { "code": "+500 #####" },
    { "code": "+676 #####" },
    { "code": "+677 #####" },
    { "code": "+678 #####" },
    { "code": "+688 2####" },
    { "code": "+49 ### ###" },
    { "code": "+682 ## ###" },
    { "code": "+686 ## ###" },
    { "code": "+688 90####" },
    { "code": "+95 ### ###" },
    { "code": "+298 ### ###" },
    { "code": "+376 ### ###" },
    { "code": "+387 ## ####" },
    { "code": "+508 ## ####" },
    { "code": "+597 ### ###" },
    { "code": "+672 1## ###" },
    { "code": "+672 3## ###" },
    { "code": "+681 ## ####" },
    { "code": "+685 ## ####" },
    { "code": "+687 ## ####" },
    { "code": "+850 ### ###" },
    { "code": "+230 ### ####" },
    { "code": "+239 ## #####" },
    { "code": "+245 # ######" },
    { "code": "+246 ### ####" },
    { "code": "+263 # ######" },
    { "code": "+269 ## #####" },
    { "code": "+297 ### ####" },
    { "code": "+299 ## ## ##" },
    { "code": "+354 ### ####" },
    { "code": "+372 ### ####" },
    { "code": "+387 ## #####" },
    { "code": "+49 ### ## ##" },
    { "code": "+501 ### ####" },
    { "code": "+507 ### ####" },
    { "code": "+592 ### ####" },
    { "code": "+597 ### ####" },
    { "code": "+599 ### ####" },
    { "code": "+599 ### ####" },
    { "code": "+599 ### ####" },
    { "code": "+60 # ### ###" },
    { "code": "+62 ## ### ##" },
    { "code": "+65 #### ####" },
    { "code": "+670 ### ####" },
    { "code": "+673 ### ####" },
    { "code": "+674 ### ####" },
    { "code": "+677 ### ####" },
    { "code": "+678 ## #####" },
    { "code": "+679 ## #####" },
    { "code": "+680 ### ####" },
    { "code": "+689 ## ## ##" },
    { "code": "+691 ### ####" },
    { "code": "+692 ### ####" },
    { "code": "+95 # ### ###" },
    { "code": "+960 ### ####" },
    { "code": "+220 ### ## ##" },
    { "code": "+232 ## ######" },
    { "code": "+234 ## ### ##" },
    { "code": "+237 #### ####" },
    { "code": "+238 ### ## ##" },
    { "code": "+248 # ### ###" },
    { "code": "+252 # ### ###" },
    { "code": "+252 # ### ###" },
    { "code": "+265 1 ### ###" },
    { "code": "+291 # ### ###" },
    { "code": "+350 ### #####" },
    { "code": "+356 #### ####" },
    { "code": "+372 #### ####" },
    { "code": "+373 #### ####" },
    { "code": "+47 ### ## ###" },
    { "code": "+49 ### ## ###" },
    { "code": "+504 #### ####" },
    { "code": "+505 #### ####" },
    { "code": "+506 #### ####" },
    { "code": "+52 ## ## ####" },
    { "code": "+53 # ### ####" },
    { "code": "+599 9### ####" },
    { "code": "+60 ## ### ###" },
    { "code": "+62 ## ### ###" },
    { "code": "+64 ## ### ###" },
    { "code": "+66 ## ### ###" },
    { "code": "+670 77# #####" },
    { "code": "+670 78# #####" },
    { "code": "+850 #### ####" },
    { "code": "+852 #### ####" },
    { "code": "+853 #### ####" },
    { "code": "+886 #### ####" },
    { "code": "+95 ## ### ###" },
    { "code": "+961 # ### ###" },
    { "code": "+965 #### ####" },
    { "code": "+967 # ### ###" },
    { "code": "+973 #### ####" },
    { "code": "+974 #### ####" },
    { "code": "+975 # ### ###" },
    { "code": "+1 ### ### ####" },
    { "code": "+1 242 ### ####" },
    { "code": "+1 246 ### ####" },
    { "code": "+1 264 ### ####" },
    { "code": "+1 268 ### ####" },
    { "code": "+1 284 ### ####" },
    { "code": "+1 340 ### ####" },
    { "code": "+1 345 ### ####" },
    { "code": "+1 441 ### ####" },
    { "code": "+1 473 ### ####" },
    { "code": "+1 649 ### ####" },
    { "code": "+1 664 ### ####" },
    { "code": "+1 670 ### ####" },
    { "code": "+1 671 ### ####" },
    { "code": "+1 684 ### ####" },
    { "code": "+1 721 ### ####" },
    { "code": "+1 758 ### ####" },
    { "code": "+1 767 ### ####" },
    { "code": "+1 784 ### ####" },
    { "code": "+1 809 ### ####" },
    { "code": "+1 829 ### ####" },
    { "code": "+1 849 ### ####" },
    { "code": "+1 868 ### ####" },
    { "code": "+1 869 ### ####" },
    { "code": "+1 876 ### ####" },
    { "code": "+216 ## ### ###" },
    { "code": "+218 ## ### ###" },
    { "code": "+222 ## ## ####" },
    { "code": "+223 ## ## ####" },
    { "code": "+224 ## ### ###" },
    { "code": "+225 ## ### ###" },
    { "code": "+226 ## ## ####" },
    { "code": "+227 ## ## ####" },
    { "code": "+228 ## ### ###" },
    { "code": "+229 ## ## ####" },
    { "code": "+231 ## ### ###" },
    { "code": "+234 ## ### ###" },
    { "code": "+236 ## ## ####" },
    { "code": "+241 # ## ## ##" },
    { "code": "+252 ## ### ###" },
    { "code": "+254 ### ######" },
    { "code": "+257 ## ## ####" },
    { "code": "+258 ## ### ###" },
    { "code": "+262 ##### ####" },
    { "code": "+262 ##### ####" },
    { "code": "+266 # ### ####" },
    { "code": "+267 ## ### ###" },
    { "code": "+268 ## ## ####" },
    { "code": "+27 ## ### ####" },
    { "code": "+31 ## ### ####" },
    { "code": "+32 ### ### ###" },
    { "code": "+33 ### ### ###" },
    { "code": "+34 ### ### ###" },
    { "code": "+357 ## ### ###" },
    { "code": "+36 ### ### ###" },
    { "code": "+370 ### ## ###" },
    { "code": "+371 ## ### ###" },
    { "code": "+374 ## ### ###" },
    { "code": "+377 ## ### ###" },
    { "code": "+382 ## ### ###" },
    { "code": "+385 ## ### ###" },
    { "code": "+386 ## ### ###" },
    { "code": "+389 ## ### ###" },
    { "code": "+39 6 698 #####" },
    { "code": "+40 ## ### ####" },
    { "code": "+41 ## ### ####" },
    { "code": "+45 ## ## ## ##" },
    { "code": "+46 ## ### ####" },
    { "code": "+48 ### ### ###" },
    { "code": "+49 ### ## ####" },
    { "code": "+502 # ### ####" },
    { "code": "+503 ## ## ####" },
    { "code": "+509 ## ## ####" },
    { "code": "+51 ### ### ###" },
    { "code": "+56 # #### ####" },
    { "code": "+591 # ### ####" },
    { "code": "+593 # ### ####" },
    { "code": "+594 ##### ####" },
    { "code": "+60 ## ### ####" },
    { "code": "+60 ### ### ###" },
    { "code": "+61 # #### ####" },
    { "code": "+62 ## ### ####" },
    { "code": "+62 8## ### ###" },
    { "code": "+64 ### ### ###" },
    { "code": "+66 ## ### ####" },
    { "code": "+675 ### ## ###" },
    { "code": "+81 ### ### ###" },
    { "code": "+82 ## ### ####" },
    { "code": "+84 ## #### ###" },
    { "code": "+850 ## ### ###" },
    { "code": "+855 ## ### ###" },
    { "code": "+856 ## ### ###" },
    { "code": "+880 ## ### ###" },
    { "code": "+93 ## ### ####" },
    { "code": "+94 ## ### ####" },
    { "code": "+961 ## ### ###" },
    { "code": "+966 # ### ####" },
    { "code": "+967 ## ### ###" },
    { "code": "+968 ## ### ###" },
    { "code": "+971 # ### ####" },
    { "code": "+972 # ### ####" },
    { "code": "+975 17 ### ###" },
    { "code": "+976 ## ## ####" },
    { "code": "+977 ## ### ###" },
    { "code": "+993 # ### ####" },
    { "code": "+20 ### ### ####" },
    { "code": "+211 ## ### ####" },
    { "code": "+212 ## #### ###" },
    { "code": "+213 ## ### ####" },
    { "code": "+218 21 ### ####" },
    { "code": "+221 ## ### ####" },
    { "code": "+233 ### ### ###" },
    { "code": "+235 ## ## ## ##" },
    { "code": "+240 ## ### ####" },
    { "code": "+242 ## ### ####" },
    { "code": "+243 ### ### ###" },
    { "code": "+244 ### ### ###" },
    { "code": "+249 ## ### ####" },
    { "code": "+250 ### ### ###" },
    { "code": "+251 ## ### ####" },
    { "code": "+253 ## ## ## ##" },
    { "code": "+255 ## ### ####" },
    { "code": "+256 ### ### ###" },
    { "code": "+260 ## ### ####" },
    { "code": "+261 ## ## #####" },
    { "code": "+264 ## ### ####" },
    { "code": "+265 # #### ####" },
    { "code": "+30 ### ### ####" },
    { "code": "+351 ## ### ####" },
    { "code": "+352 ### ### ###" },
    { "code": "+353 ### ### ###" },
    { "code": "+355 ### ### ###" },
    { "code": "+359 ### ### ###" },
    { "code": "+377 ### ### ###" },
    { "code": "+378 #### ######" },
    { "code": "+381 ## ### ####" },
    { "code": "+39 ### #### ###" },
    { "code": "+420 ### ### ###" },
    { "code": "+421 ### ### ###" },
    { "code": "+43 ### ### ####" },
    { "code": "+44 ## #### ####" },
    { "code": "+49 ### ### ####" },
    { "code": "+52 ### ### ####" },
    { "code": "+54 ### ### ####" },
    { "code": "+55 ## #### ####" },
    { "code": "+55 ## 7### ####" },
    { "code": "+57 ### ### ####" },
    { "code": "+58 ### ### ####" },
    { "code": "+590 ### ### ###" },
    { "code": "+593 ## ### ####" },
    { "code": "+595 ### ### ###" },
    { "code": "+598 # ### ## ##" },
    { "code": "+62 8## ### ####" },
    { "code": "+63 ### ### ####" },
    { "code": "+64 ### ### ####" },
    { "code": "+7 ### ### ## ##" },
    { "code": "+7 6## ### ## ##" },
    { "code": "+7 7## ### ## ##" },
    { "code": "+81 ## #### ####" },
    { "code": "+84 ### #### ###" },
    { "code": "+86 ### #### ###" },
    { "code": "+886 # #### ####" },
    { "code": "+90 ### ### ####" },
    { "code": "+91 #### ### ###" },
    { "code": "+92 ### ### ####" },
    { "code": "+962 # #### ####" },
    { "code": "+963 ## #### ###" },
    { "code": "+966 5 #### ####" },
    { "code": "+967 ### ### ###" },
    { "code": "+970 ## ### ####" },
    { "code": "+971 5# ### ####" },
    { "code": "+972 5# ### ####" },
    { "code": "+98 ### ### ####" },
    { "code": "+992 ## ### ####" },
    { "code": "+995 ### ### ###" },
    { "code": "+996 ### ### ###" },
    { "code": "+998 ## ### ####" },
    { "code": "+234 ### ### ####" },
    { "code": "+234 ### ### ####" },
    { "code": "+375 ## ### ## ##" },
    { "code": "+380 ## ### ## ##" },
    { "code": "+423 ### ### ####" },
    { "code": "+49 #### ### ####" },
    { "code": "+55 ## 9#### ####" },
    { "code": "+596 ### ## ## ##" },
    { "code": "+850 ### #### ###" },
    { "code": "+850 191 ### ####" },
    { "code": "+856 20## ### ###" },
    { "code": "+86 ### #### ####" },
    { "code": "+964 ### ### ####" },
    { "code": "+994 ## ### ## ##" },
    { "code": "+358 ### ### ## ##" },
    { "code": "+62 8## ### ## ###" },
    { "code": "+86 ## ##### #####" },
    { "code": "+850 #### #############" }
];