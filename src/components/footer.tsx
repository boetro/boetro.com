import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-2xl mx-auto px-4 py-4 flex justify-center items-center space-x-6">
        <Link
          href="https://bsky.app/profile/boetro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          Bluesky
        </Link>
        <Link
          href="https://www.linkedin.com/in/caleb-van-dyke/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/boetro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
