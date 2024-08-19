import AppLayout from "@/src/components/app-layout";
import ProfileInfo from "@/src/components/profile-info";
import React from "react";

export default function Profile() {
  return (
    <AppLayout pageTitle="My Profile">
    
        <ProfileInfo />
     
    </AppLayout>
  );
}
