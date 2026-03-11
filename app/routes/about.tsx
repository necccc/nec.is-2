import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome/welcome";
import { Foo } from "~/components/Foo";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About page" }];
}

export default function Home() {
  return <Foo />;
}
