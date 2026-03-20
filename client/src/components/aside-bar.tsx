import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "./theme-provider";
import { isUserOnline } from "@/lib/helper";
import Logo from "./logo";
import { PROTECTED_ROUTES } from "@/routes/routes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import AvatarWithBadge from "./avatar-with-badge";

const AsideBar = () => {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();

  const isOnline = isUserOnline(user?._id);

  return (
    <aside
      className="
  top-0 fixed inset-y-0
  w-[60px] left-0 z-[9999]
  h-svh gradient-primary shadow-xl shadow-primary/20"
    >
      <div
        className="
       w-full h-full px-1.5 pt-3 pb-6 flex flex-col
       items-center justify-between"
      >
        <Logo
          url={PROTECTED_ROUTES.CHAT}
          imgClass="size-8 !bg-white/20 !shadow-none"
          textClass="text-white"
          showText={false}
        />

        <div
          className="
         flex flex-col items-center gap-4
        "
        >
          <Button
            variant="outline"
            size="icon"
            className="border-0 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun
              className="
              h-[1.1rem]
              w-[1.1rem]
              scale-100
              rotate-0
              transition-all dark:scale-0 dark:-rotate-90
            "
            />
            <Moon
              className="
             absolute
              h-[1.1rem]
              w-[1.1rem]
              scale-0
              rotate-90
              transition-all dark:scale-100
              dark:-rotate-0
              "
            />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                role="button"
                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <AvatarWithBadge
                  name={user?.name || "unKnown"}
                  src={user?.avatar || ""}
                  isOnline={isOnline}
                  className="!bg-white/90 !text-primary ring-2 ring-white/30"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48 rounded-xl z-[99999] glass border-border/50 shadow-xl"
              align="end"
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={logout}
                className="rounded-lg cursor-pointer focus:bg-destructive/10 focus:text-destructive"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
