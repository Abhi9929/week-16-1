import { Admin } from "@repo/ui/admin";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <>
      <Button appName="Doc App" children="I'm from doc" />
      <Admin />
    </>
  );
}
