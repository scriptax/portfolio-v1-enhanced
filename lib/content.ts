import { createClient } from "contentful";

export default function getContent() {
  const client = createClient({
    space: process.env.CONTENTFULL_SPACE_ID!,
    environment: process.env.CONTENTFULL_ENV_ID!,
    accessToken: process.env.CONTENTFULL_API_KEY!,
  });

  const data = client
    .getEntries({ include: 2 })
    .then((res) => res)
    .catch(console.error);

  // const res = await fetch(
  //   `https://cdn-mr.contentful.com/spaces/${process.env.CONTENTFULL_SPACE_ID}/environments/${process.env.CONTENTFULL_ENV_ID}/entries?access_token=${process.env.CONTENTFULL_API_KEY}&include=2`,
  //   { cache: "no-cache" }
  // );
  return data;
}
