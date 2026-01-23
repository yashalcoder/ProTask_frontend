import Image from "next/image";
import AddTodo from "@/components/addTodo";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <AddTodo />
    </div>
  );
}
