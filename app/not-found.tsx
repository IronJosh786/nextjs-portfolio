import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/blur-fade";

export default function NotFound() {
  return (
    <BlurFade
      delay={0.15}
      className="min-h-screen flex flex-col justify-center items-center gap-2"
    >
      <h4>404 | Not Found</h4>
      <Button asChild variant={"ghost"}>
        <Link href="/" prefetch={true}>
          Return
        </Link>
      </Button>
    </BlurFade>
  );
}
