import type { ReactNode } from 'react';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';

export interface AppLayoutProps {
    breadcrumbs?: BreadcrumbItem[];
    children: ReactNode;
}

export default function AppLayout({
    breadcrumbs = [],
    children,
}: AppLayoutProps) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            {children}
        </AppLayoutTemplate>
    );
}
