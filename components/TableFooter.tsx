import React from "react";
import Pagination from "./basic/Pagination";
import Button from "./basic/Button";
import { File } from "lucide-react";

const TableFooter = ({
  page,
  totalPages,
  handleGoNextPage,
  handleGoPreviousPage,
  handleDownloadPdf,
}: {
  page: number;
  totalPages: number;
  handleGoPreviousPage: () => void;
  handleGoNextPage: () => void;
  handleDownloadPdf: () => void;
}) => {
  return (
    <div className="flex justify-between">
      <Pagination
        page={page}
        totalPages={totalPages}
        handleGoNextPage={handleGoNextPage}
        handleGoPreviousPage={handleGoPreviousPage}
      />
      <Button
        title="Générer le Pdf"
        icon={<File />}
        type="button"
        onClick={() => handleDownloadPdf()}
      />
    </div>
  );
};

export default TableFooter;
