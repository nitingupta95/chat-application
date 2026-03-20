import { useOtherUserAndGroup } from "@/lib/helper";
import { cn } from "@/lib/utils";
import type { ChatType } from "@/types/chat.type";
import { useLocation } from "react-router-dom";
import AvatarWithBadge from "../avatar-with-badge";
import { formatChatTime } from "../../lib/helper";

interface PropsType {
  chat: ChatType;
  currentUserId: string | null;
  onClick?: () => void;
}
const ChatListItem = ({ chat, currentUserId, onClick }: PropsType) => {
  const { pathname } = useLocation();
  const { lastMessage, createdAt } = chat;

  const { name, avatar, isOnline, isGroup } = useOtherUserAndGroup(
    chat,
    currentUserId
  );

  const isActive = pathname.includes(chat._id);

  const getLastMessageText = () => {
    if (!lastMessage) {
      return isGroup
        ? chat.createdBy === currentUserId
          ? "Group created"
          : "You were added"
        : "Send a message";
    }
    if (lastMessage.image) return "📷 Photo";

    if (isGroup && lastMessage.sender) {
      return `${lastMessage.sender._id === currentUserId
          ? "You"
          : lastMessage.sender.name
        }: ${lastMessage.content}`;
    }

    return lastMessage.content;
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        `w-full flex items-center gap-3 p-2.5 rounded-xl
         hover:bg-accent/80 transition-all duration-200 text-left
         group relative`,
        isActive &&
        "!bg-primary/8 dark:!bg-primary/15 shadow-sm"
      )}
    >
      {/* Active indicator bar */}
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 rounded-r-full gradient-primary" />
      )}

      <AvatarWithBadge
        name={name}
        src={avatar}
        isGroup={isGroup}
        isOnline={isOnline}
      />

      <div className="flex-1 min-w-0">
        <div
          className="
         flex items-center justify-between mb-0.5
        "
        >
          <h5
            className={cn(
              "text-sm font-semibold truncate",
              isActive && "text-primary"
            )}
          >
            {name}
          </h5>
          <span
            className="text-[11px]
           ml-2 shrink-0 text-muted-foreground/70
          "
          >
            {formatChatTime(lastMessage?.updatedAt || createdAt)}
          </span>
        </div>
        <p className="text-xs truncate text-muted-foreground/80 -mt-px">
          {getLastMessageText()}
        </p>
      </div>
    </button>
  );
};

export default ChatListItem;
