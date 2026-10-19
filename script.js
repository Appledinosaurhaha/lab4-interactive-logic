// State tracking variable
let userState = {
    lastSelection: "",
    visitCount: 0
};

const decideBtn = document.getElementById("decideBtn");
const energySelect = document.getElementById("energySelect");
const outputCard = document.getElementById("outputCard");
const outputTitle = document.getElementById("outputTitle");
const outputText = document.getElementById("outputText");

decideBtn.addEventListener("click", function() {
    // Capture user input value
    let selectedValue = energySelect.value;
    
    // Increment state tracking visit count
    userState.visitCount++;
    userState.lastSelection = selectedValue;

    // Check if user actually made a selection
    if (selectedValue === "") {
        outputCard.classList.remove("hidden");
        outputTitle.textContent = "Input Required";
        outputText.textContent = "Please select an energy level from the dropdown first!";
        return;
    }

    // Make decisions using conditional logic (3 possible core outcomes)
    let heading = "";
    let message = "";

    if (selectedValue === "high") {
        heading = "High-Focus Mode (Outcome 1)";
        message = "Since you're feeling energized, tackle your hardest coding task or complex assignment right now. You've checked this planner " + userState.visitCount + " time(s) today.";
    } 
    else if (selectedValue === "medium") {
        heading = "Steady Workflow Mode (Outcome 2)";
        message = "Your energy is balanced. This is the sweet spot for organizing your files, replying to emails, or working on CSS styling. Session check count: " + userState.visitCount + ".";
    } 
    else if (selectedValue === "low") {
        heading = "Light Tasks & Recovery Mode (Outcome 3)";
        message = "Take it easy! Do some light reading, review existing notes, or take a quick 10-minute break before attempting major logic. Session check count: " + userState.visitCount + ".";
    }

    // Reveal output card and apply dynamic text changes
    outputCard.classList.remove("hidden");
    outputTitle.textContent = heading;
    outputText.textContent = message;
});