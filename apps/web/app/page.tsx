import { Admin } from "@repo/ui/admin";
import { Button } from "@repo/ui/button";
import { InputBoox } from "@repo/ui/input-boox";

export default function Page(): JSX.Element {
  return (
    <div>
      <Button appName="Web App" className="text-xl p-4">
        I'm from Web
      </Button>
      <Admin />
      <InputBoox />
    </div>
  );
}
