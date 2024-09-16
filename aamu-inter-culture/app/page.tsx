import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the International Student Association
      </h1>
      <p className="text-xl mb-8">
        Connecting cultures at Alabama A&M University
      </p>
      <Link
        href="/about"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Learn More About ISA
      </Link>
    </div>
  );
}
