"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import { Navbar } from "@/components/landing/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { MessageSquare, Clock, Send, User, ShieldCheck, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { createCustomerChat, getCustomerChat, getSocketUrl } from "@/lib/chatApi";

type PageState = "form" | "waiting" | "active" | "missed" | "error";

interface ChatData {
  chatId: string;
  welcomeMessage: string;
  missedMessage?: string;
  timerExpiresAt: string;
  responseTimeoutSeconds: number;
}

interface Message {
  _id: string;
  chatId: string;
  senderType: "customer" | "admin" | "system";
  text: string;
  createdAt: string;
}

export default function LiveChatPage() {
  const [pageState, setPageState] = useState<PageState>("form");
  const [chatData, setChatData] = useState<ChatData | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendingMsg, setSendingMsg] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (pageState !== "active") return;

    const socket = io(getSocketUrl(), {
      transports: ["websocket", "polling"],
    });
    socketRef.current = socket;

    socket.on("connect", () => {
      if (chatData?.chatId) {
        socket.emit("join_chat", chatData.chatId);
      }
    });

    socket.on("receive_message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [pageState, chatData?.chatId]);

  const startCountdown = useCallback((expiresAt: string) => {
    const tick = () => {
      const diff = Math.floor((new Date(expiresAt).getTime() - Date.now()) / 1000);
      if (diff <= 0) {
        setCountdown(0);
        return;
      }
      setCountdown(diff);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return interval;
  }, []);

  const pollChatStatus = useCallback(async (chatId: string) => {
    try {
      const res = await getCustomerChat(chatId);
      const data = res.data;
      setMessages(data.messages || []);
      if (data.chat.status === "active") {
        setPageState("active");
      } else if (data.chat.status === "missed") {
        setPageState("missed");
        setChatData((prev) => prev ? { ...prev, missedMessage: data.chat.lastMessage } : prev);
      }
    } catch {
      // ignore polling errors
    }
  }, []);

  useEffect(() => {
    if (pageState !== "waiting" || !chatData?.chatId) return;

    const interval = startCountdown(chatData.timerExpiresAt);
    const pollInterval = setInterval(() => pollChatStatus(chatData.chatId), 3000);

    return () => {
      clearInterval(interval);
      clearInterval(pollInterval);
    };
  }, [pageState, chatData, startCountdown, pollChatStatus]);

  useEffect(() => {
    if (countdown === 0 && pageState === "waiting") {
      pollChatStatus(chatData?.chatId || "");
    }
  }, [countdown, pageState, pollChatStatus, chatData?.chatId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: (formData.get("name") as string).trim(),
      email: (formData.get("email") as string).trim(),
      phone: (formData.get("phone") as string).trim(),
      message: (formData.get("message") as string).trim(),
    };

    try {
      const res = await createCustomerChat(payload);
      if (!res.success) {
        throw new Error(res.message || "Failed to start chat");
      }
      setChatData({
        chatId: res.data.chatId,
        welcomeMessage: res.data.welcomeMessage,
        timerExpiresAt: res.data.timerExpiresAt,
        responseTimeoutSeconds: res.data.responseTimeoutSeconds,
      });
      setMessages([
        {
          _id: "welcome",
          chatId: res.data.chatId,
          senderType: "system",
          text: res.data.welcomeMessage,
          createdAt: new Date().toISOString(),
        },
      ]);
      setPageState("waiting");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = async () => {
    const text = inputText.trim();
    if (!text || !chatData?.chatId || sendingMsg) return;

    setSendingMsg(true);
    try {
      if (socketRef.current?.connected) {
        socketRef.current.emit("send_message", {
          chatId: chatData.chatId,
          senderType: "customer",
          senderId: "customer",
          text,
        });
        setInputText("");
      }
    } finally {
      setSendingMsg(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatCountdown = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <Navbar />

      <main className="relative min-h-[78vh] overflow-hidden bg-white px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-black">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-700">
            <MessageSquare className="h-4 w-4" />
            Live Chat
          </div>
          <h1 className="text-[clamp(40px,6vw,60px)] font-bold leading-[1.05] tracking-tight mb-6 text-gray-900">
            Live Chat Support
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 mb-12">
            {pageState === "form" && "Have questions? Start a live chat with our support team."}
            {pageState === "waiting" && "Connecting you with an agent. Please wait a moment."}
            {pageState === "active" && "You are now connected with our support agent."}
            {pageState === "missed" && "All agents are currently busy."}
          </p>

          {pageState === "form" && (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 text-left shadow-xl">
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-800">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="Tell us what you need help with..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-sm font-semibold text-white no-underline shadow-sm transition-all hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    Start Chat
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {pageState === "waiting" && (
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 text-left shadow-xl">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Connecting you to an agent</h2>
                <p className="text-gray-600">{chatData?.welcomeMessage}</p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2.5 text-sm font-semibold text-amber-700">
                  <Clock className="h-4 w-4" />
                  <span>{countdown !== null ? formatCountdown(countdown) : "--:--"}</span>
                </div>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.senderType === "customer" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.senderType === "system" ? "bg-purple-50 border border-purple-200 text-purple-800" : msg.senderType === "customer" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900"}`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {countdown === 0 && (
                <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-amber-800">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm">The agent did not respond in time. Our team will contact you shortly.</p>
                </div>
              )}
            </div>
          )}

          {pageState === "active" && (
            <div className="bg-white border border-gray-200 rounded-[2rem] flex flex-col shadow-xl overflow-hidden" style={{ minHeight: "500px" }}>
              <div className="bg-purple-600 px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="text-left text-white">
                  <p className="font-semibold text-sm">Support Agent</p>
                  <p className="text-xs text-white/70">Online</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: "400px" }}>
                {messages.map((msg, i) => (
                  <div key={msg._id || i} className={`flex ${msg.senderType === "customer" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${msg.senderType === "customer" ? "bg-purple-600 text-white rounded-br-md" : msg.senderType === "system" ? "bg-purple-50 border border-purple-200 text-purple-800" : "bg-gray-100 text-gray-900 rounded-bl-md"}`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                      <p className="text-[10px] mt-1 opacity-60 text-right">
                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t px-4 py-3 flex items-center gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-50 border border-gray-300 rounded-full px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  disabled={sendingMsg}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || sendingMsg}
                  className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  {sendingMsg ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {pageState === "missed" && (
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 text-left shadow-xl">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">All agents are currently busy</h2>
                <p className="text-gray-600">
                  {chatData?.missedMessage || "Our team will contact you soon on the phone number you provided. Thank you for your patience."}
                </p>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto mb-8">
                {messages.map((msg, i) => (
                  <div key={i} className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-gray-100 text-gray-900">
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setPageState("form");
                  setChatData(null);
                  setMessages([]);
                  setCountdown(null);
                  setError(null);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-sm font-semibold text-white no-underline shadow-sm transition-all hover:bg-purple-700"
              >
                Start a New Chat
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {pageState === "error" && (
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 text-left shadow-xl">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h2>
                <p className="text-gray-600 mb-6">{error || "An unexpected error occurred. Please try again."}</p>
              </div>
              <button
                onClick={() => {
                  setPageState("form");
                  setError(null);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-sm font-semibold text-white no-underline shadow-sm transition-all hover:bg-purple-700"
              >
                Try Again
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </main>

      <FooterSection />
    </>
  );
}
