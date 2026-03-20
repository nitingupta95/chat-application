import { getOtherUserAndGroup } from "@/lib/helper";
import { PROTECTED_ROUTES } from "@/routes/routes";
import type { ChatType } from "@/types/chat.type";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AvatarWithBadge from "../avatar-with-badge";

interface Props {
  chat: ChatType;
  currentUserId: string | null;
}
const ChatHeader = ({ chat, currentUserId }: Props) => {
  const navigate = useNavigate();
  const { name, subheading, avatar, isOnline, isGroup } = getOtherUserAndGroup(
    chat,
    currentUserId
  );

  return (
    <div
      className="sticky top-0
    flex items-center gap-4 border-b border-border/50
    bg-card/80 backdrop-blur-xl px-4 z-50
    shadow-sm shadow-black/[0.03]
    "
    >
      <div className="h-16 flex items-center gap-3 flex-1">
        <button
          className="lg:hidden p-1.5 -ml-1 rounded-lg hover:bg-accent transition-colors"
          onClick={() => navigate(PROTECTED_ROUTES.CHAT)}
        >
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </button>

        <AvatarWithBadge
          name={name}
          src={avatar}
          isGroup={isGroup}
          isOnline={isOnline}
        />
        <div className="min-w-0 flex-1">
          <h5 className="font-semibold text-sm truncate">{name}</h5>
          <p
            className={`text-xs transition-colors ${isOnline
                ? "text-emerald-500 font-medium"
                : "text-muted-foreground/70"
              }`}
          >
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
