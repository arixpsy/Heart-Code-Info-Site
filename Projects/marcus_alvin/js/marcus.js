function callResponse() {

    var btnElement = document.getElementById("btnPrototype");
    btnElement.style.display = "none";

    setInterval(function () {
        $.ajax({
            url: `http://192.168.137.86:1880/test`,
            success: function (response) {

                //document.getElementById('data').innerHTML = JSON.stringify(response);
                console.log(response["payload"]);
                var element = document.getElementById("prototypeImg");
                var element2 = document.getElementById("washingImg");

                if (response["payload"] == 1) {
                    element.src = "img/shakewatchfilled1.png";
                    element.classList.add("shakeImg");
                    element2.src = "img/stop-washing.png";

                } else {
                    element.src = "img/shakewatch.png";
                    element.classList.remove("shakeImg");

                    element2.src = "img/washing-machine.gif";
                }
            }
        })
    }, 1000)
}