"use client";


const Pagination = ({
  totalPages,
  currentPage,
  setPage,
  page,
}: {
  totalPages: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}) => {

  return (
    <div className="flex gap-2 justify-center py-8">
      <button
        className="px-3 py-1 border hover:bg-main-primary text-[14px]"
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`px-3 py-1 border ${
              currentPage === page
                ? "bg-main-primary text-black"
                : "bg-white text-black"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        className="px-3 py-1 border hover:bg-main-primary text-[14px]"
        onClick={() => {
          if (page < totalPages) {
            setPage(page + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
