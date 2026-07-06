import type { BaseComponentProps } from "@/types";
import { SkipToContent } from "@/components/shared";
import { Footer } from "./footer";
import { Header } from "./header";

export function RootShell({ children }: BaseComponentProps) {
  return (
    <>
      <SkipToContent />
      <Header />
      <div id="main-content">{children}</div>
      <Footer />
    </>
  );
}
