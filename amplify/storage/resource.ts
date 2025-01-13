import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "storage",
  access: (allow: any) => ({
    '2025/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});
