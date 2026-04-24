import { usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import type { AppVariant, SharedPageProps } from '@/types';

export interface AppShellProps {
    children: ReactNode;
    variant?: AppVariant;
}

export function AppShell({ children, variant = 'sidebar' }: AppShellProps) {
    const { sidebarOpen = true } = usePage<SharedPageProps>().props;

    if (variant === 'header') {
        return (
            <div className="flex min-h-screen w-full flex-col">{children}</div>
        );
    }

    return (
        <SidebarProvider defaultOpen={sidebarOpen}>{children}</SidebarProvider>
    );
}
