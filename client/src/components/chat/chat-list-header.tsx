import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { NewChatPopover } from "./newchat-popover";

const ChatListHeader = ({ onSearch }: { onSearch: (val: string) => void }) => {
  return (
    <div className="px-4 py-4 border-b border-border/50">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold tracking-tight">Chats</h1>
        <div>
          <NewChatPopover />
        </div>
      </div>
      <div>
        <InputGroup className="bg-muted/50 text-sm rounded-xl border-0 transition-all duration-200 focus-within:bg-background focus-within:ring-2 focus-within:ring-primary/20 focus-within:shadow-lg focus-within:shadow-primary/5">
          <InputGroupAddon>
            <Search className="h-4 w-4 text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search conversations..."
            onChange={(e) => onSearch(e.target.value)}
            className="border-0 bg-transparent"
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default ChatListHeader;
