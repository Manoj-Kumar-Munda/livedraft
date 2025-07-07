import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        </Link>
        <h3 className="text-xl">Docs</h3>
      </div>

      <SearchInput />

      <div className="flex gap-2 items-center pl-6">
        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterSelectPersonalUrl="/"
        />
        <UserButton />
      </div>
    </nav>
  );
}
