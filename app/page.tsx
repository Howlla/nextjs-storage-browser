'use client';
import React from "react";
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";
import { useRouter } from 'next/navigation';
import { Button, withAuthenticator } from "@aws-amplify/ui-react";
import {
  createStorageBrowser,
  createAmplifyAuthAdapter,
  elementsDefault,
} from "@aws-amplify/ui-react-storage/browser";
import "@aws-amplify/ui-react-storage/styles.css";
import "@aws-amplify/ui-react-storage/storage-browser-styles.css";

import config from "../amplify_outputs.json";

Amplify.configure(config);

function Example() {
  const router = useRouter();
  const { StorageBrowser } = createStorageBrowser({
    elements: elementsDefault,
    config: createAmplifyAuthAdapter({
      options: {
        defaultPrefixes: [
          (identityId: string) => `2025/${identityId}/`
        ],
      },
    }),
  });

  return (
    <>
      <Button
        marginBlockEnd="xl"
        size="small"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
      <Button
          size="small"
          onClick={() => router.push('/form')}
        >
          Go to Form
        </Button>
      <StorageBrowser />
    </>
  );
}

export default withAuthenticator(Example);
