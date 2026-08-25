addLayer("p", {
    name: "points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ccfff4",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Points", // Name of prestige currency
    baseResource: "Particles", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 32)) mult = mult.mul(3)
        if (hasUpgrade('p', 41)) mult = mult.mul(3)
        if (hasUpgrade('p', 24)) mult = mult.mul(upgradeEffect('p', 24))
        if (hasUpgrade('p', 43)) mult = mult.mul(upgradeEffect('p', 43))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "[P-01] Beginning",
            description: "<b>Doubles</b> your particle gain",
            cost: new Decimal(1)
        },
        12: {
            title: "[P-02] Boosting I",
            description: "Adds <b>1</b> to your particle base gain",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('p', 11)}
        },
        13: {
            title: "[P-03] Boosting II",
            description: "Adds <b>2</b> to your particle base gain",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade('p', 12)}
        },
        14: {
            title: "[P-04]<br>Scaling I",
            description: "Points boosts Particles",
            cost: new Decimal(15),
            effect() {return player.p.points.pow(0.5).add(1)},
            effectDisplay() {return 'x'+format(player.p.points.pow(0.5).add(1))},
            unlocked() {return hasUpgrade('p', 13)}
        },
        21: {
            title: "[P-05]<br>Scaling II",
            description: "Particles boost themselves",
            cost: new Decimal(25),
            effect() {return player.points.pow(0.25).add(1)},
            effectDisplay() {return 'x'+format(player.p.points.pow(0.25).add(1))},
            unlocked() {return hasUpgrade('p', 14)}
        },
        22: {
            title: "[P-06]<br>Multiplier I",
            description: "<b>Triples</b> your particle gain",
            cost: new Decimal(50),
            unlocked() {return hasUpgrade('p', 21)}
        },
        23: {
            title: "[P-07]<br>Boosting III",
            description: "Adds <b>5</b> to your particle base gain",
            cost: new Decimal(200),
            unlocked() {return hasUpgrade('p', 22)}
        },
        24: {
            title: "[P-08]<br>Scaling III",
            description: "Particles boost Points",
            effect() {return player.points.pow(0.13).add(1)},
            effectDisplay() {return 'x'+format(player.points.pow(0.13).add(1))},
            cost: new Decimal(750),
            unlocked() {return hasUpgrade('p', 23)}
        },
        31: {
            title: "[P-09]<br>Multiplier II",
            description: "<b>Quadruples</b> your particle gain",
            cost: new Decimal(2000),
            unlocked() {return hasUpgrade('p', 24)}
        },
        32: {
            title: "[P-10]<br>Multiplier III",
            description: "<b>Triples</b> your point gain",
            cost: new Decimal(10000),
            unlocked() {return hasUpgrade('p', 31)}
        },
        33: {
            title: "[P-11]<br>Scaling IV",
            description: "Particles boost themselves",
            cost: new Decimal(25000),
            effect() {return player.points.pow(0.1).add(1)},
            effectDisplay() {return 'x'+format(player.points.pow(0.1).add(1))},
            unlocked() {return hasUpgrade('p', 32)}
        },
        34: {
            title: "[P-12]<br>Boosting IV",
            description: "Adds <b>10</b> to your particle base gain",
            cost: new Decimal(75000),
            unlocked() {return hasUpgrade('p', 33)}
        },
        41: {
            title: "[P-13]<br>Multiplier IV",
            description: "<b>Triples</b> your point and particle gain",
            cost: new Decimal(300e3),
            unlocked() {return hasUpgrade('p', 34)}
        },
        42: {
            title: "[P-14]<br>Synergy I",
            description: "Particles x Points boost Particles",
            cost: new Decimal(1e6),
            effect() {return Decimal.mul(player.p.points, player.points).pow(0.15).add(1)},
            effectDisplay() {return 'x'+format(Decimal.mul(player.p.points, player.points).pow(0.15).add(1))},
            unlocked() {return hasUpgrade('p', 41)}
        },
        43: {
            title: "[P-15]<br>Synergy II",
            description: "Particles x Points boost Points",
            cost: new Decimal(5e6),
            effect() {return Decimal.mul(player.p.points, player.points).pow(0.175).add(1)},
            effectDisplay() {return 'x'+format(Decimal.mul(player.p.points, player.points).pow(0.175).add(1))},
            unlocked() {return hasUpgrade('p', 42)}
        },
        44: {
            title: "[P-16]<br>Unlock I",
            description: "Unlock a new layer,<br><h3>Rebirth</h3>",
            cost: new Decimal(20e6),
            unlocked() {return hasUpgrade('p', 43)}
        },
    },
})

addLayer("aiuleyfoiau", {
    name: "templayeet", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SKIBIDI", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#63741c",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "skibby points", // Name of prestige currency
    baseResource: "poopshit", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return false}
})

