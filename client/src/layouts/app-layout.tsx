import AppWrapper from "@/components/app-wrapper";
import ChatList from "@/components/chat/chat-list";
import useChatId from "@/hooks/use-chat-id";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const chatId = useChatId();
  return (
    <AppWrapper>
      <div className="h-full">
        {/* ChatList */}
        <div className={cn(chatId ? "hidden lg:block" : "block")}>
          <ChatList />
        </div>
        <div
          className={cn(
            "lg:!pl-95 pl-7",
            !chatId ? "hidden lg:block" : "block"
          )}
        >
          <Outlet />
        </div>
      </div>
    </AppWrapper>
  );
};

export default AppLayout;
