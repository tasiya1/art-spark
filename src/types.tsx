export type CardType =
| "composition"
| "color"
| "pattern"
| "palette"
| "shapes"
| "symbol"
| "object"
| "constraints"
| "texture"
| "shades"

type CardVariant = {
    title: string,
    imageUrl: string
}

export interface Card {
    type: CardType;
    label: string;
    uniqueLetter: string;
    variants: CardVariant[];
}

export const AllCards: Record<CardType, Card> = {
    composition: {
        type: "composition",
        label: "Composition",
        uniqueLetter: 'A',
        variants: [
            {title: "Diagonal Flow", imageUrl: "./src/media/cards/composition/diagonal.png"},
            {title: "Dominant / Submissive", imageUrl: "./src/media/cards/composition/dominant.png"},
            {title: "Emphasis", imageUrl: "./src/media/cards/composition/emphasis.png"},
            {title: "Focal Point", imageUrl: "./src/media/cards/composition/focalpoint.png"},
            {title: "Framing", imageUrl: "./src/media/cards/composition/framing.png"},
            {title: "Golden Ratio", imageUrl: "./src/media/cards/composition/goldenratio.png"},
            {title: "A Half", imageUrl: "./src/media/cards/composition/half.png"},
            {title: "A Third", imageUrl: "./src/media/cards/composition/third.png"},
            {title: "Rule of Odds", imageUrl: "./src/media/cards/composition/odd.png"},
            {title: "Pattern Recognition", imageUrl: "./src/media/cards/composition/pattern.png"},
            {title: "Rule of Thirds", imageUrl: "./src/media/cards/composition/ruleofthirds.png"}
        ]
    },
    color: {
        type: "color",
        label: "Color",
        uniqueLetter: 'B',
        variants: [
            {title: "Baby Blue", imageUrl: "./src/media/cards/colors/babyblue.png"},
            {title: "Brown", imageUrl: "./src/media/cards/colors/brown.png"},
            {title: "Burgundy", imageUrl: "./src/media/cards/colors/burgundy.png"},
            {title: "Chartreuse", imageUrl: "./src/media/cards/colors/chartreuse.png"},
            {title: "Cold Black", imageUrl: "./src/media/cards/colors/coldblack.png"},
            {title: "Cold Grey", imageUrl: "./src/media/cards/colors/coldgrey.png"},
            {title: "Dark Blue", imageUrl: "./src/media/cards/colors/darkblue.png"},
            {title: "Dark Red", imageUrl: "./src/media/cards/colors/darkred.png"},
            {title: "Emerald Green", imageUrl: "./src/media/cards/colors/emeraldgreen.png"},
            {title: "Green", imageUrl: "./src/media/cards/colors/green.png"},
            {title: "Hot Orange", imageUrl: "./src/media/cards/colors/hotorange.png"},
            {title: "Hot Pink", imageUrl: "./src/media/cards/colors/hotpink.png"},
            {title: "Indigo Blue", imageUrl: "./src/media/cards/colors/indigoblue.png"},
            {title: "Lavender", imageUrl: "./src/media/cards/colors/lavender.png"},
            {title: "Light Blue", imageUrl: "./src/media/cards/colors/lightblue.png"},
            {title: "Light Pink", imageUrl: "./src/media/cards/colors/lightpink.png"},
            {title: "Lilac", imageUrl: "./src/media/cards/colors/lilac.png"},
            {title: "Milk White", imageUrl: "./src/media/cards/colors/milkwhite.png"},
            {title: "Moss Green", imageUrl: "./src/media/cards/colors/mossgreen.png"},
            {title: "Ochre", imageUrl: "./src/media/cards/colors/ochre.png"},
            {title: "Orange", imageUrl: "./src/media/cards/colors/orange.png"},
            {title: "Peach", imageUrl: "./src/media/cards/colors/peach.png"},
            {title: "Red", imageUrl: "./src/media/cards/colors/red.png"},
            {title: "Teal", imageUrl: "./src/media/cards/colors/teal.png"},
            {title: "Terracotta", imageUrl: "./src/media/cards/colors/terracotta.png"},
            {title: "Yellow", imageUrl: "./src/media/cards/colors/yellow.png"}
        ]
    },
    pattern: {
        type: "pattern",
        label: "Pattern",
        uniqueLetter: 'C',
        variants: [
            {title: "Crisscross", imageUrl: "./src/media/cards/patterns/crisscross.jpg"},
            { title: "Chevron", imageUrl: "./src/media/cards/patterns/chevron.jpg" },
            { title: "Polka Dot", imageUrl: "./src/media/cards/patterns/polkadot.jpg" },
            { title: "Check", imageUrl: "./src/media/cards/patterns/check.jpg" },
            { title: "Harlequin", imageUrl: "./src/media/cards/patterns/harlequin.jpg" },
            { title: "Floral", imageUrl: "./src/media/cards/patterns/floral.jpg" },
            { title: "Leopard", imageUrl: "./src/media/cards/patterns/leopard.jpg" },
            { title: "Honeycomb", imageUrl: "./src/media/cards/patterns/honeycomb.jpg" },
            { title: "Stripes", imageUrl: "./src/media/cards/patterns/stripes.jpg" },
            { title: "Zebra", imageUrl: "./src/media/cards/patterns/zebra.jpg" },
            { title: "Puzzle", imageUrl: "./src/media/cards/patterns/puzzle.jpg" }

        ]
    },
    palette: {
        type: "palette",
        label: "Color Palette",
        uniqueLetter: 'D',
        variants: [
            {title: "Cold Tones", imageUrl: "./src/media/cards/palettes/cold.png"},
            {title: "Warm Tones", imageUrl: "./src/media/cards/palettes/warm.png"},
            {title: "Monochrome", imageUrl: "./src/media/cards/palettes/grey.png"},
            {title: "Monocolor", imageUrl: "./src/media/cards/palettes/monocolor.png"},
            {title: "Retro", imageUrl: "./src/media/cards/palettes/retro.png"},
            {title: "Sea Colors", imageUrl: "./src/media/cards/palettes/sea.png"},
            {title: "Nude Tones", imageUrl: "./src/media/cards/palettes/nude.png"},
            {title: "Lilac-Blue-Yellow", imageUrl: "./src/media/cards/palettes/lby.png"},
            {title: "Lilac-Orange", imageUrl: "./src/media/cards/palettes/lo.png"},
            {title: "Red-Teal-Ivory", imageUrl: "./src/media/cards/palettes/rtw.png"},
            {title: "Red-Teal-Yellow", imageUrl: "./src/media/cards/palettes/rty.png"},
            {title: "Yellow-Green-Purple", imageUrl: "./src/media/cards/palettes/ygp.png"}
        ]
    },
    shapes: {
        type: "shapes",
        label: "Shapes",
        uniqueLetter: 'E',
        variants: [
            {title: "Star", imageUrl: "./src/media/cards/shapes/star.png"},
            { title: "Heart", imageUrl: "./src/media/cards/shapes/heart.png" },
            { title: "Square", imageUrl: "./src/media/cards/shapes/square.png" },
            { title: "Triangle", imageUrl: "./src/media/cards/shapes/triangle.png" },
            { title: "Drop", imageUrl: "./src/media/cards/shapes/drop.png" },
            { title: "Arrow", imageUrl: "./src/media/cards/shapes/arrows.png" },
            { title: "Quatrefoil", imageUrl: "./src/media/cards/shapes/quatrefoil.png" },
            { title: "Spiral", imageUrl: "./src/media/cards/shapes/spiral.png" },
            { title: "Circle", imageUrl: "./src/media/cards/shapes/circle.png" }
        ]
    },
    symbol: {
        type: "symbol",
        label: "Symbol",
        uniqueLetter: 'F',
        variants: [
            {title: "A Heart And A Dagger", imageUrl: "./src/media/cards/symbols/heartdagger.webp"},
            { title: "Chain", imageUrl: "./src/media/cards/symbols/chains.jpg" },
            { title: "Lightning", imageUrl: "./src/media/cards/symbols/lightning.jpg" },
            { title: "Sun", imageUrl: "./src/media/cards/symbols/sun.webp" },
            { title: "Moon", imageUrl: "./src/media/cards/symbols/moon.png" },
            { title: "Key", imageUrl: "./src/media/cards/symbols/key.webp" },
            { title: "Crown", imageUrl: "./src/media/cards/symbols/crown.jpeg" },
            { title: "Butterfly", imageUrl: "./src/media/cards/symbols/butterfly.jpg" }
        ]
    },
    object: {
        type: "object",
        label: "Object",
        uniqueLetter: 'G',
        variants: [
            { title: "Chair", imageUrl: "./src/media/cards/objects/chair.webp" },
            { title: "Plant", imageUrl: "./src/media/cards/objects/plant.png" },
            { title: "Eyeglasses", imageUrl: "./src/media/cards/objects/eyeglasses.webp" },
            { title: "Flower", imageUrl: "./src/media/cards/objects/flower.png" },
            { title: "Bag", imageUrl: "./src/media/cards/objects/bag.png" },
            { title: "Lantern", imageUrl: "./src/media/cards/objects/lantern.jpg" },
            { title: "Road Sign", imageUrl: "./src/media/cards/objects/roadsign.png" },
            { title: "Snail", imageUrl: "./src/media/cards/objects/snail.png" },
            { title: "Mushroom", imageUrl: "./src/media/cards/objects/mushroom.png" },
            { title: "Candle", imageUrl: "./src/media/cards/objects/candle.png" },
            { title: "Umbrella", imageUrl: "./src/media/cards/objects/umbrella.png" },
            { title: "Cards", imageUrl: "./src/media/cards/objects/cards.png" },
            { title: "CD", imageUrl: "./src/media/cards/objects/cd.png" },
            { title: "Gloves", imageUrl: "./src/media/cards/objects/gloves.jpg" },
            { title: "Apple", imageUrl: "./src/media/cards/objects/apple.png" }
        ]
    },
    constraints: {
        type: "constraints",
        label: "Constraints",
        uniqueLetter: 'H',
        variants: [
            {title: "One Layer", imageUrl: "./src/media/cards/constraints/onelayer.svg"},
            { title: "15 minutes", imageUrl: "./src/media/cards/constraints/time.png" },
            { title: "No Undo", imageUrl: "./src/media/cards/constraints/undo.webp" },
            { title: "One Brush", imageUrl: "./src/media/cards/constraints/onebrush.png" },
            { title: "Flat Colors", imageUrl: "./src/media/cards/constraints/flatcolors.png" }
        ]
    },
    texture: {
        type: "texture",
        label: "Texture",
        uniqueLetter: 'I',
        variants: [
            { title: "Glass", imageUrl: "./src/media/cards/textures/glass.jpg" },
            { title: "Metal", imageUrl: "./src/media/cards/textures/metal.jpg" },
            { title: "Fabric", imageUrl: "./src/media/cards/textures/fabric.jpg" },
            { title: "Sand", imageUrl: "./src/media/cards/textures/sand.jpg" },
            { title: "Ice", imageUrl: "./src/media/cards/textures/ice.png" },
            { title: "Water", imageUrl: "./src/media/cards/textures/water.jpg" },
            { title: "Smoke", imageUrl: "./src/media/cards/textures/smoke.jpg" },
            { title: "Concrete", imageUrl: "./src/media/cards/textures/concrete.jpg" },
            { title: "Marble", imageUrl: "./src/media/cards/textures/marble.jpg" },
            { title: "Plastic", imageUrl: "./src/media/cards/textures/plastic.png" },
            { title: "Wood", imageUrl: "./src/media/cards/textures/wood.jpeg" },
            { title: "Latex", imageUrl: "./src/media/cards/textures/latex.jpg" },
            { title: "Stone", imageUrl: "./src/media/cards/textures/stone.jpg" },
            { title: "Pebbles", imageUrl: "./src/media/cards/textures/pebbles.jpg" },
            { title: "Seaglass", imageUrl: "./src/media/cards/textures/seaglass.jpg" }
        ]
    },
    shades: {
        type: "shades",
        label: "Shades",
        uniqueLetter: 'J',
        variants: [
            { title: "Solid", imageUrl: "./src/media/cards/shades/solid.png" },
            { title: "Cross", imageUrl: "./src/media/cards/shades/cross.png" },
            { title: "Dots", imageUrl: "./src/media/cards/shades/dots.png" },
            { title: "Pattern", imageUrl: "./src/media/cards/shades/pattern.png" },
            { title: "Realistic", imageUrl: "./src/media/cards/shades/realistic.png" },
            { title: "Shapes", imageUrl: "./src/media/cards/shades/shapes.png" },
            { title: "Solid w/ Edge", imageUrl: "./src/media/cards/shades/solidedge.png" },
            { title: "Strokes", imageUrl: "./src/media/cards/shades/strokes.png" }
        ]
    }
}