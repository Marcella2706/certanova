import Link from "next/link";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Challenges", href: "/challenges" },
  { name: "Profile", href: "/profile" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-full border-r bg-muted/10 p-4">
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
