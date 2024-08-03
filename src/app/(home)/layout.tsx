import Header from "@/components/home/header";
import Footer from "@/components/home/layout/footer";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <main className="h-full">{children}</main>
      <div className="absolute bottom-0  w-full">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
