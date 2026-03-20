import Logo from "./logo";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  description?: string;
}

const EmptyState = ({
  title = "No chat selected",
  description = "Pick a chat or start a new one...",
}: Props) => {
  return (
    <Empty
      className="w-full h-full flex-1
    flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <EmptyHeader className="relative z-10">
        <EmptyMedia variant="icon">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="p-4 rounded-2xl gradient-primary shadow-lg shadow-primary/25">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-10 h-10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01" />
                <path d="M12 10h.01" />
                <path d="M16 10h.01" />
              </svg>
            </div>
          </motion.div>
        </EmptyMedia>
        <EmptyTitle className="text-xl font-bold mt-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          {title}
        </EmptyTitle>
        <EmptyDescription className="text-muted-foreground/80 text-sm max-w-[240px] mx-auto">
          {description}
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

export default EmptyState;
