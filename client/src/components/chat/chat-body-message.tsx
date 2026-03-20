import { memo } from "react";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import type { MessageType } from "@/types/chat.type";
import AvatarWithBadge from "../avatar-with-badge";
import { formatChatTime } from "@/lib/helper";
import { Button } from "../ui/button";
import { ReplyIcon } from "lucide-react";

interface Props {
  message: MessageType;
  onReply: (message: MessageType) => void;
}
const ChatMessageBody = memo(({ message, onReply }: Props) => {
  const { user } = useAuth();

  const userId = user?._id || null;
  const isCurrentUser = message.sender?._id === userId;
  const senderName = isCurrentUser ? "You" : message.sender?.name;

  const replySendername =
    message.replyTo?.sender?._id === userId
      ? "You"
      : message.replyTo?.sender?.name;

  const containerClass = cn(
    "group flex gap-2.5 py-2 px-4",
    isCurrentUser && "flex-row-reverse text-left"
  );

  const contentWrapperClass = cn(
    "max-w-[70%] flex flex-col relative",
    isCurrentUser && "items-end"
  );

  const messageClass = cn(
    "min-w-[180px] px-3.5 py-2.5 text-sm break-words transition-shadow duration-200",
    isCurrentUser
      ? "gradient-primary text-white rounded-2xl rounded-tr-md shadow-md shadow-primary/15"
      : "bg-card dark:bg-accent/80 border border-border/50 rounded-2xl rounded-tl-md shadow-sm"
  );

  const replyBoxClass = cn(
    `mb-1.5 p-2.5 text-xs rounded-lg border-l-3 !text-left`,
    isCurrentUser
      ? "bg-white/15 border-l-white/50 text-white/90"
      : "bg-muted/80 dark:bg-secondary/80 border-l-primary"
  );

  return (
    <div className={containerClass}>
      {!isCurrentUser && (
        <div className="flex-shrink-0 flex items-end mb-1">
          <AvatarWithBadge
            name={message.sender?.name || "No name"}
            src={message.sender?.avatar || ""}
            size="w-7 h-7"
          />
        </div>
      )}

      <div className={contentWrapperClass}>
        <div
          className={cn(
            "flex items-center gap-1",
            isCurrentUser && "flex-row-reverse"
          )}
        >
          <div className={messageClass}>
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <span
                className={cn(
                  "text-xs font-semibold",
                  isCurrentUser ? "text-white/90" : "text-foreground"
                )}
              >
                {senderName}
              </span>
              <span
                className={cn(
                  "text-[10px]",
                  isCurrentUser
                    ? "text-white/60"
                    : "text-muted-foreground/60"
                )}
              >
                {formatChatTime(message?.createdAt)}
              </span>
            </div>

            {/* ReplyToBox */}
            {message.replyTo && (
              <div className={replyBoxClass}>
                <h5 className="font-medium text-[11px]">{replySendername}</h5>
                <p
                  className={cn(
                    "font-normal max-w-[250px] truncate text-[11px] mt-0.5",
                    isCurrentUser
                      ? "text-white/70"
                      : "text-muted-foreground"
                  )}
                >
                  {message?.replyTo?.content ||
                    (message?.replyTo?.image ? "📷 Photo" : "")}
                </p>
              </div>
            )}

            {message?.image && (
              <img
                src={message?.image || ""}
                alt=""
                className="rounded-xl max-w-xs my-1"
              />
            )}

            {message.content && (
              <p className={cn(isCurrentUser ? "text-white/95" : "")}>
                {message.content}
              </p>
            )}
          </div>

          {/* Reply Icon Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onReply(message)}
            className="flex opacity-0 group-hover:opacity-100
            transition-all duration-200 rounded-full !size-7
            border-border/50 hover:bg-accent/80 hover:scale-110
            "
          >
            <ReplyIcon
              size={14}
              className={cn(
                "text-muted-foreground",
                isCurrentUser && "scale-x-[-1]"
              )}
            />
          </Button>
        </div>

        {message.status && (
          <span
            className="block
           text-[10px] text-muted-foreground/50 mt-0.5"
          >
            {message.status}
          </span>
        )}
      </div>
    </div>
  );
});

ChatMessageBody.displayName = "ChatMessageBody";

export default ChatMessageBody;
