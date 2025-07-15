import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-8xl font-extrabold tracking-tight text-foreground">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold leading-tight text-muted-foreground">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Button asChild className="mt-6">
          <Link href="/" aria-label="Go back to homepage">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>
      </div>
    </section>
  );
}
