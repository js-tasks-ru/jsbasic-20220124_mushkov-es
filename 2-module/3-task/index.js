let calculator = {
  read: function(a, b) {
      calculator.firstValue = a;
      calculator.secondValue = b;
  },
  sum() {
      return calculator.firstValue + calculator.secondValue;
  },
  mul: function() {
      return calculator.firstValue * calculator.secondValue
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
