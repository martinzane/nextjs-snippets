import db from "@/db";

export default async function HomePage() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>{snippet.title}</div>
  ));

  return <div>{renderedSnippets}</div>;
}
