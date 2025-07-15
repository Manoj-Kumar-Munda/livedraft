"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import Toolbar from "./toolbar";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ preloadedDocument }: DocumentProps) => {
  // initial load is done with the preloadQuery in page.tsx server component after that to have real-time update in the client we will use usePreloadQuery hook to keep it sync with changes made after initial load.
  const document = usePreloadedQuery(preloadedDocument);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="min-h-screen grid place-content-center">
        Please open it on desktop for better experience
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-p[#F9FBFD]!">
      <Room>
        <div className="flex flex-col px-4 pt-2 items-start gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[]F9FBFD] print:hidden">
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor initialContent={document.initialContent} />
        </div>
      </Room>
    </div>
  );
};
