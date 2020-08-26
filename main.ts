input.onButtonPressed(Button.A, function () {
    temperature = randint(350, 390)
    if (open == 1) {
        if (temperature > 375) {
            basic.showString("" + (temperature))
            for (let index = 0; index < 1; index++) {
                music.playMelody("C5 C C5 C C5 C C5 C ", 120)
            }
            basic.showIcon(IconNames.No)
            basic.pause(2000)
            basic.clearScreen()
        } else if (persons < 5) {
            for (let index = 0; index < 1; index++) {
                persons += 1
                basic.showIcon(IconNames.Yes)
                music.playMelody("C5 - B - - - - - ", 120)
                basic.pause(1000)
                basic.clearScreen()
                basic.showArrow(ArrowNames.South)
                basic.pause(2000)
                pins.servoWritePin(AnalogPin.P1, 180)
                basic.pause(1000)
                pins.servoWritePin(AnalogPin.P1, 0)
                basic.pause(1000)
                pins.servoWritePin(AnalogPin.P1, 180)
                basic.pause(1000)
                pins.servoWritePin(AnalogPin.P1, 0)
                basic.showArrow(ArrowNames.East)
                basic.pause(2000)
            }
            basic.clearScreen()
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(1000)
        basic.showString("CLOSED")
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (open == 1) {
        open = 0
    } else {
        open = 1
        basic.clearScreen()
    }
})
let persons = 0
let open = 0
let temperature = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        if (open == 0) {
            basic.clearScreen()
            basic.showString("" + (persons))
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
