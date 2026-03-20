import { memo, useEffect, useState } from "react";
import { useChat } from "@/hooks/use-chat";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ArrowLeft, PenBoxIcon, Search, UsersIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Spinner } from "../ui/spinner";
import type { UserType } from "../../types/auth.type";
import AvatarWithBadge from "../avatar-with-badge";
import { Checkbox } from "../ui/checkbox";
import { useNavigate } from "react-router-dom";

export const NewChatPopover = memo(() => {
  const navigate = useNavigate();
  const { fetchAllUsers, users, isUsersLoading, createChat, isCreatingChat } =
    useChat();

  const [isOpen, setIsOpen] = useState(false);
  const [isGroupMode, setIsGroupMode] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  const toggleUserSelection = (id: string) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  const handleBack = () => {
    resetState();
  };

  const resetState = () => {
    setIsGroupMode(false);
    setGroupName("");
    setSelectedUsers([]);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    resetState();
  };

  const handleCreateGroup = async () => {
    if (!groupName.trim() || selectedUsers?.length === 0) return;
    const response = await createChat({
      isGroup: true,
      participants: selectedUsers,
      groupName: groupName,
    });
    setIsOpen(false);
    resetState();
    navigate(`/chat/${response?._id}`);
  };

  const handleCreateChat = async (userId: string) => {
    setLoadingUserId(userId);
    try {
      const response = await createChat({
        isGroup: false,
        participantId: userId,
      });
      setIsOpen(false);
      resetState();
      navigate(`/chat/${response?._id}`);
    } finally {
      setLoadingUserId(null);
      setIsOpen(false);
      resetState();
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <PenBoxIcon className="!h-5 !w-5 !stroke-[1.5]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-80 z-[999] p-0
         rounded-2xl min-h-[400px]
         max-h-[80vh] flex flex-col
         glass border-border/50 shadow-2xl shadow-black/10
        "
      >
        <div className="border-b border-border/50 p-3 flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            {isGroupMode && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="rounded-lg hover:bg-accent/80"
              >
                <ArrowLeft size={16} />
              </Button>
            )}
            <h3 className="text-base font-bold">
              {isGroupMode ? "New Group" : "New Chat"}
            </h3>
          </div>

          <InputGroup className="rounded-xl bg-muted/50 border-0 focus-within:ring-2 focus-within:ring-primary/20">
            <InputGroupAddon>
              {isGroupMode ? (
                <UsersIcon className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Search className="h-4 w-4 text-muted-foreground" />
              )}
            </InputGroupAddon>
            <InputGroupInput
              value={isGroupMode ? groupName : ""}
              onChange={
                isGroupMode ? (e) => setGroupName(e.target.value) : undefined
              }
              placeholder={isGroupMode ? "Enter group name" : "Search name"}
              className="border-0 bg-transparent"
            />
          </InputGroup>
        </div>

        <div
          className="flex-1 justify-center overflow-y-auto
         px-1.5 py-1.5 space-y-0.5
        "
        >
          {isUsersLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner className="w-6 h-6 text-primary" />
            </div>
          ) : users && users?.length === 0 ? (
            <div className="text-center text-muted-foreground py-8 text-sm">
              No users found
            </div>
          ) : !isGroupMode ? (
            <>
              <NewGroupItem
                disabled={isCreatingChat}
                onClick={() => setIsGroupMode(true)}
              />
              {users?.map((user) => (
                <ChatUserItem
                  key={user._id}
                  user={user}
                  isLoading={loadingUserId === user._id}
                  disabled={loadingUserId !== null}
                  onClick={handleCreateChat}
                />
              ))}
            </>
          ) : (
            users?.map((user) => (
              <GroupUserItem
                key={user._id}
                user={user}
                isSelected={selectedUsers.includes(user._id)}
                onToggle={toggleUserSelection}
              />
            ))
          )}
        </div>

        {isGroupMode && (
          <div className="border-t border-border/50 p-3">
            <Button
              onClick={handleCreateGroup}
              className="w-full gradient-primary text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 rounded-xl"
              disabled={
                isCreatingChat ||
                !groupName.trim() ||
                selectedUsers.length === 0
              }
            >
              {isCreatingChat && <Spinner className="w-4 h-4" />}
              Create Group
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
});
NewChatPopover.displayName = "NewChatPopover";

const UserAvatar = memo(({ user }: { user: UserType }) => (
  <>
    <AvatarWithBadge name={user.name} src={user.avatar ?? ""} />
    <div className="flex-1 min-w-0">
      <h5 className="text-[13px] font-medium truncate">{user.name}</h5>
      <p className="text-[11px] text-muted-foreground/70">
        Hey there! I&apos;m using Pulse
      </p>
    </div>
  </>
));

UserAvatar.displayName = "UserAvatar";

const NewGroupItem = memo(
  ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center
       gap-2.5 p-2.5 rounded-xl hover:bg-accent/80
       transition-all duration-200 text-left disabled:opacity-50
      "
    >
      <div className="bg-primary/10 p-2.5 rounded-xl">
        <UsersIcon className="size-4 text-primary" />
      </div>
      <span className="font-medium text-sm">New Group</span>
    </button>
  )
);

NewGroupItem.displayName = "NewGroupItem";

const ChatUserItem = memo(
  ({
    user,
    isLoading,
    disabled,
    onClick,
  }: {
    user: UserType;
    disabled: boolean;
    isLoading: boolean;
    onClick: (id: string) => void;
  }) => (
    <button
      className="
      relative w-full flex items-center gap-2.5 p-2.5
    rounded-xl hover:bg-accent/80
       transition-all duration-200 text-left disabled:opacity-50"
      disabled={isLoading || disabled}
      onClick={() => onClick(user._id)}
    >
      <UserAvatar user={user} />
      {isLoading && <Spinner className="absolute right-3 w-4 h-4 ml-auto text-primary" />}
    </button>
  )
);

ChatUserItem.displayName = "ChatUserItem";

const GroupUserItem = memo(
  ({
    user,
    isSelected,
    onToggle,
  }: {
    user: UserType;
    isSelected: boolean;
    onToggle: (id: string) => void;
  }) => (
    <label
      role="button"
      className={`w-full flex items-center gap-2.5 p-2.5
      rounded-xl hover:bg-accent/80
       transition-all duration-200 text-left cursor-pointer
       ${isSelected ? "bg-primary/5" : ""}
      `}
    >
      <UserAvatar user={user} />
      <Checkbox
        checked={isSelected}
        onCheckedChange={() => onToggle(user._id)}
        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
      />
    </label>
  )
);

GroupUserItem.displayName = "GroupUserItem";
