import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import Toolbar from "./toolbar";

interface DocumentPageProps {
  params: Promise<{ documentId: string }>;
}

const Document = async ({ params }: DocumentPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-p[#F9FBFD]!">
      <div className="flex flex-col px-4 pt-2 items-start gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[]F9FBFD] print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Room>
          <Editor />
        </Room>
      </div>
    </div>
  );
};

export default Document;
