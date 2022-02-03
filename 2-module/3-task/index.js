let calculator = {
  read: function(a, b) {
      this.firstValue = a;
      this.secondValue = b;
  },
  sum() {
      return this.firstValue + calculator.secondValue;
  },
  mul: function() {
      return this.firstValue * calculator.secondValue
  },
};



// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
