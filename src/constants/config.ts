interface ColorCasesType {
  [key: string]: string;
}

interface WinOrLoseCasesType {
  [key: string]: ColorCasesType;
}

const winOrLoseCases: WinOrLoseCasesType = {
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

const colorCases: ColorCasesType = {
  win: "green",
  draw: "black",
  lose: "red",
};

export { winOrLoseCases, colorCases };
