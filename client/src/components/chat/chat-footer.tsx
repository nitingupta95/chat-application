import { z } from "zod";
import type { MessageType } from "@/types/chat.type";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Paperclip, Send, X } from "lucide-react";
import { Form, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import ChatReplyBar from "./chat-reply-bar";
import { useChat } from "@/hooks/use-chat";

interface Props {
  chatId: string | null;
  currentUserId: string | null;
  replyTo: MessageType | null;
  onCancelReply: () => void;
}
const ChatFooter = ({
  chatId,
  currentUserId,
  replyTo,
  onCancelReply,
}: Props) => {
  const messageSchema = z.object({
    message: z.string().optional(),
  });

  const { sendMessage, isSendingMsg } = useChat();

  const [image, setImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (imageInputRef.current) imageInputRef.current.value = "";
  };

  const onSubmit = (values: { message?: string }) => {
    if (isSendingMsg) return;
    if (!values.message?.trim() && !image) {
      toast.error("Please enter a message or select an image");
      return;
    }
    const payload = {
      chatId,
      content: values.message,
      image: image || undefined,
      replyTo: replyTo,
    };
    //Send Message
    sendMessage(payload);

    onCancelReply();
    handleRemoveImage();
    form.reset();
  };
  return (
    <>
      <div
        className="sticky bottom-0
       inset-x-0 z-[999]
       bg-card/80 backdrop-blur-xl border-t border-border/50 py-3
      "
      >
        {image && !isSendingMsg && (
          <div className="max-w-6xl mx-auto px-5 mb-2">
            <div className="relative w-fit group">
              <img
                src={image}
                className="object-contain h-16 bg-muted rounded-xl min-w-16"
              />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute -top-1.5 -right-1.5
                 bg-destructive text-white rounded-full
                 cursor-pointer !size-5 opacity-0 group-hover:opacity-100
                 transition-opacity shadow-md
                "
                onClick={handleRemoveImage}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-6xl px-4 mx-auto
            flex items-end gap-2
            "
          >
            <div className="flex items-center gap-1.5">
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={isSendingMsg}
                className="rounded-full border-border/50 hover:bg-accent/80 hover:scale-105 transition-all duration-200"
                onClick={() => imageInputRef.current?.click()}
              >
                <Paperclip className="h-4 w-4 text-muted-foreground" />
              </Button>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                disabled={isSendingMsg}
                ref={imageInputRef}
                onChange={handleImageChange}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              disabled={isSendingMsg}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <Input
                    {...field}
                    autoComplete="off"
                    placeholder="Type a message..."
                    className="min-h-[42px] bg-muted/50 border-border/30 rounded-xl
                    focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary/30
                    transition-all duration-200 placeholder:text-muted-foreground/50"
                  />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="icon"
              className="rounded-xl gradient-primary text-white shadow-md shadow-primary/20
              hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-200
              disabled:opacity-50"
              disabled={isSendingMsg}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>

      {replyTo && !isSendingMsg && (
        <ChatReplyBar
          replyTo={replyTo}
          currentUserId={currentUserId}
          onCancel={onCancelReply}
        />
      )}
    </>
  );
};

export default ChatFooter;
