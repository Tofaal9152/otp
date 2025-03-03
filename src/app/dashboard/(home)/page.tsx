import AllSmsList from "@/components/dashboard/analytics/AllSmsList";
import AnalyticsCard from "@/components/dashboard/analytics/AnalyticsCard";
import PieChartComponent from "@/components/dashboard/analytics/PieChart";

import { Activity, MessageCircle } from "lucide-react";
const OverviewPage = () => {
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
      value: 8000,
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
      value: 8000,
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
      <AllSmsList />
    </div>
  );
};

export default OverviewPage;
