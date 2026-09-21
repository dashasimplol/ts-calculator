let num1: number = 0;
let num2: number = 0;
function showMenu(): void {
    console.log("\n МЕНЮ ");
    console.log("1.Ввести два числа");
    console.log("2.Выполнить сложение");
    console.log("3.Выполнить вычитание");
    console.log("4.Выполнить деление");
    console.log("5.Возвести число в степень");
    console.log("0.Выход");
    const choice = prompt("Выберите пункт меню (0-5):");
    switch(choice) {
        case '1':
            inputNumbers();
            break;
        case '2':
            alert(`Результат сложения: ${num1 + num2}`);
            showMenu();
            break;
        case '3':
            alert(`Результат вычитания: ${num1 - num2}`);
            showMenu();
            break;
        case '4':
            alert(`Результат деления: ${num2 === 0 ? "На 0 делить нельзя!" : num1 / num2}`);
            showMenu();
            break;
        case '5':
            alert(`Результат возведения в степень: ${Math.pow(num1, num2)}`);
            showMenu();
            break;
        case '0':
            console.log("Программа завершена.");
            break;
        default:
            alert("Неверный ввод. Попробуйте снова.");
            showMenu();
    }
}
function inputNumbers(): void {
    const val1 = prompt("Введите первое число:");
    const val2 = prompt("Введите второе число:");
    
    if (val1 && val2) {
        num1 = parseFloat(val1);
        num2 = parseFloat(val2);
        alert(`Числа сохранены: num1 = ${num1}, num2 = ${num2}`);
    }
    showMenu();
}
showMenu();
