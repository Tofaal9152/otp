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
import { MessageSquareMore } from "lucide-react";

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
const AllSmsList = () => {
  return (
    <div className="space-y-6 mt-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <MessageSquareMore size={"25"} />
        <span>SMS List</span>
      </h1>
      <Table>
        <TableCaption> List of generated API tokens.</TableCaption>
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
              <TableCell className="text-right space-x-2">asd</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
};

export default AllSmsList;
