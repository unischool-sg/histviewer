import { Sidebar, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="p-4 text-xl font-bold">App Sidebar</div>
            </SidebarHeader>
            <div className="flex-1 p-4">
                {/* Add sidebar content here */}
                <ul>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-900">Dashboard</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-900">Profile</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-900">Settings</a></li>
                </ul>
            </div>
            <SidebarFooter>
                <div className="p-4 text-sm text-gray-500">© 2024 Your Company</div>
            </SidebarFooter>
        </Sidebar>
    );
}