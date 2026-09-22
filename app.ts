let num1: number = 0;
let num2: number = 0;
function showMenu(): void {
    console.log("\n--- МЕНЮ ---");
    console.log("1. Ввести два числа");
    console.log("2. Выполнить сложение");
    console.log("3. Выполнить вычитание");
    console.log("4. Выполнить деление");
    console.log("5. Возвести число в степень");
    console.log("0. Выход");
    const choice = prompt("Выберите пункт меню (0-5):");

    if (choice === '0') {
        console.log("Программа успешно завершена.");
        return;
    }
    if (choice === '1') {
        inputNumbers();
        return;
    }

    alert("В текущей ветке Git эта функция еще не реализована!");
    showMenu();
}
showMenu();
function inputNumbers(): void {
    const val1 = prompt("Введите первое число:");
    const val2 = prompt("Введите второе число:");
    if (val1 && val2) {
        num1 = parseFloat(val1);
        num2 = parseFloat(val2);
        alert(`Числа успешно сохранены: первое = ${num1}, второе = ${num2}`);
    }
    showMenu();
}
