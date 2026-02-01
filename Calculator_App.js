let matrix = [
    [1, 2, 3, '+'],
    [4, 5, 6, '-'],
    [7, 8, 9, '*'],
    ['C', 0, '.', '='],
    ['%', '/']
];

let firstValue, secondValue;
let choice;

function loadButtons() {
    let tab = document.getElementById("tbl");

    for (let i = 0; i < matrix.length; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < matrix[i].length; j++) {
            let td = document.createElement("td");
            let btn = document.createElement("input");

            btn.setAttribute("type", "button");
            btn.setAttribute("value", matrix[i][j]);
            btn.style.width = "50px";
            btn.style.margin = "20px";

            btn.addEventListener("click", function () {
                let textBox = document.getElementById("txt");
                let prevValue = textBox.value;

                if (this.value === "C") {
                    textBox.value = "";
                    firstValue = "";
                    secondValue = "";
                    choice = 0;
                    return;
                }

                if (['+', '-', '*', '/', '%'].includes(this.value)) {
                    firstValue = prevValue;
                    textBox.value = "";
                    prevValue = "";

                    switch (this.value) {
                        case '+': choice = 1; break;
                        case '*': choice = 2; break;
                        case '-': choice = 3; break;
                        case '/': choice = 4; break;
                        case '%': choice = 5; break;
                    }
                    return;
                }

                if (this.value === "=") {
                    secondValue = textBox.value;
                    textBox.value = "";

                    let result;

                    switch (choice) {
                        case 1:
                            result = parseFloat(firstValue) + parseFloat(secondValue);
                            break;
                        case 2:
                            result = parseFloat(firstValue) * parseFloat(secondValue);
                            break;
                        case 3:
                            result = parseFloat(firstValue) - parseFloat(secondValue);
                            break;
                        case 4:
                            result = parseFloat(firstValue) / parseFloat(secondValue);
                            break;
                        case 5:
                            result = (parseFloat(firstValue) * parseFloat(secondValue)) / 100;
                            break;
                    }

                    textBox.value = result;
                    return;
                }

                prevValue = prevValue + "" + this.value;
                textBox.value = prevValue;
            });

            td.appendChild(btn);
            row.appendChild(td);
        }

        tab.appendChild(row);
    }

    document.getElementById("grid").appendChild(tab);
}
