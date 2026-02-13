import DocsSidebar from "@/components/docs/DocsSidebar";
import Navbar from "@/components/landing/Navbar";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="flex pt-16 max-w-7xl mx-auto">
                <DocsSidebar />
                <main className="flex-1 min-w-0 py-8 px-8 md:px-12">
                    {children}
                </main>
            </div>
        </div>
    );
}
