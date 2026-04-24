import { AppContent } from '@/components/app/app-content';
import { AppShell } from '@/components/app/app-shell';
import type { AppLayoutProps } from '@/types';
import { AppHeaderView } from '@/views/app/app-header-view';

export default function AppHeaderLayout({
    children,
    breadcrumbs,
}: AppLayoutProps) {
    return (
        <AppShell variant="header">
            <AppHeaderView breadcrumbs={breadcrumbs} />
            <AppContent variant="header">{children}</AppContent>
        </AppShell>
    );
}
