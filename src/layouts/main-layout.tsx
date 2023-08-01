import MainFooter from "@/components/footers/main-footer";
import MainHeader from "@/components/headers/main-header";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <main className="pt-18 lg:pt-26">
      <MainHeader />
      {children}
      <MainFooter />
    </main>
  );
};

export default MainLayout;
