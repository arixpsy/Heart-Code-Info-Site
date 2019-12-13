$(document).ready(function () {
    function displayInfo(url) {
        $.get(url, function (data) {
            var distance = data.distance
            var is_sos = data.is_sos
            var distanceText = ["Signal Lost", "User is getting further from you", "User is within range"]

            document.getElementById('signalText').innerHTML = distanceText[distance]
            document.getElementById('signalImg').src = "img/icons/signal_" + String(distance) + ".png"

            if (distance == 0) {
                document.getElementById('sosText').innerHTML = distanceText[distance]
                document.getElementById('sosImg').src = "img/icons/signal_" + String(distance) + ".png"
            } else if (is_sos) {
                document.getElementById('sosText').innerHTML = "Impact detected. Please attend to user now!!"
                document.getElementById('sosImg').src = "img/icons/sos.png"
            } else {
                document.getElementById('sosText').innerHTML = "User is safe"
                document.getElementById('sosImg').src = "img/icons/safe.png"
            }

            return data
        });
    }

    // setInterval(function () {
    //     displayInfo("http://192.168.137.132:1880/parameter");
    // }, 500);
});

function offlineDistance(buttonValue) {
    var distance = buttonValue
    var distanceText = ["Signal Lost", "User is getting further from you", "User is within range"]

    document.getElementById('signalText').innerHTML = distanceText[distance]
    document.getElementById('signalImg').src = "img/icons/signal_" + String(distance) + ".png"

    if (distance == 0) {
        document.getElementById('sosText').innerHTML = distanceText[distance]
        document.getElementById('sosImg').src = "img/icons/signal_" + String(distance) + ".png"
    }

    return buttonValue
}

function offlineSOS(buttonValue){
    var is_sos = buttonValue

    if (is_sos) {
        document.getElementById('sosText').innerHTML = "Help required. Please attend to user now!!"
        document.getElementById('sosImg').src = "img/icons/sos.png"
    } else {
        document.getElementById('sosText').innerHTML = "User is safe"
        document.getElementById('sosImg').src = "img/icons/safe.png"
    }
    
    return buttonValue
}