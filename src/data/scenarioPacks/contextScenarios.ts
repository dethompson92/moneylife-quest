import type { ScenarioEvent } from "../../types/game";
import { mapleContextScenarios } from "./context/generated/maple";
import { riverContextScenarios } from "./context/generated/river";
import { pineContextScenarios } from "./context/generated/pine";
import { acornContextScenarios } from "./context/generated/acorn";
import { mosaicContextScenarios } from "./context/generated/mosaic";
import { orbitContextScenarios } from "./context/generated/orbit";
import { cinderContextScenarios } from "./context/generated/cinder";
import { glassContextScenarios } from "./context/generated/glass";
import { tideContextScenarios } from "./context/generated/tide";

export const contextScenariosEvents: ScenarioEvent[] = [
  ...mapleContextScenarios,
  ...riverContextScenarios,
  ...pineContextScenarios,
  ...acornContextScenarios,
  ...mosaicContextScenarios,
  ...orbitContextScenarios,
  ...cinderContextScenarios,
  ...glassContextScenarios,
  ...tideContextScenarios
];
