
import { DarkThemeToggle, Footer as Foo } from "flowbite-react";

export default function Footer() {
  return (
    <Foo container>
      <Foo.Copyright href="/privacy" by="magma bank" year={2024} />
      <DarkThemeToggle />
      <Foo.LinkGroup>
        <Foo.Link href="#">About</Foo.Link>
        <Foo.Link href="#">Privacy Policy</Foo.Link>
        <Foo.Link href="#">Licensing</Foo.Link>
        <Foo.Link href="#">Contact</Foo.Link>
      </Foo.LinkGroup>
    </Foo>
  );
}
