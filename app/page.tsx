import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);

  return (
    <div>
      Hello World
      <Pagination pageSize={10} itemCount={100} currentPage={page} />
    </div>
  );
}
