import { Editor } from "./editor";

interface DocumentPageProps {
  params: Promise<{ documentId: string }>;
}

const Document = async ({ params }: DocumentPageProps) => {
  const { documentId } = await params;
  return (
    <div className="">
     
      <Editor />
    </div>
  );
};

export default Document;
