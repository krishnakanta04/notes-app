import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function JoiningPage() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2">
      <p>Join</p>
      <p className="text-9xl font-chillax">notebox</p>
      <p>Enjoy note taking with friends</p>
      <Button
        size="lg"
        className="bg-black text-white dark:bg-white dark:text-black mt-2"
        as={Link}
        href="/"
      >
        Continue
      </Button>
    </div>
  );
}
