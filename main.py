def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

monster: Sprite = None
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
list2 = [tilemap("""
        level6
    """),
    tilemap("""
        level7
    """),
    tilemap("""
        level8
    """),
    tilemap("""
        level9
    """),
    tilemap("""
        level10
    """)]
tiles.place_on_random_tile(mySprite, assets.tile("""
    transparency16
"""))

def on_on_update():
    mySprite.set_image(img("""
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
    """))
    if mySprite.vx < 0:
        mySprite.image.flip_x()
    if mySprite.vy < 0:
        mySprite.set_image(img("""
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
        """))
    elif mySprite.vy > 0:
        mySprite.set_image(img("""
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
        """))
game.on_update(on_on_update)

def on_update_interval():
    global monster
    monster = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    monster.set_velocity(1, 1)
    monster.set_position(27, 61)
    monster.follow(mySprite)
    monster.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(2000, on_update_interval)
