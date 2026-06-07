import { clamp } from "../../lib/clamp";
import type { Rng } from "../../lib/rng";
import type { Relationship, RelationshipRole } from "../../types/game";

const familyNames = ["Caregiver", "Parent/Guardian", "Grandparent", "Auntie/Uncle"];

const relationshipDefaults: Record<
  RelationshipRole,
  Pick<Relationship, "id" | "name" | "role" | "icon" | "note"> & { closeness: number; support: number }
> = {
  family: {
    id: "family",
    name: "Parent/Guardian",
    role: "family",
    icon: "🏠",
    closeness: 66,
    support: 64,
    note: "Can help you talk through tradeoffs, needs, and values."
  },
  friend: {
    id: "friend",
    name: "New Friend",
    role: "friend",
    icon: "🤝",
    closeness: 52,
    support: 42,
    note: "Appeared through a story choice and can affect social spending, encouragement, and peer pressure."
  },
  mentor: {
    id: "mentor",
    name: "Trusted Mentor",
    role: "mentor",
    icon: "🎓",
    closeness: 42,
    support: 56,
    note: "Appeared through a school or career choice and can help with opportunities, applications, and planning."
  },
  pet: {
    id: "pet",
    name: "Family Pet",
    role: "pet",
    icon: "🐾",
    closeness: 60,
    support: 44,
    note: "Appeared through a life event and adds joy, responsibility, and care costs."
  }
};

export function createSupportCircle(rng: Rng): Relationship[] {
  return [
    {
      ...relationshipDefaults.family,
      name: rng.pick(familyNames),
      closeness: rng.nextInt(58, 78),
      support: rng.nextInt(55, 75)
    }
  ];
}

export function hasRelationship(relationships: Relationship[], relationshipId: string): boolean {
  return relationships.some((relationship) => relationship.id === relationshipId);
}

export function upsertRelationship(
  relationships: Relationship[],
  relationshipId: string,
  changes: { closeness?: number; support?: number }
): { relationships: Relationship[]; created: boolean; relationship: Relationship } {
  const existing = relationships.find((relationship) => relationship.id === relationshipId);
  if (existing) {
    const updated = {
      ...existing,
      closeness: clamp(existing.closeness + (changes.closeness ?? 0), 0, 100),
      support: clamp(existing.support + (changes.support ?? 0), 0, 100)
    };
    return {
      created: false,
      relationship: updated,
      relationships: relationships.map((relationship) => (relationship.id === relationshipId ? updated : relationship))
    };
  }

  const created = createDefaultRelationship(relationshipId, changes);
  return {
    created: true,
    relationship: created,
    relationships: [...relationships, created]
  };
}

export function updateRelationship(
  relationships: Relationship[],
  relationshipId: string,
  changes: { closeness?: number; support?: number }
): Relationship[] {
  return upsertRelationship(relationships, relationshipId, changes).relationships;
}

function createDefaultRelationship(
  relationshipId: string,
  changes: { closeness?: number; support?: number }
): Relationship {
  const role = roleForRelationshipId(relationshipId);
  const base = relationshipDefaults[role];
  return {
    ...base,
    id: relationshipId,
    closeness: clamp(base.closeness + (changes.closeness ?? 0), 0, 100),
    support: clamp(base.support + (changes.support ?? 0), 0, 100)
  };
}

function roleForRelationshipId(relationshipId: string): RelationshipRole {
  if (relationshipId === "family" || relationshipId.includes("guardian") || relationshipId.includes("caregiver")) return "family";
  if (relationshipId === "mentor" || relationshipId.includes("mentor") || relationshipId.includes("teacher") || relationshipId.includes("coach")) return "mentor";
  if (relationshipId === "pet" || relationshipId.includes("pet")) return "pet";
  return "friend";
}
