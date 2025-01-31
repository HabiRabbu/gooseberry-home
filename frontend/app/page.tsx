"use client"; // Required for client-side rendering

import { CardWithForm } from "@/components/custom/CardWithForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Gooseberry Tart</h1>
      <CardWithForm />
    </main>
  );
}
