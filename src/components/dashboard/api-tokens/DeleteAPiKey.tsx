"use client";
import { DeleteApiKeyAction } from "@/actions/api-key/DeleteApiToken";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useActionState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";

const DeleteAPiKeyButton = () => {
  const [state, action, isPending] = useActionState(DeleteApiKeyAction, {
    errors: {},
    success: false,
  });
  useEffect(() => {
    if (state.success) {
      toast.success("API Key Deleted Successfully!");
    } else if (state.errors?.formError) {
      toast.error("Error Deleting API Key");
    }
  }, [state.success, state.errors]);
  return (
    <form action={action}>
      <Button
        disabled={isPending}
        size={"sm"}
        className="bg-red-600 dark:bg-red-700 text-white"
      >
        <Trash size={16} />
      </Button>
    </form>
  );
};

export default DeleteAPiKeyButton;
