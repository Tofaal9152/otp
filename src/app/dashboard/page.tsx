"use client";
import AllSmsList from "@/components/dashboard/analytics/AllSmsList";
import AnalyticsCard from "@/components/dashboard/analytics/AnalyticsCard";
import PieChartComponent from "@/components/dashboard/analytics/PieChart";
import { Button } from "@/components/ui/button";
import axios from "axios";

import { Activity, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const OverviewPage = () => {
  const [page, setpage] = useState(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/all-sms/`
  );
  const [smsData, setSmsData] = useState<any>([]);
  useEffect(() => {
    const fetchSms = async () => {
      try {
        const res = await axios.get(`${page}`, {
          withCredentials: true,
        });

        setSmsData(res.data);
      } catch (error) {
        console.error("Error fetching SMS data:", error);
        return null;
      }
    };
    fetchSms();
  }, [page,setpage]);

  console.log(smsData);
  console.log(page);

  const analyticsData = [
    {
      id: 1,
      title: "Available Messages",
      value: 5000,
      icon: MessageCircle,
      color: "text-green-500",
    },
    {
      id: 2,
      title: "Used Messages",
      value: 3000,
      icon: MessageCircle,
      color: "text-red-500",
    },

    {
      id: 3,
      title: "Sms Sent",
      value: smsData?.count,
      icon: Activity,
      color: "text-yellow-500",
    },
  ];
  const analyticsDataPieChart = [
    {
      id: 1,
      title: "Available Messages",
      value: 5000,
    },
    {
      id: 2,
      title: "Used Messages",
      value: 3000,
    },
    {
      id: 3,
      title: "Sms Sent",
      value: smsData?.count,
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold mb-6">📊 SMS Analytics Overview</h1>

      {/* Pie Chart */}
      <PieChartComponent analyticsDataPieChart={analyticsDataPieChart} />

      {/* Analytics Cards */}
      <AnalyticsCard analyticsData={analyticsData} />

      {/* All SMS List */}
      <AllSmsList smsData={smsData?.results} />
      {/* <div className="flex justify-between mt-6">
        <Button
          disabled={smsData?.previous === null}
          onClick={() => setpage(smsData?.previous)}
        >
          previous
        </Button>
        <Button
          disabled={smsData?.next === null}
          onClick={() => setpage(smsData?.next)}
        >
          next
        </Button>
      </div> */}
    </div>
  );
};

export default OverviewPage;
