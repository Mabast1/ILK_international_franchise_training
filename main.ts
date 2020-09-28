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
    if (input.buttonIsPressed(Button.A)) {
        loneliness += 1
    } else {
        if (input.buttonIsPressed(Button.B)) {
            loneliness += -1
        }
    }
    if (loneliness < 15) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        if (loneliness < 20) {
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
