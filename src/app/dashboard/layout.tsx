import Header from '@/app/components/Header';
import LogoutModal from '@/app/components/logout/LogoutModal';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>
                {children}

                <LogoutModal />
            </main>
        </>
    )
}

export default DashboardLayout;