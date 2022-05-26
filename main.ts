sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let monster: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 . . . 5 5 . . . . 
    . . . . . 5 5 . . . 5 5 . . . . 
    . . . . . 5 e f f f e 5 . . . . 
    . . . . e e f e e e f e e . . . 
    . . . e e e f f e f f e e e . . 
    . . . e e e f e e e f e e e . . 
    . . . e e e f f e f f e e e . . 
    . . . . e e f e e e f e e . . . 
    . . . . . . e f f f e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
let list = [
tilemap`level6`,
tilemap`level7`,
tilemap`level8`,
tilemap`level9`,
tilemap`level10`
]
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
info.setScore(0)
info.setLife(3)
game.onUpdate(function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . e e e e e 5 5 5 . . . . 
        . . . e f f f f f e 5 5 . . . . 
        . . . f e f e f e f . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . . f e f e f e f . . . . . . 
        . . . e f f f f f e 5 5 . . . . 
        . . . . e e e e e 5 5 5 . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e e e . . . . . . . . 
        `)
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 e f f f e 5 . . . . 
            . . . . e e f e e e f e e . . . 
            . . . e e e f f e f f e e e . . 
            . . . e e e f e e e f e e e . . 
            . . . e e e f f e f f e e e . . 
            . . . . e e f e e e f e e . . . 
            . . . . . . e f f f e . . . . . 
            `)
    } else if (mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e f f f e . . . . . 
            . . . . e e f e e e f e e . . . 
            . . . e e e f f e f f e e e . . 
            . . . e e e f e e e f e e e . . 
            . . . e e e f f e f f e e e . . 
            . . . . e e f e e e f e e . . . 
            . . . . . 5 e f f f e 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            `)
    }
})
game.onUpdateInterval(2000, function () {
    monster = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 7 2 2 2 7 2 2 . . . 
        . . . . 2 7 5 2 2 2 5 7 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 5 5 5 2 2 2 . . . 
        . . . . 2 2 5 2 2 2 5 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        `, SpriteKind.Enemy)
    monster.setPosition(27, 61)
    monster.follow(mySprite, 25)
    monster.setFlag(SpriteFlag.AutoDestroy, true)
})
