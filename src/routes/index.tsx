import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const canonicalOrigin = import.meta.env.PUBLIC_ORIGIN_URL as string;
  const notCanonicalOrigin = import.meta.env.PUBLIC_ALTERNATE_ORIGIN_URL as string;

  const canonicalUrl = canonicalOrigin + "/view/?id=42";
  const notCanonicalUrl = notCanonicalOrigin + "/view/?id=42";
  return (
    <>
      <h1>Hi 👋</h1>
      
      This link is not canonical: <Link href={notCanonicalUrl}>{notCanonicalUrl}</Link>
      <br />
      This link is canonical: <Link href={canonicalUrl}>{canonicalUrl}</Link>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
