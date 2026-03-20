import type { MessageType } from "@/types/chat.type";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface Props {
  replyTo: MessageType | null;
  currentUserId: string | null;
  onCancel: () => void;
}
const ChatReplyBar = ({ replyTo, currentUserId, onCancel }: Props) => {
  if (!replyTo) return null;

  const senderName =
    replyTo.sender?._id === currentUserId ? "You" : replyTo.sender?.name;
  return (
    <div
      className="absolute bottom-16 left-0 right-0
    bg-card/95 backdrop-blur-xl border-t border-border/50
    animate-in slide-in-from-bottom duration-200
    pb-3 px-5
    "
    >
      <div
        className="flex flex-1 justify-between mt-2 p-3 text-sm
        border-l-3 border-l-primary
        bg-primary/5 dark:bg-primary/10 rounded-lg
        "
      >
        <div className="flex-1 min-w-0">
          <h5 className="font-semibold text-xs text-primary">{senderName}</h5>
          {replyTo?.image ? (
            <p className="text-muted-foreground text-xs mt-0.5">📷 Photo</p>
          ) : (
            <p
              className="max-w-4xl
            truncate text-ellipsis text-xs text-muted-foreground/80 mt-0.5"
            >
              {replyTo.content}
            </p>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onCancel}
          className="shrink-0 !size-6 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
        >
          <X size={14} />
        </Button>
      </div>
    </div>
  );
};

export default ChatReplyBar;
