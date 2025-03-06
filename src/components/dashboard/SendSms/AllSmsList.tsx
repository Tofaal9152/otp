"use client";
import AllSmsList from "@/actions/send-sms-otp/AllSmsList";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  selectAllSmsList,
  selectSendSmsRefresh,
  setAllSmsList,
  setSentSms,
} from "@/redux/allStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MessageSquareMore } from "lucide-react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const AllSmsListTable = () => {
  const dispatch = useAppDispatch();
  const refresh = useAppSelector(selectSendSmsRefresh);
  const allSmsList = useAppSelector(selectAllSmsList);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    AllSmsList(currentPage).then((e) => {
      dispatch(setAllSmsList(e));
      dispatch(setSentSms(e.count));
    });
  }, [dispatch, refresh, currentPage]);

  return (
    <div className="space-y-6 w-full px-4">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <MessageSquareMore size={25} />
        <span>SMS List</span>
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
        <Table className="overflow-x-auto w-full">
          <TableCaption>List of Sent SMS</TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead>Recipient</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Sent At</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allSmsList?.results.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center font-medium">
                  No SMS data available
                </TableCell>
              </TableRow>
            ) : (
              allSmsList?.results.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    {item.recipient}
                  </TableCell>
                  <TableCell>{truncateMessage(item.message)}</TableCell>
                  <TableCell>{formatDate(item.created_at)}</TableCell>
                  <TableCell>{formatDate(item.sent_at)}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      className={`${
                        item.status === "SENT" ? "bg-green-500" : item.status === "QUEUED" ? "bg-yellow-500" : "bg-red-500"
                      } text-white`}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          allSmsList={allSmsList}
        />
      </div>
    </div>
  );
};

export default AllSmsListTable;

// Helper functions
const truncateMessage = (message: string, maxLength: number = 30) => {
  return message.length > maxLength
    ? message.substring(0, maxLength) + "..."
    : message;
};
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};
