import Navbar from "./partial/Nabvar";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="mt-4 mb-4">{children}</div>
        </>
    );
};

export default Layout;
