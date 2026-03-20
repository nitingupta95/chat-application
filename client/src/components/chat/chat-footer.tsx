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
       bg-card border-t border-border py-4
      "
      >
        {image && !isSendingMsg && (
          <div className="max-w-6xl mx-auto px-8.5">
            <div className="relative w-fit">
              <img
                src={image}
                className="object-contain h-16 bg-muted min-w-16"
              />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-px right-1
                 bg-black/50 text-white rounded-full
                 cursor-pointer
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
            className="max-w-6xl px-8.5 mx-auto
            flex items-end gap-2
            "
          >
            <div className="flex items-center gap-1.5">
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={isSendingMsg}
                className="rounded-full"
                onClick={() => imageInputRef.current?.click()}
              >
                <Paperclip className="h-4 w-4" />
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
                    placeholder="Type new message"
                    className="min-h-[40px] bg-background"
                  />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="icon"
              className="rounded-lg"
              disabled={isSendingMsg}
            >
              <Send className="h-3.5 w-3.5" />
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
