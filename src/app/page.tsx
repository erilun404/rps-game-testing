import Image from "next/image";
import Header from "@/components/Header";
import RockPaperScissors from "@/components/RockPaperScissors";

export default function Home() {
  return (
   <main>
      <Header />
      <RockPaperScissors />
   </main>
  );
}
