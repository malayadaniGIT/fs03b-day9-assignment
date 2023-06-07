        function changeBackgroundColor() {
            var colorSelect = document.getElementById("color-select");
            var textBox = document.getElementById("text-box");

            var selectedColor = colorSelect.value;

            // Remove all existing color classes
            textBox.classList.remove("color-red", "color-green", "color-blue", "color-yellow", "color-orange", "color-purple", "color-pink", "color-cyan", "color-magenta", "color-lime");

            // Add the appropriate class based on the selected value
            if (selectedColor === "red") {
                textBox.classList.add("color-red");
            } else if (selectedColor === "green") {
                textBox.classList.add("color-green");
            } else if (selectedColor === "blue") {
                textBox.classList.add("color-blue");
            } else if (selectedColor === "yellow") {
                textBox.classList.add("color-yellow");
            } else if (selectedColor === "orange") {
                textBox.classList.add("color-orange");
            } else if (selectedColor === "purple") {
                textBox.classList.add("color-purple");
            } else if (selectedColor === "pink") {
                textBox.classList.add("color-pink");
            } else if (selectedColor === "cyan") {
                textBox.classList.add("color-cyan");
            } else if (selectedColor === "magenta") {
                textBox.classList.add("color-magenta");
            } else if (selectedColor === "lime") {
                textBox.classList.add("color-lime");
            }
        }