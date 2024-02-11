import { UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      222
      <UserButton afterSignOutUrl="/"/>
      <Button>click me</Button>
    </div>
  );
}
