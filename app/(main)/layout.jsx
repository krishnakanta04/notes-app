import TopNavbar from "@/components/TopNavbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <TopNavbar />
      {children}
    </div>
  );
}
