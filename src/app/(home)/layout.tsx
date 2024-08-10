import Header from "@/components/home/header";
import Footer from "@/components/home/layout/footer";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed top-0 w-full z-50 bg-white">
        <Header />
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
