import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      Hello World
      <Pagination pageSize={10} itemCount={100} currentPage={3} />
    </div>
  );
}
