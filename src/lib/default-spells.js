const DEFAULT_SPELL_LIST = [
  {
    index: "chill-touch",
    name: "Chill Touch",
    desc: ["You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target.",
        "If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn."],
    higher_level: "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    range: "120 feet",
    components: ["V", "S"],
    duration: "1 round",
    concentration: false,
    casting_time: "1 action",
    level: "Cantrip",
    save: "Ranged",
    isCast: false,
    isActive: false

  },
  {
    index: "claws-of-darkness",
    name: "Claws of Darkness",
    desc: ["You shape shadows into claws that grow from your fingers and drip inky blackness. You can make a melee spell attack with these claws that does 1d10 cold damage, and the claws have a reach of 10 feet."],
    higher_level: "This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
    range: "self",
    components: ["V", "S"],
    duration: "Up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "Cantrip",
    save: "Melee",
    isCast: false,
    isActive: false
  },
  {
    index: "douse-light",
    name: "Douse Light",
    desc: ["With a simple gesture, you are able to douse a single, small source of light within range. This spell extinguishes a torch, a candle, a lantern, or a light or dancing lights cantrip"],
    higher_level: '',
    range: "30 feet",
    components: ["V","S"],
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: "Cantrip",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "shadow-bite",
    name: "Shadow Bite",
    desc: ["You create a momentary needle of cold, sharp pain in a target creature. The target must make a successful Constitution saving throw or take 1d6 necrotic damage immediately and have its speed halved until the start of your next turn."],
    higher_level: "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    range: "60 feet",
    components: ["V", "S"],
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: "Cantrip",
    save: "CON Save",
    isCast: false,
    isActive: false
  },
  {
    index: "shadow-blindness",
    name: "Shadow Blindness",
    desc: ["Make a melee weapon attack against one creature within 5 feet of you. On a hit, the target suffers the weapon attack’s normal effects and the target's innate darkvision is negated for 1 round. This spell has no effect against darkvision that derives from a spell or a magic item. The target retains all of its other senses. When this spell ends, the creature’s natural darkvision returns."],
    higher_level: "",
    range: "5 feet",
    components: ["V", "S"],
    duration: "1 round",
    concentration: false,
    casting_time: "1 action",
    level: "Cantrip",
    save: "Melee",
    isCast: false,
    isActive: false
  },
  {
    index: "silouette",
    name: "Silouette",
    desc: ["You create a shadow play against a screen or wall. The surface can encompass up to 100 square feet. The number of creatures that can see the shadow play equals your Intelligence score. The shadowy figures make no sound but they can dance, run, move, kiss, fight, and so forth. Most of the figures are generic types—a rabbit, a dwarf— but a number of them equal to your Intelligence modifier can be recognizable as specific individuals."],
    higher_level: "",
    range: "Touch",
    components: ["V", "S"],
    duration: "Up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "Cantrip",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "black-ribbons",
    name: "Black Ribbons",
    desc: ["You pull pieces of the Shadow Realm into your own reality, causing a 20-foot cube to fill with inky ribbons that turn the area into difficult terrain and wrap around nearby creatures. Any creature that ends its turn in the area becomes restrained by the shadow ribbons until the end of its next turn unless it makes a successful Dexterity saving throw. Once a creature makes this saving throw successfully, it can't be restrained again by these black ribbons, but it's still affected by the difficult terrain."],
    higher_level: "",
    range: "40 feet",
    components: ["V", "S", "M", "A piece of ribbon"],
    duration: "Up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "1st",
    save: "DEX Save",
    isCast: false,
    isActive: false
  },
  {
    index: "cloak-of-shadows",
    name: "Cloak of Shadows",
    desc: ["You draw upon the endless Void to cloak yourself in shadow, giving you advantage on Dexterity (Stealth) checks for the duration of the spell."],
    higher_level: "",
    range: "Self",
    components: ["V"],
    duration: "Up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: "1st",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "cloying-darkness",
    name: "Cloying Darkness",
    desc: ["You reach out with a hand of decaying shadows. Make a ranged spell attack. If it hits, the target takes 2d8 necrotic damage and must make a Constitution saving throw. If it fails, its visual organs are enveloped in shadow until the start of your next turn, causing it to treat all lighting as if it's one step lower in intensity (it treats bright light as dim, dim light as darkness, and darkness as magical darkness). "],
    higher_level: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    range: "30 feet",
    components: ["V", "S"],
    duration: "1 round",
    concentration: false,
    casting_time: "1 action",
    level: "1st", 
    save: "Ranged",
    isCast: false,
    isActive: false
  },
  {
    index: "color-spray",
    name: "Color Spray",
    desc: ["A dazzling array of flashing, colored light springs from your hand. Roll 6 d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can’t see).",
  "Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected."],
    higher_level: "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.",
    range: "Self (15-foot cone)",
    components: ["V","S","M","a pinch of powder or sand that is colored red, yellow, and blue"],
    duration: "1 round",
    concentration: false,
    casting_time: "1 action",
    level: "1st",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "ray-of-enfeeblement",
    name: "Ray Of Enfeeblement",
    desc: ["A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.",
  "At the end of each of the target's turns, it can make a Constitution saving throw against the spell. On a success, the spell ends."],
    higher_level: "",
    range: "60 feet",
    components: ["V", "S"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "1st",
    save: "CON Save",
    isCast: false,
    isActive: false
  },
  {
    index: "shadow-armor",
    name: "Shadow Armor",
    desc: ["You siphon energy from the Shadow Realm to protect yourself from an immediate threat. As a reaction, you pull shadows around yourself to distort reality. The attack against you is made with disadvantage, and you have resistance to radiant damage until the start of your next turn."],
    higher_level: "",
    range: "self",
    components: ["V","S"],
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 reaction",
    level: "1st",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "shadow-hands",
    name: "Shadow Hands",
    desc: ["A freezing blast of shadow explodes out from you in a 10-foot cone. Any creature caught in the shadow takes 2d4 necrotic damage and is frightened; a successful Wisdom saving throw halves the damage and negates the fright. "],
    higher_level: "When you cast this spell using a spell slot of 2nd level or higher, the damage dealt by the attack increases by 2d4 for each slot level above 1st. ",
    range: "Self (10-foot cone)",
    components: ["V","S"],
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: "1st",
    save: "DEX Save",
    isCast: false,
    isActive: false
  },
  {
    index: "blindness-deafness",
    name: "Blindness / Deafness",
    desc: ["You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends. "],
    higher_level: " When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    range: "30 feet",
    components: ["V"],
    duration: "1 minute",
    concentration: false,
    casting_time: "1 action",
    level: "2nd",
    save: "CON Save",
    isCast: false,
    isActive: false
  },
  {
    index: "darkbolt",
    name: "Darkbolt",
    desc: ["You say a quick invocation to create a black nimbus around your hand, then hurl three rays of darkness at one or more targets in range. The rays can be divided between targets however you like. Make a ranged spell attack for each target (not each ray); each ray that hits does 1d10 cold damage. A target that was hit by any number of rays must make a successful Constitution saving throw or be unable to use a reaction until the start of its next turn."],
    higher_level: "When you cast this spell at 3rd level or higher, you create one additional ray for each level above 2nd.",
    range: "60 feet",
    components: ["V", "S"],
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: "2nd",
    save: "Ranged",
    isCast: false,
    isActive: false
  },
  {
    index: "darkness",
    name: "Darkness",
    desc: ["Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with dark-vision can’t see through this darkness, and non-magical light can’t illuminate it. If the point you choose is on an object you are holding or one that isn’t being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness. If any of this spell’s area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."],
    higher_level: "",
    range: "60 feet",
    components: ["V", "M", "bat fur and a drop of pitch or piece of coal"],
    duration: "Up to 10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: "2nd",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "dark-vision",
    name: "Dark Vision",
    desc: ["You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has Dark-vision out to a range of 60 feet."],
    higher_level: "",
    range: "Touch",
    components: ["V","S","M","either a pinch of dried carrot or an agate"],
    duration: "8 hours",
    concentration: false,
    casting_time: "1 action",
    level: "2nd",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "negative-image",
    name: "Negative Image",
    desc: ["You create a shadow-tunnel between your location and one other creature you can see within range. You and that creature instantly swap positions. If the target creature is unwilling to exchange places with you, it can resist the effect by making a Charisma saving throw. If the save succeeds, the spell has no effect. "],
    higher_level: "",
    range: "120 feet",
    components: ["V","S","M","a piece of reflective obsidian"],
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: "2nd",
    save: "CHA Save",
    isCast: false,
    isActive: false
  },
  {
    index: "shadow-puppets",
    name: "Shadow Puppets",
    desc: ["You are able to animate the shadow of a creature within range, causing it to attack the creature who cast it. Make a melee spell attack against the creature. If it hits, the target takes 2d8 psychic damage and must make a successful Intelligence saving throw or be stunned until the start of your next turn."],
    higher_level: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
    range: "60 feet",
    components: ["V", "S", "M", "a pinch of powdered lead"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "2nd",
    save: "INT Save",
    isCast: false,
    isActive: false
  },
  {
    index: "slither",
    name: "Slither",
    desc: ["You momentarily become a shadow (a humanoidshaped absence of light, not the undead creature of that name). You can slide under a door, through a keyhole, or through any other tiny opening. All of your equipment is transformed with you, and you can move up to your full speed during the spell’s duration. While in this form you have advantage on Dexterity (Stealth) checks made in darkness or dim light and you are immune to nonmagical bludgeoning, piercing, and slashing damage. You can dismiss this spell early by using an action to do so.",
  "If you return to your normal form while in a space too small for you (such as a mouse hole, sewer pipe, or the like), you take 4d6 force damage and are pushed to the nearest space big enough to hold you within 50 feet. If the distance is greater than 50 feet, you take 1d6 extra force damage for every additional 10 feet traveled."],
    higher_level: "When you cast this spell using a spell slot of 3rd level or higher, you can target an additional willing creature that you can touch for each slot level above 2nd.",
    range: "Self",
    components: ["V", "M", "ashes from a wooden statue of you, worth 50 gp"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "2nd",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "call-shadow-mastiff",
    name: "Call Shadow Mastiff",
    desc: ["You conjure a shadow mastiff from the Shadow Realm. This creature obeys your verbal commands to aid you in battle or to seek out a specific creature.",
  "The mastiff is friendly to you and your companions. Roll initiative for the mastiff; it acts on its own turn. It obeys simple, verbal commands from you (giving a command takes no action on your part), within its ability to act. The mastiff disappears when it drops to 0 hit points or when the spell ends."],
    higher_level: "",
    range: "60 feet",
    components: ["V", "S", "M", "a dog's tooth"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "3rd",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "feign-death",
    name: "Feign Death",
    desc: ["You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.",
  "For the spell’s duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target’s status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell’s effect, the disease and poison have no effect until the spell ends."],
    higher_level: "",
    range: "Touch",
    components: ["V", "S", "M", "a pinch of graveyard dirt"],
    duration: "1 hour",
    concentration: false,
    casting_time: "1 action",
    level: "3rd",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "fly",
    name: "Dark Wings (fly)",
    desc: ["You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall."],
    higher_level: "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
    range: "Touch",
    components: ["V", "S", "M", "a wing feather of a raven"],
    duration: "10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: "3rd",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "legion",
    name: "Legion",
    desc: ["You call down a legion of shadowy soldiers in a 10-foot cube. They are conjured from the Shadow Realm, and their features resemble a mockery of once-living creatures. Whenever a creature starts its turn inside the cube, within 5 feet of it, or enters the cube for the first time on its turn, the conjured shades make an attack using your melee spell modifier; if it hits, the target takes 3d8 necrotic damage. The space inside the cube is difficult terrain."],
    higher_level: "",
    range: "60 feet",
    components: ["V", "S", "M", "a toy solider"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "3rd",
    save: "Melee",
    isCast: false,
    isActive: false
  },
  {
    index: "shadow-trove",
    name: "Shadow Trove",
    desc: ["You paint a small door approximately 2 feet square on a hard surface to create a portal into the void of space. The portal “peels off” the surface you painted it on and follows you when you move, always floating in the air within 5 feet of you. An icy chill flows out from the portal. You can place up to 750 pounds of nonliving matter through the portal, where it stays suspended in the frigid void until you withdraw it. Items that are still inside the shadow trove when the duration ends spill onto the ground. You can designate a number of creatures up to your Intelligence modifier who have access to the shadow trove; only you and those creatures can move objects through the portal."],
    higher_level: "When you cast this spell using a spell slot of 4th level or higher, the duration increases by 2 hours for each slot level above 3rd.",
    range: "5 feet",
    components: ["V", "S", "M", "ink made from the blood of a raven"],
    duration: "1 hour",
    concentration: false,
    casting_time: "1 minute",
    level: "3rd",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "shield-of-star-and-shadow",
    name: "Shield of Star and Shadow",
    desc: ["You wrap yourself in a protective shroud of the night sky made from swirling shadows punctuated with twinkling motes of light. The shroud grants you resistance against either radiant or necrotic damage (choose when the spell is cast). You also shed dim light in a 10-foot radius. You can end the spell early by using an action to dismiss it. "],
    higher_level: "",
    range: "5 feet",
    components: ["V", "S", "M", "a star chart"],
    duration: "10 minutes",
    concentration: false,
    casting_time: "1 action",
    level: "3rd",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "black-hand",
    name: "Black Hand",
    desc: ["You gather the powers of darkness into your fist and fling paralyzing, dark flame at a target within 30 feet. With a successful ranged spell attack, this spell siphons vitality from the target into you. For the duration, the target has disadvantage and you have advantage on attacks, ability checks, and saving throws made with Strength, Dexterity, and Constitution. An affected target makes a Constitution saving throw (with disadvantage) at the end of its turn, ending the effect with a success."],
    higher_level: "",
    range: "30 feet",
    components: ["V", "S"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "4th",
    save: "Ranged",
    isCast: false,
    isActive: false
  },
  {
    index: "black-tentacles",
    name: "Black Tentacles",
    desc: ["Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.",
  "When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.",
  "A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself."],
    higher_level: "",
    range: "90 feet",
    components: ["V","S","M","a piece of tentacle from a giant octopus or a giant squid"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "4th",
    save: "DEX Save",
    isCast: false,
    isActive: false
  },
  {
    index: "night-terrors",
    name: "Night Terrors",
    desc: ["You amplify the fear of darkness that lurks in the heart of all creatures. Select a target point you can see within the spell's range. Every creature within 20 feet of that point becomes frightened of you until the start of your next turn and must make a successful Wisdom saving throw or also become paralyzed until your start of your next turn. Creatures immune to being frightened are not affected by night terrors."],
    higher_level: "",
    range: "120 feet",
    components: ["V","S","M","a crow's eye"],
    duration: "up to 1 round",
    concentration: true,
    casting_time: "1 action",
    level: "4th",
    save: "WIS Save",
    isCast: false,
    isActive: false
  },
  {
    index: "phantasmal-killer",
    name: "Phantasmal Killer",
    desc: ["You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the end of each of the target's turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends."],
    higher_level: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.",
    range: "120 feet",
    components: ["V","S"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "4th",
    save: "WIS Save",
    isCast: false,
    isActive: false
  },
  {
    index: "shadow-of-moil",
    name: "Shadow of Moil",
    desc: ["Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light.",
  "Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it 2d8 necrotic damage."],
    higher_level: "",
    range: "Self",
    components: ["V", "S", "M", "an undead eyeball encased in a gem worth at least 150 gp"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "4th",
    save: "None",
    isCast: false,
    isActive: false
  },
  {
    index: "shadow-monsters",
    name: "Shadow Monsters",
    desc: ["Your spell targets up to 2 creatures within range. Each creature must make a Wisdom saving throw. A creature automatically succeeds if it is immune to being frightened. If the saving throw fails, the creature perceives its allies as hostile, shadowy monsters, and it must make a melee attack against its nearest ally as its action on each of its turns while affected by this spell. An affected creature repeats the saving throw at the end of its turn, ending the effect on itself with a successful save."],
    higher_level: "If shadow monsters is cast with a 5th level or higher spell slot, one additional creature can be targeted for each slot level above 4th.",
    range: "Self",
    components: ["V","S","M","a doll"],
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: "4th",
    save: "WIS Save",
    isCast: false,
    isActive: false
  },
  {
    index: "cone-of-cold",
    name: "Cone of Cold",
    desc: ["A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws."],
    higher_level: "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
    range: "Self (60-foot cone)",
    components: ["V","S","M","a small crystal or glass cone"],
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: "5th",
    save: "CON Save",
    isCast: false,
    isActive: false
  },
  {
    index: "dark-dementing",
    name: "Dark Dementing",
    desc: ["A dark shadow creeps across the target's mind and leaves a small bit of shadow essence behind, triggering a profound fear of the dark. The target creature must make a Charisma saving throw. If it fails, the target becomes frightened of you for the duration. A frightened creature repeats the saving throw each time it takes damage, ending the effect on a success. While frightened this way, the creature will not willingly enter or attack into a space that isn't brightly lit. If it's in dim light or darkness, the creature must either move toward bright light or create its own (by lighting a lantern, casting a light spell, etc.)."],
    higher_level: "",
    range: "120 feet",
    components: ["V","S","M","a moonstone"],
    duration: "10 minutes",
    concentration: false,
    casting_time: "1 action",
    level: "5th",
    save: "CHA Save",
    isCast: false,
    isActive: false
  },
  {
    index: "dream",
    name: "Dream",
    desc: ["This spell shapes a creature’s dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don’t sleep, such as elves, can’t be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can’t take actions or move. If the target is asleep, the messenger appears in the target’s dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target’s dreams.",
  "You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target’s sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage.",
  "If you have a body part, lock of hair, clipping from a nail, or similar portion of the target’s body, the target makes its saving throw with disadvantage."],
    higher_level: "",
    range: "Special",
    components: ["V","S","M"],
    duration: "8 hours",
    concentration: false,
    casting_time: "1 minute",
    level: "5th",
    save: "None",
    isCast: false,
    isActive: false
  }



];

export default DEFAULT_SPELL_LIST;
