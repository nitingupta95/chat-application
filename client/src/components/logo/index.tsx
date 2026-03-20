import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  url?: string;
  showText?: boolean;
  imgClass?: string;
  textClass?: string;
}

const Logo = ({
  url = "/",
  showText = true,
  imgClass = "size-[30px]",
  textClass,
}: LogoProps) => (
  <Link to={url} className="flex items-center gap-2.5 w-fit group">
    <div
      className={cn(
        "relative flex items-center justify-center rounded-xl gradient-primary shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105",
        imgClass
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-[60%] h-[60%]"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="white" stroke="none" />
        <circle cx="12" cy="10" r="1" fill="white" stroke="none" />
        <circle cx="15" cy="10" r="1" fill="white" stroke="none" />
      </svg>
    </div>
    {showText && (
      <span
        className={cn(
          "font-bold text-lg tracking-tight bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent",
          textClass
        )}
      >
        Pulse
      </span>
    )}
  </Link>
);

export default Logo;
