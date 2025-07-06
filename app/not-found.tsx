import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h4>404 | Not Found</h4>
      <Button asChild variant={"ghost"}>
        <Link href="/" prefetch={true}>
          Return
        </Link>
      </Button>
    </div>
  );
}
