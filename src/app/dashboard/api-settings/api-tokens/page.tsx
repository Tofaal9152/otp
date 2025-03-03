"use client";

import { useState } from "react";
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

export default function Page() {
  const [tokens, setTokens] = useState(initialTokens);
  const [copiedId, setCopiedId] = useState(null);

  // Generate API key
  const handleGenerateKey = () => {
    const newId = tokens.length + 1;
    const newToken = `17268577${newId}${Math.random().toString(36).slice(-4)}`;
    const hiddenToken = `********${newToken.slice(-4)}`;

    setTokens([...tokens, { id: newId, name: `New Token ${newId}`, createdBy: "Md Tofaal Ahmed", access: "User", token: hiddenToken, fullToken: newToken }]);
  };

  // Copy token
  const handleCopy = (id, fullToken) => {
    navigator.clipboard.writeText(fullToken);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Delete API key
  const handleDelete = (id) => {
    setTokens(tokens.filter((token) => token.id !== id));
  };

  return (
    <div className="container mx-auto max-w-4xl py-10 p-6">
      <h1 className="text-3xl font-bold">API Tokens</h1>
      <p className="mt-4 text-gray-600 dark:text-slate-400">
        Manage your API tokens securely.You can generate, copy, and delete API tokens from this page.

      </p>

      <Button onClick={handleGenerateKey} className="mt-4 bg-blue-600 text-white">
        Generate API Key
      </Button>

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
          {tokens.map((token) => (
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
                  {copiedId === token.id ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
                </Button>
                <Button
                  onClick={() => handleDelete(token.id)}
                  className="p-2 bg-red-600 text-white"
                >
                  <Trash size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-green-500">Total Tokens</TableCell>
            <TableCell className="text-right">{tokens.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
