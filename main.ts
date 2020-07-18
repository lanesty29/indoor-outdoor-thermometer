radio.onReceivedNumber(function (receivedNumber) {
    outdooTemperature = receivedNumber
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(outdooTemperature)
})
let outdooTemperature = 0
radio.setGroup(23)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(5000)
})
