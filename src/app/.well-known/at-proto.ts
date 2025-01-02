// app/.well-known/atproto-did.ts
export async function GET() {
  return new Response("did:plc:df5tmnvzvrangbbcf7uditym", {
    headers: { "Content-Type": "text/plain" },
  });
}
