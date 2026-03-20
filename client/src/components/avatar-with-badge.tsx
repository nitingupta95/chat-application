import groupImg from "@/assets/group-img.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  src?: string;
  size?: string;
  isOnline?: boolean;
  isGroup?: boolean;
  className?: string;
}

const AvatarWithBadge = ({
  name,
  src,
  isOnline,
  isGroup = false,
  size = "w-9 h-9",
  className,
}: Props) => {
  const avatar = isGroup ? groupImg : src || "";

  return (
    <div
      className="relative
    shrink-0"
    >
      <Avatar className={cn(size, "ring-2 ring-background transition-transform duration-200")}>
        <AvatarImage src={avatar} className="object-cover" />
        <AvatarFallback
          className={cn(
            `bg-gradient-to-br from-primary/20 to-purple-500/20
         text-primary font-semibold text-xs
        `,
            className && className
          )}
        >
          {name?.charAt(0)?.toUpperCase()}
        </AvatarFallback>
      </Avatar>

      {isOnline && !isGroup && (
        <span
          className="absolute
          bottom-0
          right-0
          h-2.5 w-2.5 rounded-full
          border-2 border-background
          bg-emerald-500
          animate-online-pulse
          "
        />
      )}
    </div>
  );
};

export default AvatarWithBadge;
