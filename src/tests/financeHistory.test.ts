import { describe, expect, it } from "vitest";
import { createNewGame, ageUp } from "../features/game/gameActions";
import { calculateNetWorth, syncFinanceHistory } from "../features/finance/financeEngine";
import { encodeReflectionCode, decodeReflectionCode } from "../features/summary/summaryGenerator";

describe("finance history and code encoding", () => {
  it("initializes game with a starting entry in history at age 12", () => {
    const game = createNewGame({ seed: "history-init" });
    expect(game.financeHistory).toBeDefined();
    expect(game.financeHistory.length).toBe(1);
    expect(game.financeHistory[0].age).toBe(12);
    expect(game.financeHistory[0].netWorth).toBe(calculateNetWorth(game.finances));
  });

  it("appends a new entry to history when aging up", () => {
    const game = createNewGame({ seed: "history-ageup" });
    const next = ageUp(game);
    expect(next.financeHistory.length).toBe(2);
    expect(next.financeHistory[1].age).toBe(game.character.age + 1);
  });

  it("syncFinanceHistory overwrites existing entry for the current age", () => {
    const game = createNewGame({ seed: "history-overwrite" });
    const netWorthBefore = game.financeHistory[0].netWorth;
    
    // Modify cash
    const modifiedState = {
      ...game,
      finances: {
        ...game.finances,
        cash: game.finances.cash + 100
      }
    };
    
    const synced = syncFinanceHistory(modifiedState);
    expect(synced.financeHistory.length).toBe(1);
    expect(synced.financeHistory[0].netWorth).toBe(netWorthBefore + 100);
  });

  it("encodes and decodes student metrics reversibly", () => {
    const game = createNewGame({ seed: "encode-decode" });
    
    // Set up specific metrics
    game.character.displayName = "Devon";
    game.finances.cash = 200;
    game.finances.checking = 100;
    game.finances.savings = 500;
    game.finances.debtTotal = 150;
    game.stats.creditScore = 750;
    game.achievements = ["ach-1", "ach-2", "ach-3"];
    
    // Calculate expected net worth: 200 + 100 + 500 + 0 investments + 0 assets - 150 debt = 650
    const nw = calculateNetWorth(game.finances);
    expect(nw).toBe(650);

    // Encode
    const code = encodeReflectionCode(game);
    expect(code.startsWith("MLQ-DEV-")).toBe(true);

    // Decode
    const result = decodeReflectionCode(code);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.nickname).toBe("DEV");
      expect(result.data.netWorth).toBe(650);
      expect(result.data.badges).toBe(3);
      expect(result.data.credit).toBe(750);
    }
  });

  it("handles null credit scores correctly in encoder/decoder", () => {
    const game = createNewGame({ seed: "encode-null-credit" });
    game.character.displayName = "Sam";
    game.stats.creditScore = null;

    const code = encodeReflectionCode(game);
    const result = decodeReflectionCode(code);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.nickname).toBe("SAM");
      expect(result.data.credit).toBeNull();
    }
  });
});
