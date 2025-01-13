'use client';
import React from "react";
import { Button,withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from 'next/navigation';

function FormPage() {
  const router = useRouter();

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
      <Button 
        marginBlockEnd="xl"
        size="small"
        onClick={() => router.push('/')}
      >
        Back to Home
      </Button>
    </div>
  );
}

export default withAuthenticator(FormPage);

