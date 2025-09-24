import type React from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Search, MoreVertical } from "lucide-react";

interface User {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
  unreadCount?: number;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "/professional-woman.png",
    lastMessage: "Hey! How are you doing?",
    timestamp: "2m ago",
    online: true,
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Bob Smith",
    avatar: "/casual-man.png",
    lastMessage: "Thanks for the help yesterday",
    timestamp: "1h ago",
    online: false,
  },
  {
    id: "3",
    name: "Carol Davis",
    avatar: "/business-woman.png",
    lastMessage: "See you at the meeting",
    timestamp: "3h ago",
    online: true,
    unreadCount: 1,
  },
  {
    id: "4",
    name: "David Wilson",
    avatar: "/professional-man.png",
    lastMessage: "Perfect! Let me know when you're ready",
    timestamp: "1d ago",
    online: false,
  },
  {
    id: "5",
    name: "Emma Brown",
    avatar: "/woman-friendly.jpg",
    lastMessage: "The project looks great!",
    timestamp: "2d ago",
    online: true,
  },
];

const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      senderId: "1",
      content: "Hey! How are you doing?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      content: "I'm doing great! Thanks for asking. How about you?",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: "3",
      senderId: "1",
      content: "I'm good too! Working on some exciting projects lately.",
      timestamp: "10:35 AM",
      isOwn: false,
    },
    {
      id: "4",
      senderId: "me",
      content: "That sounds awesome! I'd love to hear more about them.",
      timestamp: "10:36 AM",
      isOwn: true,
    },
  ],
  "2": [
    {
      id: "1",
      senderId: "2",
      content: "Thanks for the help yesterday",
      timestamp: "9:15 AM",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      content: "You're welcome! Happy to help anytime.",
      timestamp: "9:20 AM",
      isOwn: true,
    },
  ],
  "3": [
    {
      id: "1",
      senderId: "3",
      content: "See you at the meeting",
      timestamp: "8:45 AM",
      isOwn: false,
    },
  ],
};

export function ChatSystem() {
  const [selectedUser, setSelectedUser] = useState<User | null>(mockUsers[0]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() && selectedUser) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", message, "to user:", selectedUser.name);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-full bg-background">
      {/* Sidebar */}
      <div className="w-70 bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-sidebar-foreground mb-4">
            Chats
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Contacts List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-sidebar-accent ${
                  selectedUser?.id === user.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground"
                }`}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                    />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {user.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-sidebar rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold truncate">{user.name}</h3>
                    <span className="text-xs opacity-70">{user.timestamp}</span>
                  </div>
                  <p className="text-sm opacity-70 truncate">
                    {user.lastMessage}
                  </p>
                </div>
                {user.unreadCount && (
                  <div className="bg-sidebar-accent text-sidebar-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {user.unreadCount}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-border bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={selectedUser.avatar || "/placeholder.svg"}
                        alt={selectedUser.name}
                      />
                      <AvatarFallback>
                        {selectedUser.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {selectedUser.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-card rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-card-foreground">
                      {selectedUser.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {selectedUser.online ? "Online" : "Last seen recently"}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {(mockMessages[selectedUser.id] || []).map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${
                      msg.isOwn ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!msg.isOwn && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={selectedUser.avatar || "/placeholder.svg"}
                          alt={selectedUser.name}
                        />
                        <AvatarFallback>
                          {selectedUser.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-xs lg:max-w-md ${
                        msg.isOwn ? "order-first" : ""
                      }`}
                    >
                      <div
                        className={`rounded-lg px-4 py-2 ${
                          msg.isOwn
                            ? "bg-primary text-primary-foreground ml-auto"
                            : "bg-card text-card-foreground"
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                      </div>
                      <p
                        className={`text-xs text-muted-foreground mt-1 ${
                          msg.isOwn ? "text-right" : "text-left"
                        }`}
                      >
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-muted-foreground mb-2">
                Welcome to Chat
              </h2>
              <p className="text-muted-foreground">
                Select a conversation to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
