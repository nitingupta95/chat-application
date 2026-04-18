import { useEffect } from "react";
import { useAuth } from "./hooks/use-auth";
import AppRoutes from "./routes";
import { Spinner } from "./components/ui/spinner";
import Logo from "./components/logo";
import { useLocation } from "react-router-dom";
import { isAuthRoute } from "./routes/routes";

function App() {
  const { pathname } = useLocation();
  const { user, isAuthStatus, isAuthStatusLoading } = useAuth();
  const isAuth = isAuthRoute(pathname);
  const isPublic = pathname === "/";

  useEffect(() => {
    if (isAuth || isPublic) return;
    isAuthStatus();
  }, [isAuthStatus, isAuth, isPublic]);

  if (isAuthStatusLoading && !user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4 gradient-mesh">
        <div className="animate-float">
          <Logo imgClass="size-16" showText={false} />
        </div>
        <Spinner className="w-5 h-5 text-primary" />
      </div>
    );
  }

  return <AppRoutes />;
}

export default App;
