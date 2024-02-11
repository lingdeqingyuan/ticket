import { UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <UserButton afterSignOutUrl="/"/>
      <Button>click me</Button>
    </div>
  );
}
