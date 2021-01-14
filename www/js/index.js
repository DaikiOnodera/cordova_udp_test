document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log("Hello");
    var socket = dgram.createSocket("multicast-udp4", 3003);
    var writeval = "sample text";
    socket.send(writeval,
                "224.0.0.114",
                 3002,
                 ()=>console.log("write success."),
                 "utf-8");
}