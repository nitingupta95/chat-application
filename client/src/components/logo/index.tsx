import { Link } from "react-router-dom";
import logoSvg from "@/assets/whop-logo.svg";
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
  <Link to={url} className="flex items-center gap-2 w-fit">
    <img src={logoSvg} alt="Whop" className={cn(imgClass)} />
    {showText && (
      <span className={cn("font-semibold text-lg leading-tight", textClass)}>
        Whop.
      </span>
    )}
  </Link>
);

export default Logo;
