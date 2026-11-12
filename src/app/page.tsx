import Bulb from "@/components/bulb";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-start bg-[#050505] text-white shadow-[inset_0_0_250px_rgba(255,150,50,0.27)]">
      {/* top bar */}
      <div className="fixed top-0 left-0 z-20 h-[8vh] w-full border-b-2 border-[#3d2615] bg-[linear-gradient(#2e1c0f,#1a0f07)] shadow-[0_8px_30px_rgba(0,0,0,0.8)]" />

      <Bulb />

      {/* bottom bar */}
      <div className="fixed bottom-0 left-0 z-20 h-[8vh] w-full border-t-2 border-[#3d2615] bg-[linear-gradient(#1a0f07,#2e1c0f)] shadow-[0_-8px_30px_rgba(0,0,0,0.8)]" />
    </main>
  );
}
