import db from "@/db";
import Link from "next/link";

export default async function HomePage() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      className="flex justify-between items-center p-2 border rounded"
      href={`/snippets/${snippet.id}`}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <h1 className="text-xl bold">Snippet</h1>
        <Link href="/snippets/create" className="border p-2 border rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
