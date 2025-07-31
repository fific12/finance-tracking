import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import useServerDarkMode from "@/hooks/useServerDarkMode";

async function PageHeader({ className }) {
  const theme = await useServerDarkMode()

  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href="/dashboard"
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance App
      </Link>

      <div className="flex items-center space-x-4">
        <div>
          <DarkModeToggle defaultMode={theme} />
        </div>
        <div>User Dropdown</div>
      </div>
    </header>
  );
}

export default PageHeader;
