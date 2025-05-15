import React from "react";

const Pagination = ({
  page,
  totalPages,
  handleGoPreviousPage,
  handleGoNextPage,
}: {
  page: number;
  totalPages: number;
  handleGoPreviousPage: () => void;
  handleGoNextPage: () => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <label
        onClick={() => handleGoPreviousPage()}
        className="text-primary_color hover:underline cursor-pointer"
      >
        {"Précédent"}
      </label>

      <label className="border-[1px] border-[#ccc] p-3 rounded-sm">
        Page {page + 1} sur {totalPages}
      </label>
      <label
        onClick={() => handleGoNextPage()}
        className="text-primary_color hover:underline cursor-pointer"
      >
        Suivant
      </label>
    </div>
  );
};

export default Pagination;
