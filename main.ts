radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("receivedNumber")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("sending string")
})
radio.setGroup(1)
