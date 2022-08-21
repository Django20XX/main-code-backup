namespace SpriteKind {
    export const StartScreen = SpriteKind.create()
    export const level = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f f 2 f e f . . . 
            . f f f 2 f e e 2 2 f f f . . . 
            . f e 2 f f e e 2 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 2 2 2 2 2 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 2 2 f f f f f . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f 2 f 2 e f . . . 
            . f f f 2 2 e e 2 2 f f f . . . 
            f f e f 2 f e e f 2 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 2 2 2 2 2 2 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e f 2 f f f 2 f 2 e f . . . 
            . f f f 2 2 e e f 2 f f f . . . 
            . f e e f 2 e e f f 2 e f . . . 
            . f e e e f e e e f f e f f . . 
            . f e e e e e e e e e e f f . . 
            . f f e e e e e e e e f . . . . 
            . f 4 f f f f f f f f e . . . . 
            . f d d e 2 2 2 2 2 f 4 . . . . 
            . f 4 e e f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `],
        500,
        false
        )
    }
})
function levels_Completed () {
    if (Level_1_Complete == 1) {
        _1 = sprites.create(img`
            . . . . . 7 . . . . . . . . . . 
            . f f f 7 f f f f f f f f f f . 
            . 7 1 7 1 1 1 1 1 1 1 1 1 1 f . 
            . f 7 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f f 1 1 1 1 1 1 f . 
            . f 1 1 1 f 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 f f f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    } else {
        _1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f f 1 1 1 1 1 1 f . 
            . f 1 1 1 f 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            . f 1 1 1 f f f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    }
    if (Level_2_Complete == 1) {
        _2 = sprites.create(img`
            . . . . . 7 . . . . . . . . . . 
            . f f f 7 f f f f f f f f f f . 
            . 7 1 7 1 1 1 1 1 1 1 1 1 1 f . 
            . f 7 1 1 1 f f f f 1 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 f f f 1 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f f f f f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    } else {
        _2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f f f f 1 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 f f f 1 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f f f f f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    }
    if (Level_3_Complete == 1) {
        _3 = sprites.create(img`
            . . . . . 7 . . . . . . . . . . 
            . f f f 7 f f f f f f f f f f . 
            . 7 1 7 1 1 1 1 1 1 1 1 1 1 f . 
            . f 7 1 1 1 f f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 f f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 f f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    } else {
        _3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 f f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 f f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    }
    if (Level_4_Complete == 1) {
        _4 = sprites.create(img`
            . . . . . 7 . . . . . . . . . . 
            . f f f 7 f f f f f f f f f f . 
            . 7 1 7 1 1 1 1 1 1 1 1 1 1 f . 
            . f 7 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 f f f f f f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    } else {
        _4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 f f f f f f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    }
    if (Level_5_Complete == 1) {
        _5 = sprites.create(img`
            . . . . . 7 . . . . . . . . . . 
            . f f f 7 f f f f f f f f f f . 
            . 7 1 7 1 1 1 1 1 1 1 1 1 1 f . 
            . f 7 1 1 1 1 f f f f 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    } else {
        _5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f f f f 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 f 1 1 1 f 1 1 1 f . 
            . f 1 1 1 1 1 f f f 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.level)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.B.isPressed() && Cherries.overlapsWith(mySprite)) {
        Cherries.destroy()
        info.changeLifeBy(2)
    }
    if (controller.B.isPressed() && Apple.overlapsWith(mySprite)) {
        Apple.destroy()
        info.changeScoreBy(10)
        Score += 10
    }
})
function Level_1 () {
    scene.setBackgroundImage(img`
        1111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        11d1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        d119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111d111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999111199999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111d1111d111d11999999999999999999999999999991111111999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111d11111111d11111d11111999999999999999999999999999111111111119999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111d11111111111d1111111dd1111199999999999999999999999991111111111111199999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111111111111111111111111d1199999999999999999999999911111111111111119999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111d1111d1111111d111111111999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999991111111111111d111111199999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999911111111d1111111119999999999999999999999999999991111111111111111111199999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999111d1111111ddd1199999999999999999999999999999991111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999999119999999999999999999111111999999999999999999999999999999911111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999
        9999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999
        9999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999111111111111111111111111119999999999999999999999999999999999999
        99999999999999999999999999999999dd1111111111119999999999999999999999999999999999999999999999999991dddd11111111111111111111d9911111911199999999999999999999999999
        999999999999999999999999999999ddddddddd11ddddd99999999999999999999999999999999999999999999999999ddddddddd1111111111111dd1ddd1111d1111119999999999999999999999999
        9999999999999999999999999999ddddddddddddddddddd999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddd11111111111999999999999999999999999
        999999999999999999999999999ddddddddddddddddddddd99999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddd1111111d11199999999999999999999999
        99999999999999999999999999ddddddddddddddddddddddd999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddd1d11111111119999999999999999999999
        9999999999999999999999999ddddddddddddddddddddddddd9999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddd111d111dd119999999999999999999999
        999999999999999999999999ddddddddddddddddddddddddddd99999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd111111d1119999999999999999999999
        999999999999999999999dddddddddddddddddddddddddddddddd999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd11111111199999999999999999999999
        99999999999999999999dddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddd1111199999999999999999999999999
        9999999999999999999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddd119999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        9999999999999999ddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999
        999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999
        99999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999
        999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        99999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        9999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999
        999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        99999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        99999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999
        9999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888889988dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        99dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999
        ddddddddddddddddddddddddddddddd777777777ddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999
        ddddddddddddddddddddddddddd777777777777777ddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999
        ddddddddddddddddddddddddd777777777777777777ddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999
        ddddddddddddddddddddd777777777777777777777777ddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99
        dddddddddddddddddd7777777777777777777777777777777ddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9
        dddddddddddddd777777777777777777777777777777777777777dddddddddddddd88888888888ddddddddddddddddd77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddd77777777777777777777777777777777777777777dddddddddddddeeeeeeeeeeeddddddddddddddd7777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddd777777777777777777777777777777777777777777777dddddddddeeeeeeeeeeeee7dddddddddd777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddd777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeee7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddd
        dddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddd
        ddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        ddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddd
        dddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddd
        ddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddd
        dd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd
        d7777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddd
        7777777777777777777777777777777777777dddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddd
        7777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddd
        777777777777777777777777777777777777ddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddd
        777777777777777777777777777777777777ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddd
        777777777777777777777777777777777777d7dd7dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd
        777777777777777777777777777777777777dddd7dd7d7d77777777777777777777777777777777777777777dddd77777777777777777777777777777777777777777777777777777777777777dddddd
        777777777777777777777777777777777777ddddddddddd7777777777777777777777777777777777777dddddddddd77777777777777777777777777777777777777777777777777777777777777dddd
        7777777777777777777777777777777777777dddddddddd777777777777777777777777777777777777ddddddd7ddd7777777777777777777777777777777777777777777777777777777777777777dd
        77777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777ddd7dddddddd7777777777777777777777777777777777777777777777777777777777777777d
        777777777777777777777777777777777777777ddd7777777777777777777777777777777777777777ddddddddd77dd77777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dd7ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd7ddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddd7ddddddd7d777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777
        777777777dddd77777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        7777777ddddddd7777777777777777777777777777777777777777777777777777777777777777777ddddd7dddddd7777777777777777777777777777777777777777777777777777777777777777777
        7777ddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777ddd777777777777777
        777dddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777dddddd77777777777777
        777ddd7dd7dddddddd77777777777777777777777777ddd77777777777777777777777777777777777777777777777777777777777dd7777777777777777777777777777777dddd7dd77777777777777
        777dddddd7d7dd7ddd777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777777dddd777777777777777777777777777777dddddddd7777777777777
        777dddddddddddddddd7777777777777777777777dd7ddddddd7777777777777777777777777777777777777777777777777777ddddddd7777777777777777777777777777dddd7dddd7777777777777
        7777ddddd7dd7d7dd7dd77777777777777777777ddd7dd7dddd77777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777ddd7ddd7dd7777777777777
        777777dddddddddddddd77777777777777777777ddd7dddd7ddd7777777777777777777777777777777777777777777777777ddddddddd777777777777777777777777777dddddddddd7777777777777
        77777777dddddddddd7777777777777777777777dddddddd7ddd7777777777777777777777777777777777777777777777777d7dd77dd7777777777777777777777777777dd7d7ddddd7777777777777
        7777777777777ddd777777777777777777777777ddddddd77ddd777777777777777777777777777777777777777777777777ddddddddd7777777777777777777777777777ddddddddd77777777777777
        7777777777777777777777777777777777777777dd7dd7d77dddd77777777777777777777777777777777777777777777777ddddddddd77777777777777777777777777777ddddd77777777777777777
        7777777777777777777777777777777777777777dddddddddddd777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777ddddddddddd77777777777777777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777dddd7dddd7777777777777777777777777777777777777777777777777777ddddd77777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777ddd777777777777777777777777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    Jester = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Player)
    mySprite.x += -25
    Jester.setStayInScreen(true)
    Ghost.setBounceOnWall(true)
    Ghost_Amount = 1
    Score = 0
    Ghost_Speed = 5
    info.setLifeImage(img`
. c 2 2 . 2 . .
c 2 2 2 2 2 4 2
c 2 2 2 2 4 2 2 
c 2 2 2 2 2 2 2
. c 2 2 2 2 2 .
. . c 2 2 2 . .
. . . c 2 . . . 
`)
info.setScore(0)
    info.setLife(3)
    statusbar = statusbars.create(50, 4, StatusBarKind.Health)
    statusbar.setLabel("HP")
    statusbar.value = 100
    statusbar.setColor(7, 2)
    statusbar.positionDirection(CollisionDirection.Top)
    game.splash("Level 1")
    controller.moveSprite(mySprite)
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost_Amount = 1
    Ghost.setPosition(randint(0, 160), randint(0, 120))
    Ghost.follow(Jester, 5)
    if (true) {
        for (let index = 0; index < 120; index++) {
            pause(500)
            if (Score == 10) {
                Ghost_Amount = 1
                Ghost.destroy()
                Level_1_Complete = 1
                game.splash("Level 1 Complete")
                pause(1000)
                Start2()
                break;
            }
        }
    } else {
        game.splash("Level failed")
        pause(1000)
    }
}
function GhostAmount () {
    if (Ghost_Amount == 0) {
        if (Level_1_Complete == 0) {
            pause(500)
            Ghost = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            Ghost.setPosition(randint(0, 160), randint(0, 120))
            mySprite.setBounceOnWall(true)
            Ghost.follow(Jester, Ghost_Speed)
            Ghost_Amount = 1
        } else if (Level_2_Complete == 0) {
            if (true) {
                pause(500)
                Ghost = sprites.create(img`
                    ........................
                    ........................
                    ........................
                    ........................
                    ..........ffff..........
                    ........ff1111ff........
                    .......fb111111bf.......
                    .......f11111111f.......
                    ......fd11111111df......
                    ......fd11111111df......
                    ......fddd1111dddf......
                    ......fbdbfddfbdbf......
                    ......fcdcf11fcdcf......
                    .......fb111111bf.......
                    ......fffcdb1bdffff.....
                    ....fc111cbfbfc111cf....
                    ....f1b1b1ffff1b1b1f....
                    ....fbfbffffffbfbfbf....
                    .........ffffff.........
                    ...........fff..........
                    ........................
                    ........................
                    ........................
                    ........................
                    `, SpriteKind.Enemy)
                Ghost.setPosition(randint(0, 160), randint(0, 120))
                mySprite.setBounceOnWall(true)
                Ghost.follow(Jester, Ghost_Speed)
                Ghost_Amount = 1
            }
        } else if (Level_3_Complete == 0) {
            pause(500)
            Ghost = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            Ghost.setPosition(randint(0, 160), randint(0, 120))
            mySprite.setBounceOnWall(true)
            Ghost.follow(Jester, Ghost_Speed)
            Ghost_Amount = 1
        } else if (Level_4_Complete == 0) {
            pause(500)
            if (true) {
                Ghost = sprites.create(img`
                    ........................
                    ........................
                    ........................
                    ........................
                    ..........ffff..........
                    ........ff1111ff........
                    .......fb111111bf.......
                    .......f11111111f.......
                    ......fd11111111df......
                    ......fd11111111df......
                    ......fddd1111dddf......
                    ......fbdbfddfbdbf......
                    ......fcdcf11fcdcf......
                    .......fb111111bf.......
                    ......fffcdb1bdffff.....
                    ....fc111cbfbfc111cf....
                    ....f1b1b1ffff1b1b1f....
                    ....fbfbffffffbfbfbf....
                    .........ffffff.........
                    ...........fff..........
                    ........................
                    ........................
                    ........................
                    ........................
                    `, SpriteKind.Enemy)
                Ghost.setPosition(randint(0, 160), randint(0, 120))
                mySprite.setBounceOnWall(true)
                Ghost.follow(Jester, Ghost_Speed)
                Ghost_Amount = 1
            }
        } else if (Level_5_Complete == 0) {
            pause(500)
            Ghost = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            Ghost.setPosition(randint(0, 160), randint(0, 120))
            mySprite.setBounceOnWall(true)
            Ghost.follow(Jester, Ghost_Speed)
            Ghost_Amount = 1
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........................
        .....ffff...............
        ...fff22fff.............
        ..fff2222fff............
        .fffeeeeeefff...........
        .ffe222222eef...........
        .fe2ffffff2ef...........
        .ffffeeeeffff...........
        ffefbf44fbfeff..........
        fee41fddf14eef..........
        .ffffdddddeef...........
        fddddf444eef............
        fbbbbf2222f4e...........
        fbbbbf2222fd4...........
        .fccf45544f44...........
        ..ffffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        fdfeeddddd4eff..........
        fbffee444edd4e..........
        fbf4f2222edde...........
        fcf.f22cccee............
        .ff.f44cdc4f............
        ....fffddcff............
        .....fddcff.............
        ....cddc................
        ....cdc.................
        ....cc..................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        .......ff...............
        .....ff22ff.............
        ...fff2222fff...........
        ..fff222222fff..........
        ..fff222222fff..........
        ..feeeeeeeeeeff.........
        .ffe22222222eff.........
        .fffffeeeefffff.........
        fdfefbf44fbfeff.........
        fbfe41fddf14ef..........
        fbffe4dddd4efe..........
        fcfef22222f4e...........
        .ff4f44554f4e...........
        ....ffffffdde...........
        .....ffffedde...........
        ..........ee............
        .........ccc............
        ........cc1cc...........
        .........c1c............
        .........c1c............
        .........c1c............
        .........c1c............
        `,img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff......ccc.
        .ffefbf44fbfeff....cddc.
        .ffefbf44fbfeff...cddc..
        .fee4dddddd4eef.ccddc...
        fdfeeddddd4eeffecddc....
        fbffee4444ee4fddccc.....
        fbf4f222222f1edde.......
        fcf.f222222f44ee........
        .ff.f445544f............
        ....ffffffff............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .....ffff...............
        ...fff22fff.............
        ..fff2222fff............
        .fffeeeeeefff...........
        .ffe222222eef...........
        .fe2ffffff2ef...........
        .ffffeeeeffff...........
        ffefbf44fbfeff..........
        fee41fddf14eef..........
        .feeddddddeef...........
        ..fee4444eef............
        .e4f222222f4e...........
        .4df222222fd4...........
        .44f445544f44...........
        ....ffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    false
    )
    if (controller.A.isPressed() && Mouse.overlapsWith(Start)) {
        Start2()
    }
    if (controller.A.isPressed() && Mouse.overlapsWith(Tutorial)) {
        Tutorial2()
    }
    if (controller.A.isPressed() && controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            ..........ff222eeeeeeff.
            ..........feeeefffeeeef.
            .........fe2222eeefffff.
            .........f2efffff222efff
            ..cc.....fffeeefffffffff
            ..cdcc...fee44fbbe44efef
            ..ccddcc..feddfbb4d4eef.
            ....cdddceefddddd4eeef..
            .....ccdcddee2222222f...
            ......cccdd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............ccc22eddf..
            .............cdc22fee...
            ............cddc4444f...
            ...........cddcfffff....
            ..........cddc..fff.....
            ..........cdc...........
            ..........cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eeff..
            .............f222edd4...
            .............f222edde...
            .............f554feef...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
    }
    if (controller.A.isPressed() && controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..ffee444ef.............
            ...4dde222f.............
            ...edde222f.............
            ...feef455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
    }
    if (Back_Arrow.overlapsWith(Mouse) && controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.level)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
            9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
            999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
            9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
            99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
            99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
            99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
            99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
            999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
            9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
            9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
            999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
            99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
            99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
            99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
            999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
            999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
            999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
            99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
            99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
            9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
            999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
            9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
            999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
            999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
            999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
            99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
            999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
            99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
            999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
            99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
            99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99cc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993999999999999999993399999999999
            9999999999999999999999939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993339333399999999999999993393999ccc9c9
            99999c99999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99cc
            9999cc93399999999993333333999999999999999999999999999999993399999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b3399ccc99c
            99c9933333cc9999999333333399999999999999999999999999999993333399999999999999999999999999999999999999999999999999799999999993335553339999999999993333553339cc9999
            9cc93333333399999993335333339999999999999999cc99999ccc99933333399cc999999999999999999999999999999999cc999999999cc99999999993335533339999999999999335553339ccc999
            cc9c93353333cc999993355533399999cc9999999999cc99999999933355333999999999cc9cc999999cc99999999c999999cc9999c9999ccc99999999999333333999999c9999993333533c99ccccc9
            c99cc3555339cc99c93333533333c999cc99cc9999999999999999933353333999999999c999c99999999999c9999c999999999999c9999c9999999cccc93333333cc999ccc99999333333ccccccccc9
            9cc9333333399cc99933333333399999999cc999999c999999cc999333333399999999c9999999999cc99999cc99999c999c9cc9999cc99999ccc99cccc97333739cc9999cc999999333333cccccc999
            9ccc33333339cc99999933333399999cc99999999c999999999999933333339c9cc999c99c9999999cc9999999c999cc99999999999cc9999999c999cc9977777799c9999cc999cc999979399cc9cc99
            ccccc977339ccc99997797777c99999cc99999999c999999979999993933339999c999999c99c999999999cc9cc999c999cc99999979999999999999999977777999cc9999c999cc999777799cc9cc99
            cc997777799c9799977797777999999997779c9977999777779977c797737777799999c9999cc9999997799c977997c999779c79997979cc977cc7779c9997779997cc9999c99999779777799cc9cc99
            c779777779777777979777777797c779777797c9777977777777777797777777779977c9977999779c97777977797777997797799979797c977c77977c7797797777c77c77999c77777777cc99cccc99
            9777977779777777777777797797c77977777777777777777777777777777777777c77c7777777777777777777777777777777777777777777777777777777777777777777779977977779979c7797c9
            97799777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cc7797c9
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        mySprite = sprites.create(img`
            9 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.StartScreen)
        mySprite.setStayInScreen(false)
        mySprite.setPosition(-10, -10)
        Start = sprites.create(img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            .fffffffffffffffffffffffff........................
            .f11111111111111111111111f........................
            .f11111111111111111111111f........................
            .f111ff1fff11f111f11fff11f........................
            .f11f1111f11f1f1f1f11f111f........................
            .f11f1111f11f1f1f1f11f111f........................
            .f111ff11f11fff1ff111f111f........................
            .f1111f11f11f1f1f1f11f111f........................
            .f11ff111f11f1f1f1f11f111f........................
            .f11111111111111111111111f........................
            .f11111111111111111111111f........................
            .fffffffffffffffffffffffff........................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `, SpriteKind.StartScreen)
        Start.changeScale(1, ScaleAnchor.Middle)
        Start.x += 23
        Start.y += -10
        Tutorial = sprites.create(img`
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
            .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
            .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
            .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
            .ff11fffff11ff11ff11fffff1111fffff11111fffff1111fffff11111f11111f1111111ff.
            .ff11fffff11ff11ff11fffff111ff111ff111ff111ff111fffff1111fff1111f1111111ff.
            .ff1111f1111ff11ff1111f1111ff11111ff11f11111f11111f11111ff1ff111f1111111ff.
            .ff1111f1111ff11ff1111f1111f1111111f11f11111f11111f11111f111f111f1111111ff.
            .ff1111f1111ff11ff1111f1111f1111111f11f111fff11111f11111f111f111f1111111ff.
            .ff1111f1111ff11ff1111f1111f1111111f11fffff1111111f11111fffff111f1111111ff.
            .ff1111f1111ff11ff1111f1111ff11111ff11f111ff111111f11111f111f111f1111111ff.
            .ff1111f1111ffffff1111f11111ff111ff111f1111ff11111f11111f111f111f1111111ff.
            .ff1111f11111ffff11111f111111fffff1111f11111f111fffff111f111f111ffffff11ff.
            .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
            .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
            .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
            .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            ...........................................................................
            `, SpriteKind.StartScreen)
        Tutorial.changeScale(0.1, ScaleAnchor.Middle)
        Tutorial.y += 45
        Info = sprites.create(img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            .ffffffffffffffffffffffffffff.....................
            .f11111111111111111111111111f.....................
            .f1fffff111f111f1ffff11fff11f.....................
            .f111f1111f1f11f1f1111f111f1f.....................
            .f111f1111f1f11f1f1111f111f1f.....................
            .f111f1111f1f11f1f1111f111f1f.....................
            .f111f111f11f1f11fff11f111f1f.....................
            .f111f111f11f1f11f1111f111f1f.....................
            .f111f111f11f1f11f1111f111f1f.....................
            .f1fffff1f111f111f11111fff11f.....................
            .f11111111111111111111111111f.....................
            .f11111111111111111111111111f.....................
            .ffffffffffffffffffffffffffff.....................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `, SpriteKind.StartScreen)
        Info.changeScale(0.05, ScaleAnchor.Middle)
        Info.y += 40
        Info.x += 10
        Mouse = sprites.create(img`
            ........................
            ...f....................
            ..f1f...................
            ..f11f..................
            ..f111f.................
            ..f1111f................
            ..f11111f...............
            ..f111111f..............
            ..f1111111f.............
            ..f11111111f............
            ..f111111111f...........
            ..f1111111111f..........
            ..f11111111111f.........
            ..f111111fffff..........
            ..f111f11f..............
            ..f11f.f11f.............
            ..f1f..f11f.............
            ..ff....f11f............
            ..f.....f11f............
            .........ff.............
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.StartScreen)
        Mouse.setPosition(75, 45)
        Mouse.setStayInScreen(true)
        controller.moveSprite(Mouse)
    }
    if (Mouse.overlapsWith(_DotDotDot) && controller.A.isPressed()) {
        game.showLongText("Coming Soon...", DialogLayout.Full)
    }
    if (Mouse.overlapsWith(Info) && controller.A.isPressed()) {
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
            9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
            999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
            9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
            99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
            99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
            99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
            99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
            999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
            9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
            9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
            999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
            99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
            99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
            99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
            999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
            999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
            999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
            99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
            99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
            9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
            999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
            9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
            999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
            999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
            999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
            99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
            999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
            99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
            999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
            99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
            99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99cc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993999999999999999993399999999999
            9999999999999999999999939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993339333399999999999999993393999ccc9c9
            99999c99999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99cc
            9999cc93399999999993333333999999999999999999999999999999993399999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b3399ccc99c
            99c9933333cc9999999333333399999999999999999999999999999993333399999999999999999999999999999999999999999999999999999999999993335553339999999999993333553339cc9999
            9cc93333333399999993335333339999999999999999cc99999ccc99933333399cc999999999999999999999999999999999cc999999999cc99999999993335533339999999999999335553339ccc999
            cc9c93353333cc999993355533399999cc9999999999cc99999999933355333999999999cc9cc999999cc99999999c999999cc9999c9999ccc99999999999333333999999c9999993333533c99ccccc9
            c99cc3555339cc99c93333533333c999cc99cc9999999999999999933353333999999999c999c99999999999c9999c999999999999c9999c9999999cccc93333333cc999ccc99999333333ccccccccc9
            9cc9333333399cc99933333333399999999cc999999c999999cc999333333399999999c9999999999cc99999cc99999c999c9cc9999cc99999ccc99cccc97333739cc9999cc999999333333cccccc999
            9ccc33333339cc99999933333399999cc99999999c999999999999933333339c9cc999c99c9999999cc9999999c999cc99999999999cc9999999c999cc9977777799c9999cc999cc999979399cc9cc99
            ccccc977339ccc99997797777c99999cc99999999c9999999a9999993933339999c999999c99c999999999cc9cc999c999cc99999969999999999999999977777999cc9999c999cc999777799cc9cc99
            cc997777799c979997779777799999999aa79c9977999777aa9977c797737777799999c9999cc9999997799c9aa997c999779c79996979cc977cc7aa9c9997779997cc9999c99999779777799cc9cc99
            c779777779777777979777777797c7796a7797c977797777aaaaa77797777777779977c9977999779c977779a6a97777997797799969797c977c779a6c7797797777c77c77999c7a7aa777cc99cccc99
            9777977779777a7777c777797797c779aaa77777777777777777777777777777777c77c777777777777777777aa777777777777777aa777777777aa7aa777777777777777777997a7a7779979c7797c9
            9779977777777aa77777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777aa77777777777777777777777777a777777cc7797c9
            777777777777777777777777777777a777777777777777777777777777a777777777777777777777aa7777777777777777777aa777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777a77777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777777a777777777777777777777777777
            7777777777777777777777777777777777777777aa7777777777777777a7777777777777777777777777777777777a77777777777777777777777777777777777777a777777777777777777777777777
            77777777777777777aa777777777777777777777aa77777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777a777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777777777777aa777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777
            77777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777777777777777777
            777777aa77777777777777777aa777777777a7777777aa777777777777a77777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777
            777777aa7777777777777777777777777777a777777777777777777777aa777777777777777777777777777777777777777777aa777777777777777777777777777777777aa777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777b77777777777777777777777777777777777777777777777777777777777777777aa7777777
            77777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777777777777aa777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        game.showLongText("Cherry = 2 hearts                        Strawberry = 5 points                        Apple = 10 points     Taco = 20 points          Doughnut = 50 points", DialogLayout.Full)
    }
    Level_Caller()
})
function Level_Caller () {
    if (Mouse.overlapsWith(_1) && controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.level)
        Level_1()
    }
    if (Mouse.overlapsWith(_2) && controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.level)
        Level_2()
    }
    if (Mouse.overlapsWith(_3) && controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.level)
        Level_3()
    }
    if (Mouse.overlapsWith(_4) && controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.level)
        Level_4()
    }
    if (Mouse.overlapsWith(_5) && controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.level)
        Level_5()
    }
}
function Tutorial2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.StartScreen)
    Score = 0
    StartPressed = 0
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
        7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
        7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
        6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
        6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
        6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
        6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
        6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
        66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
        66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
        66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
        66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
        66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
        6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
        6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
        6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
        bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
        bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
        bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
        bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
        bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
        bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
        bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
        bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
        bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
        bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
        b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
        b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
        b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
        b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
        dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
        9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
        9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
        9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
        9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
        99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
        99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
        9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
        9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
        999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
        d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
        dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
        dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
        dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
        d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
        9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
        d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
        ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
        dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
        ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
        dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
        ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
        dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
        ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    statusbar = statusbars.create(50, 4, StatusBarKind.Health)
    statusbar.setLabel("HP")
    statusbar.value = 100
    statusbar.setColor(2, 8)
    statusbar.positionDirection(CollisionDirection.Top)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(75, 100)
    controller.moveSprite(mySprite)
    mySprite.setStayInScreen(true)
    info.setScore(0)
    info.setLife(3)
    Jester = sprites.create(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `, SpriteKind.Player)
    Jester_move_from_edge()
    pause(100)
    Jester.sayText("Hi, my name is Jester. I will be your guide.", 5000, false)
    pause(5000)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    Jester.sayText("Your main enemy is the ghosts. You need to protect me. ", 5000, false)
    pause(5000)
    Jester.sayText("Move to the ghost with the joystick.", 3000, false)
    pause(100)
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost.setPosition(75, 45)
    pause(7500)
    if (Ghost.overlapsWith(mySprite)) {
        Jester.sayText("Press A to use sword.", 4000, false)
    }
    pause(5000)
    if (Score == 1) {
        Jester.sayText("Good job!", 2000, false)
        pause(2000)
    }
    Jester.sayText("You can consume fruit by pressing B to gain points or hearts.", 10000, false)
    pause(10000)
    Cherries = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 2 2 2 2 2 2 e e e e c 6 8 . 
        c 2 2 2 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 2 2 2 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 2 e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 2 2 2 2 2 2 c 
        . . . . . . . c 2 2 2 2 2 2 2 c 
        . . . . . . . . c 2 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    Cherries.setPosition(75, 100)
    Jester.sayText("Cherries give you 2 extra hearts.", 3000, false)
    pause(3000)
    Jester.sayText("Move to the cherries of consume them.", 5000, false)
    pause(10000)
    Apple = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e 2 2 2 c 7 e 2 2 e e . . 
        . c e 2 2 2 2 c 6 e e 2 2 2 e . 
        . c e 2 2 2 2 c c 2 4 5 4 2 e . 
        c e 2 2 2 2 2 2 2 2 4 5 5 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e 2 2 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e 2 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    Apple.setStayInScreen(false)
    Apple.setPosition(-50, 100)
    Apple.x += 170
    Jester.sayText("Apples give you 10 extra points.", 5000, false)
    pause(5000)
    Jester.sayText("Move to the apple and consume it.", 5000, false)
    pause(10000)
    Jester.sayText("Congratulations! You have completed the tutorial.", 7000, false)
    pause(5000)
    effects.confetti.startScreenEffect(2000)
    pause(2000)
    mySprite.destroy()
    Jester.destroy()
    statusbar.destroy()
    Main_Menu()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        500,
        false
        )
    }
})
function Level_4 () {
    mySprite.destroy()
    Ghost.destroy()
    Jester.destroy()
    statusbar.destroy()
    scene.setBackgroundImage(img`
        1111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        11d1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        d119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111d111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999111199999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111d1111d111d11999999999999999999999999999991111111999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111d11111111d11111d11111999999999999999999999999999111111111119999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111d11111111111d1111111dd1111199999999999999999999999991111111111111199999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111111111111111111111111d1199999999999999999999999911111111111111119999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111d1111d1111111d111111111999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999991111111111111d111111199999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999911111111d1111111119999999999999999999999999999991111111111111111111199999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999111d1111111ddd1199999999999999999999999999999991111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999999119999999999999999999111111999999999999999999999999999999911111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999
        9999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999
        9999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999111111111111111111111111119999999999999999999999999999999999999
        99999999999999999999999999999999dd1111111111119999999999999999999999999999999999999999999999999991dddd11111111111111111111d9911111911199999999999999999999999999
        999999999999999999999999999999ddddddddd11ddddd99999999999999999999999999999999999999999999999999ddddddddd1111111111111dd1ddd1111d1111119999999999999999999999999
        9999999999999999999999999999ddddddddddddddddddd999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddd11111111111999999999999999999999999
        999999999999999999999999999ddddddddddddddddddddd99999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddd1111111d11199999999999999999999999
        99999999999999999999999999ddddddddddddddddddddddd999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddd1d11111111119999999999999999999999
        9999999999999999999999999ddddddddddddddddddddddddd9999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddd111d111dd119999999999999999999999
        999999999999999999999999ddddddddddddddddddddddddddd99999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd111111d1119999999999999999999999
        999999999999999999999dddddddddddddddddddddddddddddddd999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd11111111199999999999999999999999
        99999999999999999999dddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddd1111199999999999999999999999999
        9999999999999999999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddd119999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        9999999999999999ddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999
        999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999
        99999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999
        999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        99999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        9999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999
        999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        99999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        99999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999
        9999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888889988dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        99dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999
        ddddddddddddddddddddddddddddddd777777777ddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999
        ddddddddddddddddddddddddddd777777777777777ddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999
        ddddddddddddddddddddddddd777777777777777777ddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999
        ddddddddddddddddddddd777777777777777777777777ddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99
        dddddddddddddddddd7777777777777777777777777777777ddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9
        dddddddddddddd777777777777777777777777777777777777777dddddddddddddd88888888888ddddddddddddddddd77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddd77777777777777777777777777777777777777777dddddddddddddeeeeeeeeeeeddddddddddddddd7777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddd777777777777777777777777777777777777777777777dddddddddeeeeeeeeeeeee7dddddddddd777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddd777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeee7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddd
        dddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddd
        ddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        ddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddd
        dddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddd
        ddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddd
        dd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd
        d7777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddd
        7777777777777777777777777777777777777dddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddd
        7777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddd
        777777777777777777777777777777777777ddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddd
        777777777777777777777777777777777777ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddd
        777777777777777777777777777777777777d7dd7dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd
        777777777777777777777777777777777777dddd7dd7d7d77777777777777777777777777777777777777777dddd77777777777777777777777777777777777777777777777777777777777777dddddd
        777777777777777777777777777777777777ddddddddddd7777777777777777777777777777777777777dddddddddd77777777777777777777777777777777777777777777777777777777777777dddd
        7777777777777777777777777777777777777dddddddddd777777777777777777777777777777777777ddddddd7ddd7777777777777777777777777777777777777777777777777777777777777777dd
        77777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777ddd7dddddddd7777777777777777777777777777777777777777777777777777777777777777d
        777777777777777777777777777777777777777ddd7777777777777777777777777777777777777777ddddddddd77dd77777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dd7ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd7ddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddd7ddddddd7d777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777
        777777777dddd77777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        7777777ddddddd7777777777777777777777777777777777777777777777777777777777777777777ddddd7dddddd7777777777777777777777777777777777777777777777777777777777777777777
        7777ddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777ddd777777777777777
        777dddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777dddddd77777777777777
        777ddd7dd7dddddddd77777777777777777777777777ddd77777777777777777777777777777777777777777777777777777777777dd7777777777777777777777777777777dddd7dd77777777777777
        777dddddd7d7dd7ddd777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777777dddd777777777777777777777777777777dddddddd7777777777777
        777dddddddddddddddd7777777777777777777777dd7ddddddd7777777777777777777777777777777777777777777777777777ddddddd7777777777777777777777777777dddd7dddd7777777777777
        7777ddddd7dd7d7dd7dd77777777777777777777ddd7dd7dddd77777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777ddd7ddd7dd7777777777777
        777777dddddddddddddd77777777777777777777ddd7dddd7ddd7777777777777777777777777777777777777777777777777ddddddddd777777777777777777777777777dddddddddd7777777777777
        77777777dddddddddd7777777777777777777777dddddddd7ddd7777777777777777777777777777777777777777777777777d7dd77dd7777777777777777777777777777dd7d7ddddd7777777777777
        7777777777777ddd777777777777777777777777ddddddd77ddd777777777777777777777777777777777777777777777777ddddddddd7777777777777777777777777777ddddddddd77777777777777
        7777777777777777777777777777777777777777dd7dd7d77dddd77777777777777777777777777777777777777777777777ddddddddd77777777777777777777777777777ddddd77777777777777777
        7777777777777777777777777777777777777777dddddddddddd777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777ddddddddddd77777777777777777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777dddd7dddd7777777777777777777777777777777777777777777777777777ddddd77777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777ddd777777777777777777777777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    Jester = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Player)
    mySprite.x += -25
    Jester.setStayInScreen(true)
    Ghost.setBounceOnWall(true)
    Ghost_Amount = 1
    Score = 0
    Ghost_Speed = 20
    info.setScore(0)
    info.setLife(3)
    info.setLifeImage(img`
. c 2 2 . 2 . .
c 2 2 2 2 2 4 2
c 2 2 2 2 4 2 2 
c 2 2 2 2 2 2 2
. c 2 2 2 2 2 .
. . c 2 2 2 . .
. . . c 2 . . . 
`)
statusbar = statusbars.create(50, 4, StatusBarKind.Health)
    statusbar.setLabel("HP")
    statusbar.value = 100
    statusbar.setColor(7, 2)
    statusbar.positionDirection(CollisionDirection.Top)
    game.splash("Level 4")
    controller.moveSprite(mySprite)
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost_Amount = 1
    Ghost.setPosition(randint(0, 160), randint(0, 120))
    Ghost.follow(Jester, 20)
    if (true) {
        for (let index = 0; index < 120; index++) {
            pause(500)
            if (Score == 25) {
                Ghost_Amount = 1
                Ghost.destroy()
                Level_4_Complete = 1
                game.splash("Level 4 Complete")
                pause(1000)
                Level_5()
                break;
            }
        }
    } else {
        game.splash("Level failed")
        pause(1000)
        Start2()
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        500,
        false
        )
    }
})
function Start2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.StartScreen)
    Start.destroy()
    Ghost.destroy()
    Jester.destroy()
    mySprite.destroy()
    statusbar.destroy()
    Tutorial.destroy()
    Mouse.destroy()
    StartPressed = 1
    info.setLifeImage(img`
2 
`)
levels_Completed()
    pause(100)
    _1.setPosition(15, 15)
    _2.setPosition(45, 15)
    _3.setPosition(75, 15)
    _4.setPosition(105, 15)
    _5.setPosition(135, 15)
    _DotDotDot = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 f 1 1 1 f 1 1 1 f 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.level)
    _DotDotDot.setPosition(15, 35)
    Back_Arrow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
        . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
        . f 1 1 1 f 1 1 1 1 1 1 1 1 f . 
        . f 1 1 f 1 1 1 1 1 1 1 1 1 f . 
        . f 1 f f f f f f f f f f 1 f . 
        . f 1 1 f 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 f 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 f 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.level)
    Back_Arrow.setPosition(10, 60)
    Mouse = sprites.create(img`
        ........................
        ...f....................
        ..f1f...................
        ..f11f..................
        ..f111f.................
        ..f1111f................
        ..f11111f...............
        ..f111111f..............
        ..f1111111f.............
        ..f11111111f............
        ..f111111111f...........
        ..f1111111111f..........
        ..f11111111111f.........
        ..f111111fffff..........
        ..f111f11f..............
        ..f11f.f11f.............
        ..f1f..f11f.............
        ..ff....f11f............
        ..f.....f11f............
        .........ff.............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.level)
    Mouse.setPosition(70, 45)
    Mouse.setStayInScreen(true)
    controller.moveSprite(Mouse)
}
function Main_Menu () {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
        9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
        999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
        9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
        99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
        999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
        9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
        9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
        999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
        99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
        99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
        99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
        999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
        999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
        999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
        99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
        99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
        9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
        999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
        9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
        999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
        999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
        999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
        99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
        999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
        99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
        999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
        99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
        99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99cc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993999999999999999993399999999999
        9999999999999999999999939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993339333399999999999999993393999ccc9c9
        99999c99999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99cc
        9999cc93399999999993333333999999999999999999999999999999993399999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b3399ccc99c
        99c9933333cc9999999333333399999999999999999999999999999993333399999999999999999999999999999999999999999999999999799999999993335553339999999999993333553339cc9999
        9cc93333333399999993335333339999999999999999cc99999ccc99933333399cc999999999999999999999999999999999cc999999999cc99999999993335533339999999999999335553339ccc999
        cc9c93353333cc999993355533399999cc9999999999cc99999999933355333999999999cc9cc999999cc99999999c999999cc9999c9999ccc99999999999333333999999c9999993333533c99ccccc9
        c99cc3555339cc99c93333533333c999cc99cc9999999999999999933353333999999999c999c99999999999c9999c999999999999c9999c9999999cccc93333333cc999ccc99999333333ccccccccc9
        9cc9333333399cc99933333333399999999cc999999c999999cc999333333399999999c9999999999cc99999cc99999c999c9cc9999cc99999ccc99cccc97333739cc9999cc999999333333cccccc999
        9ccc33333339cc99999933333399999cc99999999c999999999999933333339c9cc999c99c9999999cc9999999c999cc99999999999cc9999999c999cc9977777799c9999cc999cc999979399cc9cc99
        ccccc977339ccc99997797777c99999cc99999999c999999979999993933339999c999999c99c999999999cc9cc999c999cc99999979999999999999999977777999cc9999c999cc999777799cc9cc99
        cc997777799c9799977797777999999997779c9977999777779977c797737777799999c9999cc9999997799c977997c999779c79997979cc977cc7779c9997779997cc9999c99999779777799cc9cc99
        c779777779777777979777777797c779777797c9777977777777777797777777779977c9977999779c97777977797777997797799979797c977c77977c7797797777c77c77999c77777777cc99cccc99
        9777977779777777777777797797c77977777777777777777777777777777777777c77c7777777777777777777777777777777777777777777777777777777777777777777779977977779979c7797c9
        97799777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cc7797c9
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite = sprites.create(img`
        9 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.StartScreen)
    mySprite.setStayInScreen(false)
    mySprite.setPosition(-10, -10)
    Start = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .fffffffffffffffffffffffff........................
        .f11111111111111111111111f........................
        .f11111111111111111111111f........................
        .f111ff1fff11f111f11fff11f........................
        .f11f1111f11f1f1f1f11f111f........................
        .f11f1111f11f1f1f1f11f111f........................
        .f111ff11f11fff1ff111f111f........................
        .f1111f11f11f1f1f1f11f111f........................
        .f11ff111f11f1f1f1f11f111f........................
        .f11111111111111111111111f........................
        .f11111111111111111111111f........................
        .fffffffffffffffffffffffff........................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.StartScreen)
    Start.changeScale(1, ScaleAnchor.Middle)
    Start.x += 23
    Start.y += -10
    Tutorial = sprites.create(img`
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
        .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
        .ff11fffff11ff11ff11fffff1111fffff11111fffff1111fffff11111f11111f1111111ff.
        .ff11fffff11ff11ff11fffff111ff111ff111ff111ff111fffff1111fff1111f1111111ff.
        .ff1111f1111ff11ff1111f1111ff11111ff11f11111f11111f11111ff1ff111f1111111ff.
        .ff1111f1111ff11ff1111f1111f1111111f11f11111f11111f11111f111f111f1111111ff.
        .ff1111f1111ff11ff1111f1111f1111111f11f111fff11111f11111f111f111f1111111ff.
        .ff1111f1111ff11ff1111f1111f1111111f11fffff1111111f11111fffff111f1111111ff.
        .ff1111f1111ff11ff1111f1111ff11111ff11f111ff111111f11111f111f111f1111111ff.
        .ff1111f1111ffffff1111f11111ff111ff111f1111ff11111f11111f111f111f1111111ff.
        .ff1111f11111ffff11111f111111fffff1111f11111f111fffff111f111f111ffffff11ff.
        .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
        .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
        .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        ...........................................................................
        `, SpriteKind.StartScreen)
    Tutorial.changeScale(0.1, ScaleAnchor.Middle)
    Tutorial.y += 45
    Info = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .ffffffffffffffffffffffffffff.....................
        .f11111111111111111111111111f.....................
        .f1fffff111f111f1ffff11fff11f.....................
        .f111f1111f1f11f1f1111f111f1f.....................
        .f111f1111f1f11f1f1111f111f1f.....................
        .f111f1111f1f11f1f1111f111f1f.....................
        .f111f111f11f1f11fff11f111f1f.....................
        .f111f111f11f1f11f1111f111f1f.....................
        .f111f111f11f1f11f1111f111f1f.....................
        .f1fffff1f111f111f11111fff11f.....................
        .f11111111111111111111111111f.....................
        .f11111111111111111111111111f.....................
        .ffffffffffffffffffffffffffff.....................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.StartScreen)
    Info.changeScale(0.05, ScaleAnchor.Middle)
    Info.y += 40
    Info.x += 10
    Mouse = sprites.create(img`
        ........................
        ...f....................
        ..f1f...................
        ..f11f..................
        ..f111f.................
        ..f1111f................
        ..f11111f...............
        ..f111111f..............
        ..f1111111f.............
        ..f11111111f............
        ..f111111111f...........
        ..f1111111111f..........
        ..f11111111111f.........
        ..f111111fffff..........
        ..f111f11f..............
        ..f11f.f11f.............
        ..f1f..f11f.............
        ..ff....f11f............
        ..f.....f11f............
        .........ff.............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.StartScreen)
    Mouse.setPosition(70, 45)
    Mouse.setStayInScreen(true)
    controller.moveSprite(Mouse)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        false
        )
    }
})
function Statusbar_death_tracker () {
    if (statusbar.value == 0) {
        info.changeLifeBy(-1)
        statusbar.value += 100
        pause(100)
    }
}
function Level_5 () {
    mySprite.destroy()
    Ghost.destroy()
    Jester.destroy()
    statusbar.destroy()
    scene.setBackgroundImage(img`
        1111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        11d1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        d119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111d111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999111199999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111d1111d111d11999999999999999999999999999991111111999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111d11111111d11111d11111999999999999999999999999999111111111119999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111d11111111111d1111111dd1111199999999999999999999999991111111111111199999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111111111111111111111111d1199999999999999999999999911111111111111119999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111d1111d1111111d111111111999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999991111111111111d111111199999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999911111111d1111111119999999999999999999999999999991111111111111111111199999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999111d1111111ddd1199999999999999999999999999999991111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999999119999999999999999999111111999999999999999999999999999999911111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999
        9999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999
        9999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999111111111111111111111111119999999999999999999999999999999999999
        99999999999999999999999999999999dd1111111111119999999999999999999999999999999999999999999999999991dddd11111111111111111111d9911111911199999999999999999999999999
        999999999999999999999999999999ddddddddd11ddddd99999999999999999999999999999999999999999999999999ddddddddd1111111111111dd1ddd1111d1111119999999999999999999999999
        9999999999999999999999999999ddddddddddddddddddd999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddd11111111111999999999999999999999999
        999999999999999999999999999ddddddddddddddddddddd99999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddd1111111d11199999999999999999999999
        99999999999999999999999999ddddddddddddddddddddddd999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddd1d11111111119999999999999999999999
        9999999999999999999999999ddddddddddddddddddddddddd9999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddd111d111dd119999999999999999999999
        999999999999999999999999ddddddddddddddddddddddddddd99999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd111111d1119999999999999999999999
        999999999999999999999dddddddddddddddddddddddddddddddd999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd11111111199999999999999999999999
        99999999999999999999dddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddd1111199999999999999999999999999
        9999999999999999999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddd119999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        9999999999999999ddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999
        999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999
        99999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999
        999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        99999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        9999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999
        999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        99999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        99999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999
        9999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888889988dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        99dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999
        ddddddddddddddddddddddddddddddd777777777ddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999
        ddddddddddddddddddddddddddd777777777777777ddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999
        ddddddddddddddddddddddddd777777777777777777ddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999
        ddddddddddddddddddddd777777777777777777777777ddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99
        dddddddddddddddddd7777777777777777777777777777777ddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9
        dddddddddddddd777777777777777777777777777777777777777dddddddddddddd88888888888ddddddddddddddddd77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddd77777777777777777777777777777777777777777dddddddddddddeeeeeeeeeeeddddddddddddddd7777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddd777777777777777777777777777777777777777777777dddddddddeeeeeeeeeeeee7dddddddddd777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddd777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeee7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddd
        dddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddd
        ddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        ddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddd
        dddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddd
        ddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddd
        dd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd
        d7777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddd
        7777777777777777777777777777777777777dddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddd
        7777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddd
        777777777777777777777777777777777777ddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddd
        777777777777777777777777777777777777ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddd
        777777777777777777777777777777777777d7dd7dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd
        777777777777777777777777777777777777dddd7dd7d7d77777777777777777777777777777777777777777dddd77777777777777777777777777777777777777777777777777777777777777dddddd
        777777777777777777777777777777777777ddddddddddd7777777777777777777777777777777777777dddddddddd77777777777777777777777777777777777777777777777777777777777777dddd
        7777777777777777777777777777777777777dddddddddd777777777777777777777777777777777777ddddddd7ddd7777777777777777777777777777777777777777777777777777777777777777dd
        77777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777ddd7dddddddd7777777777777777777777777777777777777777777777777777777777777777d
        777777777777777777777777777777777777777ddd7777777777777777777777777777777777777777ddddddddd77dd77777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dd7ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd7ddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddd7ddddddd7d777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777
        777777777dddd77777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        7777777ddddddd7777777777777777777777777777777777777777777777777777777777777777777ddddd7dddddd7777777777777777777777777777777777777777777777777777777777777777777
        7777ddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777ddd777777777777777
        777dddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777dddddd77777777777777
        777ddd7dd7dddddddd77777777777777777777777777ddd77777777777777777777777777777777777777777777777777777777777dd7777777777777777777777777777777dddd7dd77777777777777
        777dddddd7d7dd7ddd777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777777dddd777777777777777777777777777777dddddddd7777777777777
        777dddddddddddddddd7777777777777777777777dd7ddddddd7777777777777777777777777777777777777777777777777777ddddddd7777777777777777777777777777dddd7dddd7777777777777
        7777ddddd7dd7d7dd7dd77777777777777777777ddd7dd7dddd77777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777ddd7ddd7dd7777777777777
        777777dddddddddddddd77777777777777777777ddd7dddd7ddd7777777777777777777777777777777777777777777777777ddddddddd777777777777777777777777777dddddddddd7777777777777
        77777777dddddddddd7777777777777777777777dddddddd7ddd7777777777777777777777777777777777777777777777777d7dd77dd7777777777777777777777777777dd7d7ddddd7777777777777
        7777777777777ddd777777777777777777777777ddddddd77ddd777777777777777777777777777777777777777777777777ddddddddd7777777777777777777777777777ddddddddd77777777777777
        7777777777777777777777777777777777777777dd7dd7d77dddd77777777777777777777777777777777777777777777777ddddddddd77777777777777777777777777777ddddd77777777777777777
        7777777777777777777777777777777777777777dddddddddddd777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777ddddddddddd77777777777777777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777dddd7dddd7777777777777777777777777777777777777777777777777777ddddd77777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777ddd777777777777777777777777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    Jester = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Player)
    mySprite.x += -25
    Jester.setStayInScreen(true)
    Ghost.setBounceOnWall(true)
    Ghost_Amount = 1
    Score = 0
    Ghost_Speed = 25
    info.setScore(0)
    info.setLife(3)
    info.setLifeImage(img`
. c 2 2 . 2 . .
c 2 2 2 2 2 4 2
c 2 2 2 2 4 2 2 
c 2 2 2 2 2 2 2
. c 2 2 2 2 2 .
. . c 2 2 2 . .
. . . c 2 . . . 
`)
statusbar = statusbars.create(50, 4, StatusBarKind.Health)
    statusbar.setLabel("HP")
    statusbar.value = 100
    statusbar.setColor(7, 2)
    statusbar.positionDirection(CollisionDirection.Top)
    game.splash("Level 5")
    controller.moveSprite(mySprite)
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost_Amount = 1
    Ghost.setPosition(randint(0, 160), randint(0, 120))
    Ghost.follow(Jester, 25)
    if (true) {
        for (let index = 0; index < 130; index++) {
            pause(500)
            if (Score == 30) {
                Ghost_Amount = 1
                Ghost.destroy()
                Level_5_Complete = 1
                game.splash("Level 5 Complete")
                pause(1000)
                Start2()
                break;
            }
        }
    } else {
        game.splash("Level failed")
        pause(1000)
        Start2()
    }
}
function Level_3 () {
    mySprite.destroy()
    Ghost.destroy()
    Jester.destroy()
    statusbar.destroy()
    scene.setBackgroundImage(img`
        1111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        11d1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        d119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111d111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999111199999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111d1111d111d11999999999999999999999999999991111111999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111d11111111d11111d11111999999999999999999999999999111111111119999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111d11111111111d1111111dd1111199999999999999999999999991111111111111199999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111111111111111111111111d1199999999999999999999999911111111111111119999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111d1111d1111111d111111111999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999991111111111111d111111199999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999911111111d1111111119999999999999999999999999999991111111111111111111199999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999111d1111111ddd1199999999999999999999999999999991111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999999119999999999999999999111111999999999999999999999999999999911111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999
        9999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999
        9999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999111111111111111111111111119999999999999999999999999999999999999
        99999999999999999999999999999999dd1111111111119999999999999999999999999999999999999999999999999991dddd11111111111111111111d9911111911199999999999999999999999999
        999999999999999999999999999999ddddddddd11ddddd99999999999999999999999999999999999999999999999999ddddddddd1111111111111dd1ddd1111d1111119999999999999999999999999
        9999999999999999999999999999ddddddddddddddddddd999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddd11111111111999999999999999999999999
        999999999999999999999999999ddddddddddddddddddddd99999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddd1111111d11199999999999999999999999
        99999999999999999999999999ddddddddddddddddddddddd999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddd1d11111111119999999999999999999999
        9999999999999999999999999ddddddddddddddddddddddddd9999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddd111d111dd119999999999999999999999
        999999999999999999999999ddddddddddddddddddddddddddd99999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd111111d1119999999999999999999999
        999999999999999999999dddddddddddddddddddddddddddddddd999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd11111111199999999999999999999999
        99999999999999999999dddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddd1111199999999999999999999999999
        9999999999999999999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddd119999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        9999999999999999ddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999
        999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999
        99999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999
        999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        99999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        9999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999
        999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        99999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        99999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999
        9999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888889988dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        99dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999
        ddddddddddddddddddddddddddddddd777777777ddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999
        ddddddddddddddddddddddddddd777777777777777ddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999
        ddddddddddddddddddddddddd777777777777777777ddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999
        ddddddddddddddddddddd777777777777777777777777ddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99
        dddddddddddddddddd7777777777777777777777777777777ddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9
        dddddddddddddd777777777777777777777777777777777777777dddddddddddddd88888888888ddddddddddddddddd77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddd77777777777777777777777777777777777777777dddddddddddddeeeeeeeeeeeddddddddddddddd7777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddd777777777777777777777777777777777777777777777dddddddddeeeeeeeeeeeee7dddddddddd777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddd777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeee7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddd
        dddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddd
        ddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        ddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddd
        dddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddd
        ddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddd
        dd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd
        d7777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddd
        7777777777777777777777777777777777777dddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddd
        7777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddd
        777777777777777777777777777777777777ddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddd
        777777777777777777777777777777777777ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddd
        777777777777777777777777777777777777d7dd7dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd
        777777777777777777777777777777777777dddd7dd7d7d77777777777777777777777777777777777777777dddd77777777777777777777777777777777777777777777777777777777777777dddddd
        777777777777777777777777777777777777ddddddddddd7777777777777777777777777777777777777dddddddddd77777777777777777777777777777777777777777777777777777777777777dddd
        7777777777777777777777777777777777777dddddddddd777777777777777777777777777777777777ddddddd7ddd7777777777777777777777777777777777777777777777777777777777777777dd
        77777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777ddd7dddddddd7777777777777777777777777777777777777777777777777777777777777777d
        777777777777777777777777777777777777777ddd7777777777777777777777777777777777777777ddddddddd77dd77777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dd7ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd7ddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddd7ddddddd7d777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777
        777777777dddd77777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        7777777ddddddd7777777777777777777777777777777777777777777777777777777777777777777ddddd7dddddd7777777777777777777777777777777777777777777777777777777777777777777
        7777ddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777ddd777777777777777
        777dddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777dddddd77777777777777
        777ddd7dd7dddddddd77777777777777777777777777ddd77777777777777777777777777777777777777777777777777777777777dd7777777777777777777777777777777dddd7dd77777777777777
        777dddddd7d7dd7ddd777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777777dddd777777777777777777777777777777dddddddd7777777777777
        777dddddddddddddddd7777777777777777777777dd7ddddddd7777777777777777777777777777777777777777777777777777ddddddd7777777777777777777777777777dddd7dddd7777777777777
        7777ddddd7dd7d7dd7dd77777777777777777777ddd7dd7dddd77777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777ddd7ddd7dd7777777777777
        777777dddddddddddddd77777777777777777777ddd7dddd7ddd7777777777777777777777777777777777777777777777777ddddddddd777777777777777777777777777dddddddddd7777777777777
        77777777dddddddddd7777777777777777777777dddddddd7ddd7777777777777777777777777777777777777777777777777d7dd77dd7777777777777777777777777777dd7d7ddddd7777777777777
        7777777777777ddd777777777777777777777777ddddddd77ddd777777777777777777777777777777777777777777777777ddddddddd7777777777777777777777777777ddddddddd77777777777777
        7777777777777777777777777777777777777777dd7dd7d77dddd77777777777777777777777777777777777777777777777ddddddddd77777777777777777777777777777ddddd77777777777777777
        7777777777777777777777777777777777777777dddddddddddd777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777ddddddddddd77777777777777777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777dddd7dddd7777777777777777777777777777777777777777777777777777ddddd77777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777ddd777777777777777777777777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    Jester = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Player)
    mySprite.x += -25
    Jester.setStayInScreen(true)
    Ghost.setBounceOnWall(true)
    Ghost_Amount = 1
    Score = 0
    Ghost_Speed = 15
    info.setScore(0)
    info.setLife(3)
    info.setLifeImage(img`
. c 2 2 . 2 . .
c 2 2 2 2 2 4 2
c 2 2 2 2 4 2 2 
c 2 2 2 2 2 2 2
. c 2 2 2 2 2 .
. . c 2 2 2 . .
. . . c 2 . . . 
`)
statusbar = statusbars.create(50, 4, StatusBarKind.Health)
    statusbar.setLabel("HP")
    statusbar.value = 100
    statusbar.setColor(7, 2)
    statusbar.positionDirection(CollisionDirection.Top)
    game.splash("Level 3")
    controller.moveSprite(mySprite)
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost_Amount = 1
    Ghost.setPosition(randint(0, 160), randint(0, 120))
    Ghost.follow(Jester, 15)
    if (true) {
        for (let index = 0; index < 120; index++) {
            pause(500)
            if (Score == 20) {
                Ghost_Amount = 1
                Ghost.destroy()
                Level_3_Complete = 1
                game.splash("Level 3 Complete")
                pause(1000)
                Start2()
                break;
            }
        }
    } else {
        game.splash("Level failed")
        pause(1000)
        Start2()
    }
}
function Jester_move_from_edge () {
    Jester.setPosition(0, 100)
    for (let index = 0; index < 20; index++) {
        animation.runImageAnimation(
        Jester,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . . f e e d f d d f d c . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            f f . c d b e e e d d c c c c c 
            f e f . c f f e e e d d d d f . 
            f e f . f e e e e f f f f f f . 
            f e f f e e e e e e e f f f f . 
            . f f e e e e f e f d d f d d f 
            . . f e e e e f e f b d f b d f 
            . . f e f f f f f f f f f f f f 
            . . f d d c f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . f f e e e d d d d f . . 
            . . . f d d e e d d d d d d c . 
            . . . c d b e e d f d d f d c . 
            f f . c d b e e d f d d f d d c 
            f e f . c f e e d d d d e e d c 
            f e f . . f e e e d c d d d d c 
            f e f . . f f e e e d c c c f . 
            f e f . f e e e e f f f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f e e e e f e e f e f f . . 
            . . f e e e f f f e e f f e f . 
            . f b f f f f f f c d d b d d f 
            . f d d c f . . f d d d c d d f 
            . . f f f . . . f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . f f f e e e e e f . . . 
            . . . f d d e e e e d d d f . . 
            . . . c d b e e e d d d d d c . 
            . . . c d b e e d d d d d d c . 
            . f f . c f e e d f d d f d d c 
            f e f . . f e e d f d d f d d c 
            f e f . . f e e d d d d e e d c 
            f e f . . f f e e d c d d d f . 
            f e f . f e e e e e d f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f f b e e e e e f f . . . . 
            . . f f d d c e e f f e f . . . 
            . . . . f f f c d d b d d f . . 
            . . . . . f f d d d c d d f . . 
            . . . . . . f f f f f f f . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `],
        100,
        false
        )
        Jester.x += 2.5
        pause(500)
    }
}
function Level_2 () {
    mySprite.destroy()
    Ghost.destroy()
    Jester.destroy()
    statusbar.destroy()
    scene.setBackgroundImage(img`
        1111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        11d1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        d119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111d111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999111199999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111d1111d111d11999999999999999999999999999991111111999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111d11111111d11111d11111999999999999999999999999999111111111119999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111d11111111111d1111111dd1111199999999999999999999999991111111111111199999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111111111111111111111111d1199999999999999999999999911111111111111119999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999111111d1111d1111111d111111111999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999991111111111111d111111199999999999999999999999999999111111111111111111999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999911111111d1111111119999999999999999999999999999991111111111111111111199999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999111d1111111ddd1199999999999999999999999999999991111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999999119999999999999999999111111999999999999999999999999999999911111111111111111111119999999999999999999999999999999999999999
        9999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999
        9999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999
        9999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999111111111111111111111111119999999999999999999999999999999999999
        99999999999999999999999999999999dd1111111111119999999999999999999999999999999999999999999999999991dddd11111111111111111111d9911111911199999999999999999999999999
        999999999999999999999999999999ddddddddd11ddddd99999999999999999999999999999999999999999999999999ddddddddd1111111111111dd1ddd1111d1111119999999999999999999999999
        9999999999999999999999999999ddddddddddddddddddd999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddd11111111111999999999999999999999999
        999999999999999999999999999ddddddddddddddddddddd99999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddd1111111d11199999999999999999999999
        99999999999999999999999999ddddddddddddddddddddddd999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddd1d11111111119999999999999999999999
        9999999999999999999999999ddddddddddddddddddddddddd9999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddd111d111dd119999999999999999999999
        999999999999999999999999ddddddddddddddddddddddddddd99999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd111111d1119999999999999999999999
        999999999999999999999dddddddddddddddddddddddddddddddd999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd11111111199999999999999999999999
        99999999999999999999dddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddd1111199999999999999999999999999
        9999999999999999999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddd119999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        999999999999999999dddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999
        9999999999999999ddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999
        999999999999999ddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999
        99999999999999dddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999
        999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        99999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999
        9999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999
        999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        99999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999
        9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999
        99999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999
        9999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888889988dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999
        99dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999
        ddddddddddddddddddddddddddddddd777777777ddddddddddddddddddddddddddddd88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999
        ddddddddddddddddddddddddddd777777777777777ddddddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999
        ddddddddddddddddddddddddd777777777777777777ddddddddddddddddddddddddd88888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999
        ddddddddddddddddddddd777777777777777777777777ddddddddddddddddddddddd8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99
        dddddddddddddddddd7777777777777777777777777777777ddddddddddddddddddd8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9
        dddddddddddddd777777777777777777777777777777777777777dddddddddddddd88888888888ddddddddddddddddd77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddd77777777777777777777777777777777777777777dddddddddddddeeeeeeeeeeeddddddddddddddd7777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddd777777777777777777777777777777777777777777777dddddddddeeeeeeeeeeeee7dddddddddd777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddd777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeee7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddd
        dddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddd
        ddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddd
        ddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddd
        dddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddd
        ddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddd
        dd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd
        d7777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddddddddd
        7777777777777777777777777777777777777dddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddd
        7777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddd
        777777777777777777777777777777777777ddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddd
        777777777777777777777777777777777777ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddd
        777777777777777777777777777777777777d7dd7dddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd
        777777777777777777777777777777777777dddd7dd7d7d77777777777777777777777777777777777777777dddd77777777777777777777777777777777777777777777777777777777777777dddddd
        777777777777777777777777777777777777ddddddddddd7777777777777777777777777777777777777dddddddddd77777777777777777777777777777777777777777777777777777777777777dddd
        7777777777777777777777777777777777777dddddddddd777777777777777777777777777777777777ddddddd7ddd7777777777777777777777777777777777777777777777777777777777777777dd
        77777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777ddd7dddddddd7777777777777777777777777777777777777777777777777777777777777777d
        777777777777777777777777777777777777777ddd7777777777777777777777777777777777777777ddddddddd77dd77777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dd7ddddddd7dd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddd7ddddd777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777ddd7ddddddd7d777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777
        777777777dddd77777777777777777777777777777777777777777777777777777777777777777777dddd7dddddddd777777777777777777777777777777777777777777777777777777777777777777
        7777777ddddddd7777777777777777777777777777777777777777777777777777777777777777777ddddd7dddddd7777777777777777777777777777777777777777777777777777777777777777777
        7777ddddddd7dddd777777777777777777777777777777777777777777777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777ddd777777777777777
        777dddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777dddddd77777777777777
        777ddd7dd7dddddddd77777777777777777777777777ddd77777777777777777777777777777777777777777777777777777777777dd7777777777777777777777777777777dddd7dd77777777777777
        777dddddd7d7dd7ddd777777777777777777777777dddddddd7777777777777777777777777777777777777777777777777777777dddd777777777777777777777777777777dddddddd7777777777777
        777dddddddddddddddd7777777777777777777777dd7ddddddd7777777777777777777777777777777777777777777777777777ddddddd7777777777777777777777777777dddd7dddd7777777777777
        7777ddddd7dd7d7dd7dd77777777777777777777ddd7dd7dddd77777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777ddd7ddd7dd7777777777777
        777777dddddddddddddd77777777777777777777ddd7dddd7ddd7777777777777777777777777777777777777777777777777ddddddddd777777777777777777777777777dddddddddd7777777777777
        77777777dddddddddd7777777777777777777777dddddddd7ddd7777777777777777777777777777777777777777777777777d7dd77dd7777777777777777777777777777dd7d7ddddd7777777777777
        7777777777777ddd777777777777777777777777ddddddd77ddd777777777777777777777777777777777777777777777777ddddddddd7777777777777777777777777777ddddddddd77777777777777
        7777777777777777777777777777777777777777dd7dd7d77dddd77777777777777777777777777777777777777777777777ddddddddd77777777777777777777777777777ddddd77777777777777777
        7777777777777777777777777777777777777777dddddddddddd777777777777777777777777777777777777777777777777ddddd7ddd777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777ddddddddddd77777777777777777777777777777777777777777777777777dd7dddd7777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777dddd7dddd7777777777777777777777777777777777777777777777777777ddddd77777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777ddd777777777777777777777777777777777777777777777777777777777dd777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    Jester = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Player)
    mySprite.x += -25
    Jester.setStayInScreen(true)
    Ghost.setBounceOnWall(true)
    Ghost_Amount = 1
    Score = 0
    Ghost_Speed = 10
    info.setScore(0)
    info.setLife(3)
    info.setLifeImage(img`
. c 2 2 . 2 . .
c 2 2 2 2 2 4 2
c 2 2 2 2 4 2 2 
c 2 2 2 2 2 2 2
. c 2 2 2 2 2 .
. . c 2 2 2 . .
. . . c 2 . . . 
`)
statusbar = statusbars.create(50, 4, StatusBarKind.Health)
    statusbar.setLabel("HP")
    statusbar.value = 100
    statusbar.setColor(7, 2)
    statusbar.positionDirection(CollisionDirection.Top)
    game.splash("Level 2")
    controller.moveSprite(mySprite)
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost_Amount = 1
    Ghost.setPosition(randint(0, 160), randint(0, 120))
    Ghost.follow(Jester, 10)
    if (true) {
        for (let index = 0; index < 120; index++) {
            pause(500)
            if (Score == 15) {
                Ghost_Amount = 1
                Ghost.destroy()
                Level_2_Complete = 1
                game.splash("Level 2 Complete")
                pause(1000)
                Start2()
                break;
            }
        }
    } else {
        game.splash("Level failed")
        pause(1000)
        Start2()
    }
}
let Ghost_Speed = 0
let Ghost_Amount = 0
let Score = 0
let Mouse: Sprite = null
let Info: Sprite = null
let Tutorial: Sprite = null
let Start: Sprite = null
let mySprite: Sprite = null
let Jester: Sprite = null
let Ghost: Sprite = null
let Apple: Sprite = null
let Cherries: Sprite = null
let statusbar: StatusBarSprite = null
let Back_Arrow: Sprite = null
let _DotDotDot: Sprite = null
let _5: Sprite = null
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let _1: Sprite = null
let Level_5_Complete = 0
let Level_4_Complete = 0
let Level_3_Complete = 0
let Level_2_Complete = 0
let Level_1_Complete = 0
let StartPressed = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
    9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
    999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
    9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
    99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
    99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
    99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
    99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
    999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
    9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
    9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
    999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
    99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
    99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
    99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
    999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
    999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
    999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
    99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
    99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
    9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
    999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
    9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
    999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
    999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
    999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
    99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
    999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
    99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
    999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
    99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
    99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99cc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993999999999999999993399999999999
    9999999999999999999999939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993339333399999999999999993393999ccc9c9
    99999c99999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99cc
    9999cc93399999999993333333999999999999999999999999999999993399999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b3399ccc99c
    99c9933333cc9999999333333399999999999999999999999999999993333399999999999999999999999999999999999999999999999999799999999993335553339999999999993333553339cc9999
    9cc93333333399999993335333339999999999999999cc99999ccc99933333399cc999999999999999999999999999999999cc999999999cc99999999993335533339999999999999335553339ccc999
    cc9c93353333cc999993355533399999cc9999999999cc99999999933355333999999999cc9cc999999cc99999999c999999cc9999c9999ccc99999999999333333999999c9999993333533c99ccccc9
    c99cc3555339cc99c93333533333c999cc99cc9999999999999999933353333999999999c999c99999999999c9999c999999999999c9999c9999999cccc93333333cc999ccc99999333333ccccccccc9
    9cc9333333399cc99933333333399999999cc999999c999999cc999333333399999999c9999999999cc99999cc99999c999c9cc9999cc99999ccc99cccc97333739cc9999cc999999333333cccccc999
    9ccc33333339cc99999933333399999cc99999999c999999999999933333339c9cc999c99c9999999cc9999999c999cc99999999999cc9999999c999cc9977777799c9999cc999cc999979399cc9cc99
    ccccc977339ccc99997797777c99999cc99999999c999999979999993933339999c999999c99c999999999cc9cc999c999cc99999979999999999999999977777999cc9999c999cc999777799cc9cc99
    cc997777799c9799977797777999999997779c9977999777779977c797737777799999c9999cc9999997799c977997c999779c79997979cc977cc7779c9997779997cc9999c99999779777799cc9cc99
    c779777779777777979777777797c779777797c9777977777777777797777777779977c9977999779c97777977797777997797799979797c977c77977c7797797777c77c77999c77777777cc99cccc99
    9777977779777777777777797797c77977777777777777777777777777777777777c77c7777777777777777777777777777777777777777777777777777777777777777777779977977779979c7797c9
    97799777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cc7797c9
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
StartPressed = 0
Level_1_Complete = 0
Level_2_Complete = 0
Level_3_Complete = 0
Level_4_Complete = 0
Level_5_Complete = 0
_1 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_2 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_3 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_4 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_5 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_DotDotDot = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_1.setPosition(-1, -1)
_2.setPosition(-1, -1)
_3.setPosition(-1, -1)
_4.setPosition(-1, -1)
_5.setPosition(-1, -1)
_DotDotDot.setPosition(-1, -1)
Back_Arrow = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.StartScreen)
Back_Arrow.setPosition(-51, -50)
statusbar = statusbars.create(0, 0, StatusBarKind.Health)
Cherries = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.StartScreen)
Cherries.setPosition(-50, -50)
Apple = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.StartScreen)
Apple.setPosition(-50, -50)
Ghost = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.StartScreen)
Ghost.setPosition(16, 0)
Jester = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.StartScreen)
Jester.setPosition(1, 1)
mySprite = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.StartScreen)
mySprite.setStayInScreen(false)
mySprite.setPosition(-10, -10)
Start = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    .fffffffffffffffffffffffff........................
    .f11111111111111111111111f........................
    .f11111111111111111111111f........................
    .f111ff1fff11f111f11fff11f........................
    .f11f1111f11f1f1f1f11f111f........................
    .f11f1111f11f1f1f1f11f111f........................
    .f111ff11f11fff1ff111f111f........................
    .f1111f11f11f1f1f1f11f111f........................
    .f11ff111f11f1f1f1f11f111f........................
    .f11111111111111111111111f........................
    .f11111111111111111111111f........................
    .fffffffffffffffffffffffff........................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.StartScreen)
Start.changeScale(1, ScaleAnchor.Middle)
Start.x += 23
Start.y += -10
Tutorial = sprites.create(img`
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
    .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
    .ff11fffff11ff11ff11fffff1111fffff11111fffff1111fffff11111f11111f1111111ff.
    .ff11fffff11ff11ff11fffff111ff111ff111ff111ff111fffff1111fff1111f1111111ff.
    .ff1111f1111ff11ff1111f1111ff11111ff11f11111f11111f11111ff1ff111f1111111ff.
    .ff1111f1111ff11ff1111f1111f1111111f11f11111f11111f11111f111f111f1111111ff.
    .ff1111f1111ff11ff1111f1111f1111111f11f111fff11111f11111f111f111f1111111ff.
    .ff1111f1111ff11ff1111f1111f1111111f11fffff1111111f11111fffff111f1111111ff.
    .ff1111f1111ff11ff1111f1111ff11111ff11f111ff111111f11111f111f111f1111111ff.
    .ff1111f1111ffffff1111f11111ff111ff111f1111ff11111f11111f111f111f1111111ff.
    .ff1111f11111ffff11111f111111fffff1111f11111f111fffff111f111f111ffffff11ff.
    .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
    .ff111111111111111111111111111111111111111111111111111111111111111111111ff.
    .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    ...........................................................................
    `, SpriteKind.StartScreen)
Tutorial.changeScale(0.1, ScaleAnchor.Middle)
Tutorial.y += 45
Info = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    .ffffffffffffffffffffffffffff.....................
    .f11111111111111111111111111f.....................
    .f1fffff111f111f1ffff11fff11f.....................
    .f111f1111f1f11f1f1111f111f1f.....................
    .f111f1111f1f11f1f1111f111f1f.....................
    .f111f1111f1f11f1f1111f111f1f.....................
    .f111f111f11f1f11fff11f111f1f.....................
    .f111f111f11f1f11f1111f111f1f.....................
    .f111f111f11f1f11f1111f111f1f.....................
    .f1fffff1f111f111f11111fff11f.....................
    .f11111111111111111111111111f.....................
    .f11111111111111111111111111f.....................
    .ffffffffffffffffffffffffffff.....................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.StartScreen)
Info.changeScale(0.05, ScaleAnchor.Middle)
Info.y += 40
Info.x += 10
Mouse = sprites.create(img`
    ........................
    ...f....................
    ..f1f...................
    ..f11f..................
    ..f111f.................
    ..f1111f................
    ..f11111f...............
    ..f111111f..............
    ..f1111111f.............
    ..f11111111f............
    ..f111111111f...........
    ..f1111111111f..........
    ..f11111111111f.........
    ..f111111fffff..........
    ..f111f11f..............
    ..f11f.f11f.............
    ..f1f..f11f.............
    ..ff....f11f............
    ..f.....f11f............
    .........ff.............
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.StartScreen)
Mouse.setPosition(75, 45)
Mouse.setStayInScreen(true)
controller.moveSprite(Mouse)
forever(function () {
    if (controller.A.isPressed() && controller.B.isPressed()) {
        Start2()
    }
    if (Ghost.overlapsWith(mySprite) && controller.A.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            .....ffff...............
            ...fff22fff.............
            ..fff2222fff............
            .fffeeeeeefff...........
            .ffe222222eef...........
            .fe2ffffff2ef...........
            .ffffeeeeffff...........
            ffefbf44fbfeff..........
            fee41fddf14eef..........
            .ffffdddddeef...........
            fddddf444eef............
            fbbbbf2222f4e...........
            fbbbbf2222fd4...........
            .fccf45544f44...........
            ..ffffffff..............
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff..........
            .ffefbf44fbfeff.........
            .fee41fddf14eef.........
            fdfeeddddd4eff..........
            fbffee444edd4e..........
            fbf4f2222edde...........
            fcf.f22cccee............
            .ff.f44cdc4f............
            ....fffddcff............
            .....fddcff.............
            ....cddc................
            ....cdc.................
            ....cc..................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .......ff...............
            .....ff22ff.............
            ...fff2222fff...........
            ..fff222222fff..........
            ..fff222222fff..........
            ..feeeeeeeeeeff.........
            .ffe22222222eff.........
            .fffffeeeefffff.........
            fdfefbf44fbfeff.........
            fbfe41fddf14ef..........
            fbffe4dddd4efe..........
            fcfef22222f4e...........
            .ff4f44554f4e...........
            ....ffffffdde...........
            .....ffffedde...........
            ..........ee............
            .........ccc............
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `,img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .....ffff...............
            ...fff22fff.............
            ..fff2222fff............
            .fffeeeeeefff...........
            .ffe222222eef...........
            .fe2ffffff2ef...........
            .ffffeeeeffff...........
            ffefbf44fbfeff..........
            fee41fddf14eef..........
            .feeddddddeef...........
            ..fee4444eef............
            .e4f222222f4e...........
            .4df222222fd4...........
            .44f445544f44...........
            ....ffffff..............
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        Ghost.destroy(effects.spray, 500)
        info.changeScoreBy(1)
        Score += 1
        Ghost_Amount = 0
        if (StartPressed == 1) {
            GhostAmount()
        }
    } else {
        if (Ghost.overlapsWith(Jester)) {
            animation.runImageAnimation(
            Ghost,
            [img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .....fffc1111111f.......
                ...fc111cd1111111f......
                ...f1b1b1b1111dddf......
                ...fbfbffcf11fcddf......
                ......fcf111111bbf......
                .......ccbdb1b1fcf......
                .......fffbfbfdff.......
                ........ffffffff........
                ........fffffffffff.....
                .........fffffc111cf....
                .........fffff1b1b1f....
                ..........ffffbfbfbf....
                ...........ffff.........
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ....7.fd11111111df......
                ...7..fd11111111df......
                ...7..fd11111111df......
                ...7..fddd1111dddff.....
                ...77.fbdbfddfbdbfcf....
                ...777fcdcf11fcdcfbf....
                ....77fffbdb1bdffcf.....
                ....fcb1bcffffff........
                ....f1c1c1ffffff........
                ....fdfdfdfffff.........
                .....f.f.f..............
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd111111111f......
                ......fd11111111df......
                ......fd11111111df......
                ......fcdd1111ddcff.....
                .......fbcf11fcbfbbf....
                .......ffbdb1bdffff.....
                ........fcbfbfdf........
                ........ffffffff........
                ......ffffffffff........
                .....fcb1bcffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fdd111111ddf......
                ......fbdd1111dddf......
                ......fcdbfddfbdbf......
                .......fbcf11fcbfff.....
                .......ffb1111bcfbcf....
                ........fcdb1bdfbbbf....
                .......ffffffffffcf.....
                .....fcb1bcfffff........
                .....f1b1b1ffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            200,
            false
            )
            statusbar.value += -5
            pause(1000)
        }
    }
    Statusbar_death_tracker()
})
