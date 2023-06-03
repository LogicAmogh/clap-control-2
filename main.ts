input.onSound(DetectedSound.Loud, function () {
    Flag = !(Flag)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Touch = !(Touch)
})
let Touch = false
let Flag = false
Flag = true
Touch = true
basic.forever(function () {
    if (Touch) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
basic.forever(function () {
    if (Flag) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
