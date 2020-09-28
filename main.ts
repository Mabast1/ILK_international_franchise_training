input.onButtonPressed(Button.A, function () {
    loneliness = 0
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
})
let loneliness = 0
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(1000)
    loneliness += 1
    if (loneliness < 15) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        if (loneliness < 40) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    }
})
