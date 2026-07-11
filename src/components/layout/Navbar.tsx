import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold text-lg text-[#16262f] dark:text-[#FDEEE4]"
        >
          Hiruy Tiku
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}