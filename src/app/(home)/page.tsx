"use client";
import { usePaginatedQuery } from "convex/react";
import Navbar from "./navbar";
import TemplatesGallery from "./template-gallery";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";
import { useSearchParam } from "@/hooks/use-search-param";

const Home = () => {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  if (results === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="fixed shrink-0 top-0 left-0 right-0 z-10 h-16 bg-white p-4 w-full">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
};

export default Home;
