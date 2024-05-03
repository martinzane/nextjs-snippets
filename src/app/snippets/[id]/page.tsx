import db from "@/db";
import { notFound } from "next/navigation";

interface SnippetPageProps {
  params: { id: string };
}

export default async function SnippetPage(props: SnippetPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
