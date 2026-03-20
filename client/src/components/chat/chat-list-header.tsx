import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { NewChatPopover } from "./newchat-popover";

const ChatListHeader = ({ onSearch }: { onSearch: (val: string) => void }) => {
  return (
    <div className="px-3 py-3 border-b border-border">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-semibold">Chat</h1>
        <div>
          {/* NewChatPopover */}
          <NewChatPopover />
        </div>
      </div>
      <div>
        <InputGroup className="bg-background text-sm">
          <InputGroupInput
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
          />
          <InputGroupAddon>
            <Search className="h-4 w-4 text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default ChatListHeader;
