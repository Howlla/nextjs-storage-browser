import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "storage-browser-test",
  access: (allow: any) => ({
    '2025/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});
