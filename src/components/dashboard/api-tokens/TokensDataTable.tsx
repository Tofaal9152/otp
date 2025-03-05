"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clipboard } from "lucide-react";
import DeleteAPiKeyButton from "./DeleteAPiKey";
import { useEffect, useState } from "react";
import axios from "axios";

const TokensDataTable = () => {
  const [apiKey, setApiKey] = useState<any>(null);
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/api-key/`,
          { withCredentials: true }
        );

        setApiKey(res?.data?.api_key);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTokens();
  }, []);

  return (
    <Table className="mt-6">
      <TableCaption>API Key</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Token</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!apiKey ? (
          <TableRow>
            <TableCell colSpan={2} className="text-center">
              No API Key found
            </TableCell>
          </TableRow>
        ) : (
          <TableRow>
            <TableCell>{apiKey}</TableCell>
            <TableCell className="text-right space-x-2 flex items-center justify-end">
              <CopyToken token={apiKey} />
              <DeleteAPiKeyButton />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TokensDataTable;

const CopyToken = ({ token }: { token: string }) => {
  return (
    <Button
      onClick={() => navigator.clipboard.writeText(token)}
      className="p-2"
      variant="outline"
    >
      <Clipboard size={16} />
    </Button>
  );
};
