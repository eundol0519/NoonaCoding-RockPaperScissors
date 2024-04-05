const winOrLoseCases = {
    "👊": {
        "👊": "draw",
        "✌️": "win",
        "✋": "lose",
    },
    "✌️": {
        "👊": "lose",
        "✌️": "drwa",
        "✋": "win",
    },
    "✋": {
        "👊": "win",
        "✌️": "lose",
        "✋": "draw",
    },
};

const colorCases = {
    win: "green",
    draw: "black",
    lose: "red",
};

export { winOrLoseCases, colorCases }