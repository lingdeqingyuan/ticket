import { UserButton } from "@clerk/nextjs";
import { Button, Spacer } from "@nextui-org/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div>
      <header className="w-full h-14">
        <div className="fixed top-4 right-8 flex items-center justify-stretch">
          <ThemeSwitcher />
          <Spacer x={4}/>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <div className="flex items-center justify-center m-4">
        <main className="flex flex-col items-center justify-center w-full border-x-2 sm:w-full md:w-3/4 lg:w-1/2">
        </main>
      </div>
    </div>
  );
}
