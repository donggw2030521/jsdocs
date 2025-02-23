/**
 * jQuery Form Validator
 * ------------------------------------------
 *
 * Polish language package
 *
 * @website http://formvalidator.net/
 * @license MIT
 * @version 2.2.82
 */
(function($, window) {

  "use strict";

  $(window).bind('validatorsLoaded', function() {

    $.formUtils.LANG = {
      errorTitle: 'Złożenie formularza nie powiodło się!',
      requiredfields: 'Nie wszystkie wymagane pola zostały wypełnione',
      badTime: 'Wprowadzono niepoprawny czas',
      badEmail: 'Wprowadzono niepoprawny adres e-mail',
      badTelephone: 'Wprowadzono niepoprawny numeru telefonu',
      badSecurityAnswer: 'Nieprawidłowa odpowiedź na pytanie bezpieczeństwa',
      badDate: 'Niepoprawna data',
      lengthBadStart: 'Wprowadzona wartość musi być pomiędzy',
      lengthBadEnd: 'znaków',
      lengthTooLongStart: 'Wprowadzona wartość jest większa niż',
      lengthTooShortStart: 'Wprowadzona wartość jest mniejsza niż',
      notConfirmed: 'Wprowadzone wartości nie zostały potwierdzone',
      badDomain: 'Nieprawidłowa wartość domeny',
      badUrl: 'Wprowadzono nieprawidłowy adres URL',
      badCustomVal: 'Wprowadzona wartość jest niepoprawna',
      andSpaces: 'i odstępy',
      badInt: 'Wprowadzono nieprawidłowy numer',
      badSecurityNumber: 'Wprowadzono niepoprawny numer ubezpieczenia społecznego',
      badUKVatAnswer: 'Wprowadzono niepoprawny brytyjski numer VAT',
      badStrength: 'Twoje hasło nie jest wystarczająco mocne',
      badNumberOfSelectedOptionsStart: 'Musisz wybrać przynajmniej',
      badNumberOfSelectedOptionsEnd: 'odpowiedzi',
      badAlphaNumeric: 'Wprowadzona wartość może zawierać tylko znaki alfanumeryczne',
      badAlphaNumericExtra: 'i',
      wrongFileSize: 'Wysyłany plik jest zbyt duży (max %s)',
      wrongFileType: 'Dozwolone są tylko pliki typu %s',
      groupCheckedRangeStart: 'Proszę wybrać pomiędzy',
      groupCheckedTooFewStart: 'Proszę wybrać przynajmniej',
      groupCheckedTooManyStart: 'Proszę wybrać maksymalnie',
      groupCheckedEnd: 'element(ów)',
      badCreditCard: 'Podany numer karty kredytowej jest nieprawidłowy',
      badCVV: 'Podany numer CVV jest nieprawidłowy',
      wrongFileDim: 'Nieprawidłowe wymiary obrazu,',
      imageTooTall: 'obraz nie może być wyższa niż',
      imageTooWide: 'obraz nie może być szerszy niż',
      imageTooSmall: 'obraz jest zbyt mały',
      min: 'min',
      max: 'max',
      imageRatioNotAccepted: 'Proporcje obrazu są niepoprawne',
      badBrazilTelephoneAnswer: 'Wprowadzono niepoprawny numer telefonu',
      badBrazilCEPAnswer: 'Wprowadzono niepoprawny CEP',
      badBrazilCPFAnswer: 'Wprowadzono niepoprawny CPF'
    };

  });

})(jQuery, window);
