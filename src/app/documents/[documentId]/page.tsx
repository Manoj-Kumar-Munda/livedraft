import { Editor } from "./editor";
import Toolbar from "./toolbar";

interface DocumentPageProps {
  params: Promise<{ documentId: string }>;
}

const Document = async ({ params }: DocumentPageProps) => {
  const { documentId } = await params;
  return (
    <div className="">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default Document;
