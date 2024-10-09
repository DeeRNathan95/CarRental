import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
        <div className="hero">
          <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title"></h1>
          </div>
        </div>
    </main>
  );
}
