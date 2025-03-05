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

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};

const truncateMessage = (message: string, maxLength: number = 30) => {
  return message.length > maxLength
    ? message.substring(0, maxLength) + "..."
    : message;
};

const AllSmsList = ({ smsData }: { smsData: any }) => {
  return (
    <div className="space-y-6 mt-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <MessageSquareMore size={25} />
        <span>SMS List</span>
      </h1>
      <Table>
        <TableCaption>List of generated API tokens.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Recipient</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Sent At</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {smsData?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center font-medium">
                No SMS data available
              </TableCell>
            </TableRow>
          ) : (
            smsData?.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.recipient}</TableCell>
                <TableCell>{truncateMessage(item.message)}</TableCell>
                <TableCell>{formatDate(item.created_at)}</TableCell>
                <TableCell>{formatDate(item.sent_at)}</TableCell>
                <TableCell className="text-center">{item.status}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
};

export default AllSmsList;
