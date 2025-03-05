import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
const GenerateApiKey = () => {
  return (
    <form>
      <Button className="mt-4 bg-blue-600 hover:bg-blue-700  text-white">
        <Plus />
        Generate API Token
      </Button>
    </form>
  );
};

export default GenerateApiKey;
