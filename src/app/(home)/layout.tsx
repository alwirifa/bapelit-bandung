import Header from "@/components/home/header";


type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
};

export default DashboardLayout;
