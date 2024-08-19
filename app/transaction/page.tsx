import AppLayout from "@/src/components/app-layout";
import TransactionTable from "@/src/components/transaction-table";
import { TextInput } from "@mantine/core";
import { SearchNormal1 } from "iconsax-react";
import React from "react";

export default function Transaction() {
  return (
    <AppLayout pageTitle="Transactions">
      <TextInput
        styles={{
          wrapper: {
            display: "flex",
            height: "50px",
            border: "1px solid #DAD9DA",
            backgroundColor: "#fff",
            borderRadius: "10px",
            alignItems: "center",
            paddingInline: "16px",
            gap: "10px",
            width: "fit-content",
          },
          input: {
            borderRadius: "8px",
            border: "none",
          },
        }}
        leftSection={<SearchNormal1 size={24} color="#ABAEB5" />}
        placeholder="Search"
      />
      <TransactionTable />
    </AppLayout>
  );
}
