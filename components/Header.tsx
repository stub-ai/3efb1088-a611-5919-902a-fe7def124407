import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">CRM System</a>
      </Link>
      <nav>
        <Link href="/customers">
          <a className="mr-6">Customers</a>
        </Link>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </nav>
    </header>
  );
}