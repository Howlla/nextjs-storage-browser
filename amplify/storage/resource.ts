import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "storage",
  access: (allow: any) => ({
    '2025/*': [allow.authenticated.to(['read', 'write', 'delete'])],
  })
});
