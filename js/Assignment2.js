
document.addEventListener('click', function() {
    var audioElement = document.querySelector('audio');
    audioElement.play();
});


let selected1=''
function selectedOption(str){
    if (str === "B"){
        document.getElementById("section1").style.display = "none";
        document.getElementById("section2").style.display = "block";
    }
    else{
        alert("Wrong Answer!")
    }
}
function hideMe() {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("section1").style.display = "block";
}

// function hideMeOne() {

//     if (selected1 === "B"){
//         document.getElementById("section1").style.display = "none";
//         document.getElementById("section2").style.display = "block";
//     }
//     else{
//         alert("Wrong Answer!")
//     }
// }

function hideMeTwo() {
    // Get all radio buttons with the name 'ramenChoice'
    var radios = document.getElementsByName('ramenChoice');

    // Variable to store the selected value
    var selectedValue = null;

    // Loop through all radio buttons to find the checked one
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break; // Stop the loop once the checked radio is found
        }
    }

    // Check if a selection was made
    if (selectedValue === null) {
        alert('Please select an option before proceeding!');
    } else {
        // Optional: Do something with the selected value
        console.log("Selected value: " + selectedValue); // Log it to the console or process it
        if (selectedValue==='1'){
            document.getElementById("section2").style.display = "none";
            document.getElementById("section3").style.display = "block";
        }
        else{
            alert("Wrong Answer!")
        }

    }
}


function hideMeThree() {
    // Get all radio buttons with the name 'ramenChoice'
    var radios = document.getElementsByName('barChoice');

    // Variable to store the selected value
    var selectedValue = null;

    // Loop through all radio buttons to find the checked one
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break; // Stop the loop once the checked radio is found
        }
    }

    // Check if a selection was made
    if (selectedValue === null) {
        alert('Please select an option before proceeding!');
    } else {
        // Optional: Do something with the selected value
        console.log("Selected value: " + selectedValue); // Log it to the console or process it
        if (selectedValue==='3'){
            document.getElementById("section3").style.display = "none";
            document.getElementById("section4").style.display = "block";
        }
        else{
            alert("Wrong Answer!")
        }

    }
}



function hideMeFour() {
    // Get all radio buttons with the name 'ramenChoice'
    var radios = document.getElementsByName('foodChoice');

    // Variable to store the selected value
    var selectedValue = null;

    // Loop through all radio buttons to find the checked one
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break; // Stop the loop once the checked radio is found
        }
    }

    // Check if a selection was made
    if (selectedValue === null) {
        alert('Please select an option before proceeding!');
    } else {
        // Optional: Do something with the selected value
        console.log("Selected value: " + selectedValue); // Log it to the console or process it
        if (selectedValue==='1'){
            document.getElementById("section4").style.display = "none";
            document.getElementById("section5").style.display = "block";
        }
        else{
            alert("Wrong Answer!")
        }

    }
}


function hideMeFive() {
    // Get all radio buttons with the name 'ramenChoice'
    var radios = document.getElementsByName('presentChoice');

    // Variable to store the selected value
    var selectedValue = null;

    // Loop through all radio buttons to find the checked one
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break; // Stop the loop once the checked radio is found
        }
    }

    // Check if a selection was made
    if (selectedValue === null) {
        alert('Please select an option before proceeding!');
    } else {
        // Optional: Do something with the selected value
        console.log("Selected value: " + selectedValue); // Log it to the console or process it
        if (selectedValue==='2'){
            document.getElementById("section5").style.display = "none";
            document.getElementById("section6").style.display = "block";
        }
        else{
            alert("Wrong Answer!")
        }

    }
}


function startStopwatch() {
    const startDate = new Date("December 22, 2022 00:00:00");

    const interval = setInterval(function() {
        const now = new Date();
        let elapsed = now - startDate; // Time elapsed in milliseconds

        // Calculate total elapsed years, months, days, hours, minutes, and seconds
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        // Adjust months and years if necessary
        if (months < 0) {
            years--;
            months += 12;
        }

        // Adjust days and months if necessary
        if (days < 0) {
            months--;
            let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Last day of the previous month
            days += previousMonth.getDate();
            if (months < 0) {
                years--;
                months += 12;
            }
        }

        // Hours, minutes, and seconds
        const hours = now.getHours() - startDate.getHours();
        const minutes = now.getMinutes() - startDate.getMinutes();
        const seconds = now.getSeconds() - startDate.getSeconds();

        // Display the result
        if (document.getElementById("timer")) {
            document.getElementById("timer").innerHTML =
                (years > 0 ? years + " year " : "") +
                (months > 0 ? months + " month " : "") +
                (days > 0 ? days + " d " : "") +
                (hours > 0 ? hours + " h " : "") +
                (minutes > 0 ? minutes + " ms " : "") +
                seconds + " s"+": We've been dating for this long! ❤️";
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

// Function to hide timer on scroll
window.onscroll = function() {
    document.getElementById("countdownTimer").style.display = "none";
};

// Initialize stopwatch on load
window.onload = startStopwatch;

