import { AppContent } from '@/components/app/app-content';
import { AppShell } from '@/components/app/app-shell';
import type { AppLayoutProps } from '@/types';
import { AppSidebarHeaderView } from '@/views/app/app-sidebar-header-view';
import { AppSidebarView } from '@/views/app/app-sidebar-view';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: AppLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AppSidebarView />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeaderView breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
