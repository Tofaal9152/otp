"use client";
import { GenerateApiKeyAction } from "@/actions/api-key/GenerateApiToken";
import { Button } from "@/components/ui/button";
import { Loader, Plus } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
const GenerateApiKey = () => {
  const [state, action, isPending] = useActionState(GenerateApiKeyAction, {
    errors: {},
    success: false,
  });
  useEffect(() => {
    if (state.success) {
      toast.success("API Key Generated Successfully!");
    } else if (state.errors?.formError) {
      toast.error("Error Creating API Key");
    }
  }, [state.success, state.errors]);
  return (
    <form action={action}>
      <Button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
        disabled={isPending}
      >
        <Plus />
        {isPending && <Loader className="animate-spin" />}
        Generate API Key
      </Button>
    </form>
  );
};

export default GenerateApiKey;
