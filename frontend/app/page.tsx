"use client";

// import { CardWithForm } from "@/components/custom/CardWithForm";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
//       <h1 className="text-6xl font-bold mb-6">Gooseberry Tart.</h1>
//       <CardWithForm />
//     </main>
//   );
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
  return null;
}