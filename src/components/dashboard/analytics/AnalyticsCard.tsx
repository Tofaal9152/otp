import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type AnalyticsCardProps = {
    analyticsData: {
        id: number;
        title: string;
        value: number | string;
        icon: React.ElementType;
        color: string;
    }[];
    };
const AnalyticsCard : React.FC<AnalyticsCardProps> = ({analyticsData}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      {analyticsData.map(({ id, title, value, icon: Icon, color }) => (
        <Card key={id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon className={`h-6 w-6 ${color}`} />
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalyticsCard;
