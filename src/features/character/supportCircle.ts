import { clamp } from "../../lib/clamp";
import type { Rng } from "../../lib/rng";
import type { Relationship } from "../../types/game";

const familyNames = ["Caregiver", "Auntie", "Grandparent", "Older Cousin"];
const friendNames = ["Best Friend", "Neighbor Friend", "Club Friend", "Study Buddy"];
const mentorNames = ["Math Teacher", "Coach", "Career Mentor", "School Counselor"];
const petNames = ["Mochi", "Sunny", "Pixel", "Bean"];

export function createSupportCircle(rng: Rng): Relationship[] {
  return [
    {
      id: "family",
      name: rng.pick(familyNames),
      role: "family",
      icon: "🏠",
      closeness: rng.nextInt(58, 78),
      support: rng.nextInt(55, 75),
      note: "Can help you talk through tradeoffs, needs, and values."
    },
    {
      id: "friend",
      name: rng.pick(friendNames),
      role: "friend",
      icon: "🤝",
      closeness: rng.nextInt(52, 76),
      support: rng.nextInt(42, 68),
      note: "Influences social spending, fun plans, and peer pressure."
    },
    {
      id: "mentor",
      name: rng.pick(mentorNames),
      role: "mentor",
      icon: "🎓",
      closeness: rng.nextInt(38, 62),
      support: rng.nextInt(50, 78),
      note: "Can improve opportunity through school, career, and interview advice."
    },
    {
      id: "pet",
      name: rng.pick(petNames),
      role: "pet",
      icon: "🐾",
      closeness: rng.nextInt(60, 86),
      support: rng.nextInt(44, 70),
      note: "Adds joy and responsibility, including small care costs."
    }
  ];
}

export function updateRelationship(
  relationships: Relationship[],
  relationshipId: string,
  changes: { closeness?: number; support?: number }
): Relationship[] {
  return relationships.map((relationship) =>
    relationship.id === relationshipId
      ? {
          ...relationship,
          closeness: clamp(relationship.closeness + (changes.closeness ?? 0), 0, 100),
          support: clamp(relationship.support + (changes.support ?? 0), 0, 100)
        }
      : relationship
  );
}
