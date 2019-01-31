// The data that we want to save
var sliderValues = [0, 0, 0, 0],
    eyeFocus = 25,
    bgColor = 10;

// Coffee preference variables
var keysToCheck = 'asdfghjkl',
    keyIndex = 0,
    keysPressed = '';

// Retrieve your data from localStorage
var saveData = JSON.parse(localStorage.saveData || null) || {data : []};

$(document).ready(function() {
    // Show how much data we have saved
    updateDataAmount();

    // Guts input
    // When we open the page, reset the sliders
    $('.slider input').val(0);

    // When we change the sliders
    $('.slider input').change(function(e) {
        // Read the value of the changed slider
        var sliderValue = $(this).val();
        // Rotate the slider
        $(this).css({
            transform : 'rotate(' + sliderValue + 'deg)'
        });

        // Find which slider was changed
        var sliderIndex = $('.slider input').index(this);
        // Save the value to the sliderValues array
        sliderValues[sliderIndex] = parseInt(sliderValue);
    });

    // Eye input
    // When we click the alert button
    $('.alert-button').click(function(e) {
        // If focus is more than 0,
        if(eyeFocus > 0) {
            // decrease it by 1
            eyeFocus = eyeFocus - 1;
        }
        // Start increasing the blurriness
        settingAlertness = true;
        // Update the blurriness of the eye
        updateEye();
    });
    // When we click the save alert button
    $('.save-alert-button').click(function(e) {
        settingAlertness = false;
    });
    // Each 250 milliseconds ... 
    setInterval(function() {
        // Check if eyeFocus is less than maximum (25)
        // and if we should be increasing blurriness
        if(eyeFocus < 25 && settingAlertness) {
            // If so, increase the blurriness
            eyeFocus++;
        }
        updateEye();
    }, 250);// <-- 250 milliseconds

    // Coffee preference input
    // When we press a key
    $('body').keypress(function(e) {
        // Check if the key is one of the relevant ones
        if(keysToCheck.includes(e.key)) {
            // Save the index of the key 
            var newKeyIndex = keysToCheck.indexOf(e.key);
            // If this key is not what we pressed before
            if(keyIndex !== newKeyIndex) {
                // Check if the key is the next key in the row
                if(keyIndex + 1 === keysToCheck.indexOf(e.key)) {
                    // Update the keyIndex
                    keyIndex = newKeyIndex;
                    // Change the background color variable to the new key
                    bgColor = keyIndex * 10;
                }
                else {
                    // Reset the whole thing
                    keyIndex = 0;
                    bgColor = 10;
                }
            }
        }

        // Show the color of the background
        updateBackground();
    });

    // If we click the save data button
    $('.save-data-button').click(function(e) {
        // Save stuff
        saveOurData();
        // And show the amount
        updateDataAmount();
        // Output the data to the console
        console.log(saveData);
    });

    // If we click the clear data button
    $('.clear-data-button').click(function(e) {
        // If we click the clear data button
        clearOurData();
        // And show the amount
        updateDataAmount();
    });
});

// Update functions
function updateEye() {
    // Set the blurriness of the eye
    $('.eye').css({
        filter : 'blur(' + eyeFocus + 'px)'
    });
}

function updateBackground() {
    // Set the background color of the page
    $('body').css({
        background : 'hsl(25, 47%, ' + bgColor + '%)'
    });
}

function updateDataAmount() {
    $('.data-amount').text(saveData.data.length);
}

// Store your data.
function saveOurData() {
    // Create a temporary object
    var tempObject = {};
    // Add our local values to the object
    tempObject.sliderValues = sliderValues;
    tempObject.eyeFocus = eyeFocus;
    tempObject.bgColor = bgColor;
    // Add the time to our object in a readable format
    tempObject.time = new Date().toDateString();

    // Add the object to our data array
    saveData.data.push(tempObject);
    // Save it to the localStorage
    localStorage.saveData = JSON.stringify(saveData);
}

// Clear your data
function clearOurData() {
    saveData.data = [];
    localStorage.saveData = JSON.stringify(saveData);
}