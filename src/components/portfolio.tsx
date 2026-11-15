import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <section className="min-h-screen px-6 py-24">
          <h2 className="text-3xl font-bold">Projects</h2>
        </section>
      </main>
    </>
  );
}
