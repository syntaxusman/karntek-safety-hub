import { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi, I'm the Karntek assistant. Ask me about fire risk assessments, FRAEWs or building safety cases.",
    },
  ]);

  function send() {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      {
        from: "bot",
        text: "Thanks — a Karntek consultant will pick this up. In the meantime you can request a call via our contact page.",
      },
    ]);
    setDraft("");
  }

  return (
    <div className="fixed right-5 bottom-5 z-50 print:hidden">
      {open ? (
        <div className="mb-3 flex h-96 w-[min(22rem,calc(100vw-2.5rem))] flex-col border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between bg-ink px-4 py-3">
            <span className="heading text-xs tracking-[0.2em] text-ink-foreground">
              Karntek Assistant
            </span>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
              <X className="h-4 w-4 text-ink-foreground" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <p
                key={index}
                className={
                  message.from === "bot"
                    ? "max-w-[85%] bg-muted p-3 text-sm"
                    : "ml-auto max-w-[85%] bg-primary p-3 text-sm text-primary-foreground"
                }
              >
                {message.text}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && send()}
              maxLength={500}
              placeholder="Type a message…"
              className="h-10 flex-1 border border-input px-3 text-sm outline-none focus:border-primary"
            />
            <button
              type="button"
              aria-label="Send message"
              onClick={send}
              className="bg-primary p-2.5 text-primary-foreground"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  );
}