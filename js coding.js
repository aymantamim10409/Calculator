var input = document.querySelector(".inc");
var buttons = document.querySelectorAll("input[type='button']");
window.addEventListener('offline',function (){
    alert("No internet conection")
})
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var value = this.value;

        if (value === "C") {
            input.value = "";
        }

        else if (value === "DEL") {
            input.value = input.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        }

        else if (value === "+/-") {
            input.value = -input.value;
        }

        else if (value === "%") {
            input.value = input.value / 100;
        }

        else {
            input.value += value;
        }
    });
}
