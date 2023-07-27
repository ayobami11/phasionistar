import Header from '@/app/components/Header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default DashboardLayout;