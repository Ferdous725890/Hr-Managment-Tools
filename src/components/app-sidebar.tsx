// components/Sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Header */}
      <SidebarHeader>
        <h2 className="text-lg font-bold">Dashboard</h2>
      </SidebarHeader>

      {/* Main Content */}
      <SidebarContent>
        <SidebarGroup>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-600">Dashboard</li>
            <li className="cursor-pointer hover:text-blue-600">Employees</li>
            <li className="cursor-pointer hover:text-blue-600">Requirement</li>
            <li className="cursor-pointer hover:text-blue-600">Training</li>
          </ul>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <p className="text-sm text-gray-500">© 2025</p>
      </SidebarFooter>
    </Sidebar>
  );
}
