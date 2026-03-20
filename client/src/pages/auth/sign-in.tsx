import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignIn = () => {
  const { login, isLoggingIn } = useAuth();

  const formSchema = z.object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (isLoggingIn) return;
    login(values);
  };

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden p-6">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 gradient-mesh" />
      <div className="fixed inset-0 bg-background/40" />

      {/* Floating 3D orbs */}
      <div className="fixed top-[10%] left-[15%] w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-orb-1 pointer-events-none" />
      <div className="fixed bottom-[15%] right-[10%] w-96 h-96 rounded-full bg-purple-500/8 blur-3xl animate-orb-2 pointer-events-none" />
      <div className="fixed top-[50%] right-[30%] w-48 h-48 rounded-full bg-indigo-400/10 blur-2xl animate-float-slow pointer-events-none" />

      {/* Decorative 3D geometric shapes */}
      <motion.div
        className="fixed top-[20%] right-[20%] w-16 h-16 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm pointer-events-none"
        animate={{
          rotateX: [0, 45, 0],
          rotateY: [0, 45, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="fixed bottom-[25%] left-[20%] w-12 h-12 rounded-xl border border-purple-400/20 bg-purple-400/5 backdrop-blur-sm pointer-events-none"
        animate={{
          rotateX: [0, -30, 0],
          rotateZ: [0, 60, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="fixed top-[60%] left-[10%] w-8 h-8 rounded-lg border border-indigo-400/25 bg-indigo-400/5 backdrop-blur-sm pointer-events-none"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main card */}
      <motion.div
        className="relative z-10 w-full max-w-sm"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="glass border-white/20 dark:border-white/5 shadow-2xl shadow-primary/5">
          <CardHeader className="flex flex-col items-center justify-center gap-3 pb-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Logo />
            </motion.div>
            <div className="text-center space-y-1">
              <CardTitle className="text-xl font-bold">Welcome back</CardTitle>
              <p className="text-sm text-muted-foreground">
                Sign in to continue your conversations
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="johndoe@example.com"
                            className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="••••••••"
                            type="password"
                            className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    disabled={isLoggingIn}
                    type="submit"
                    className="w-full gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {isLoggingIn && <Spinner />} Sign In
                  </Button>
                </motion.div>

                <motion.div
                  className="text-center text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/sign-up"
                    className="font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignIn;
