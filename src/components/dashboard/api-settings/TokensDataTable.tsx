"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clipboard, ClipboardCheck, Trash } from "lucide-react";
import { useState } from "react";

const initialTokens = [
  {
    id: 1,
    name: "My Inbox Token",
    createdBy: "Md Tofaal Ahmed",
    access: "Inbox Admin",
    token: "********b646",
    fullToken: "1726857760b646",
  },
  {
    id: 2,
    name: "Demo Mailtrap Token",
    createdBy: "Md Tofaal Ahmed",
    access: "Domain Admin",
    token: "********bc6d",
    fullToken: "1726857761bc6d",
  },
];
const TokensDataTable = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const handleCopy = (id: number, fullToken: string) => {
    navigator.clipboard.writeText(fullToken);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };
  return (
    <Table className="mt-6">
      <TableCaption>List of generated API tokens.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Created By</TableHead>
          <TableHead>Access</TableHead>
          <TableHead className="text-center">Token</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {initialTokens.map((token) => (
          <TableRow key={token.id}>
            <TableCell className="font-medium">{token.name}</TableCell>
            <TableCell>{token.createdBy}</TableCell>
            <TableCell>{token.access}</TableCell>
            <TableCell className="text-center">{token.token}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button
                onClick={() => handleCopy(token.id, token.fullToken)}
                className="p-2"
                variant="outline"
              >
                {copiedId === token.id ? (
                  <ClipboardCheck size={16} />
                ) : (
                  <Clipboard size={16} />
                )}
              </Button>
              <Button className="p-2 bg-red-600 dark:bg-red-700 text-white">
                <Trash size={16} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} className="text-green-500">
            Total Tokens
          </TableCell>
          <TableCell className="text-right">{initialTokens.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TokensDataTable;
