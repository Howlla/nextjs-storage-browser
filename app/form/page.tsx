'use client';
import React from "react";
import { Button,withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from 'next/navigation';

function FormPage() {
  const router = useRouter();
  return (
    
    <div className="flex h-screen bg-white">
        <Button 
            marginBlockEnd="xl"
            size="small"
            onClick={() => router.push('/')}
            >
            File Explorer
        </Button>
      <div className="flex-1 flex justify-center items-center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRZ_gbme-xZuNP_94WoJeD0P6WBwdjFeBiIqdMeK1ya2QjtA/viewform?embedded=true" width="640" height="1080" >Loading…</iframe>
      </div>
    </div>
  );
}

export default withAuthenticator(FormPage);

