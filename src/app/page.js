import ChatContainer from "@/components/Chat/ChatContainer";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen p-2">
      <Sidebar></Sidebar>
      <ChatContainer></ChatContainer>
    </main>
  );
}
