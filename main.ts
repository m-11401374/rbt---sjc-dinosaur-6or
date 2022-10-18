basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        pins.analogWritePin(AnalogPin.P0, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P0, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        pins.servoWritePin(AnalogPin.P2, 100)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
