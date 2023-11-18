import type { MetaFunction } from "@remix-run/node";
import { WelcomeScreen } from "~/components/welcome-screen/welcome-screen";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <WelcomeScreen />;
}
