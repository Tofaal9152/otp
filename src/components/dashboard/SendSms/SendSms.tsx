"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SendSMS = () => {
  const [isBulk, setIsBulk] = useState(false);
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSendSMS = (e: React.FormEvent) => {
    e.preventDefault();
    const data = isBulk
      ? { message, recipients: recipient.split(",").map((num) => num.trim()) }
      : { message, recipient };
    console.log("📤 Sending SMS Data:", JSON.stringify(data, null, 2));
  };

  return (
    <section className="flex flex-col items-center justify-center w-full px-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Send SMS or OTP
        </h2>

        {/* Toggle for Single or Bulk SMS */}
        <div className="flex items-center justify-between mb-6 border-b pb-4">
          <Label className="text-gray-700 dark:text-gray-300">Single SMS</Label>
          <Switch checked={isBulk} onCheckedChange={setIsBulk} />
          <Label className="text-gray-700 dark:text-gray-300">Bulk SMS</Label>
        </div>

        <form onSubmit={handleSendSMS} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Message
            </Label>
            <Textarea
              placeholder="ক্লাউড এসএমএস বিডি তে আপনাকে স্বাগতম! Welcome to Cloud SMS BD."
              className="w-full dark:bg-gray-800 dark:text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {isBulk ? "Recipients (comma-separated)" : "Recipient"}
            </Label>
            <Input
              placeholder={isBulk ? "+8801760001377, +8801760001378" : "+8801760001377"}
              className="w-full dark:bg-gray-800 dark:text-white"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              {isBulk
                ? "Enter multiple phone numbers separated by commas."
                : "Enter a single phone number."}
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800 transition"
          >
            Send SMS
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SendSMS;
