import AppLayout from "@/src/components/app-layout";
import SettingComp from "@/src/components/sttingcomp";
import { Select, Switch } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import React from "react";

export default function Setting() {
  return (
    <AppLayout pageTitle="Settings">
    <SettingComp/>
    </AppLayout>
  );
}
