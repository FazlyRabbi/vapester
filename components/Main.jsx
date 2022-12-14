import Sidebar from "./Sidebar";

export default function Main({ children }) {
  return (
    <div className="main pt-[5rem]">
      <main className="container mx-auto flex ">
        <div className="sidebar w-1/6 ">
          <Sidebar />
        </div>
        <div className="content w-5/6 ml-[3rem]">{children}</div>
      </main>
    </div>
  );
}
