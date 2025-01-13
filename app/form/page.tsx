'use client';
import React from "react";
import { Button,withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from 'next/navigation';

function FormPage() {
  const router = useRouter();
  return (
    <div className="flex h-screen bg-white">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
      <p> Please allow cookies and fill out the form below to get started. </p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRZ_gbme-xZuNP_94WoJeD0P6WBwdjFeBiIqdMeK1ya2QjtA/viewform?embedded=true" width="640" height="2009" >Loading…</iframe>
        <Button 
            marginBlockEnd="xl"
            size="small"
            onClick={() => router.push('/')}
        >
            File Explorer
        </Button>
      </div>
    </div>
  );
}

export default withAuthenticator(FormPage);