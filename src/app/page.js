import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {

  return (
    <div>
      <h1>This is Next.js app</h1>
      <Counter></Counter>
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent">News</button>
      </Link>
    </div>
  );
};

export default HomePage;