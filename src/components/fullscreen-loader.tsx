import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

interface FullScreenLoaderProps {
  label?: string;
  className?: string;
}

export function FullScreenLoader({ label, className }: FullScreenLoaderProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 flex flex-col items-center justify-center gap-2 ",
        className
      )}
    >
      <LoaderIcon className="size-6 text-muted-foreground animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
}
