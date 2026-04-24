import type { ReactElement } from 'react';
import type { Auth } from '@/types/auth';
import type { BreadcrumbItem } from '@/types/navigation';

export interface SharedPageProps {
    auth: Auth;
    name?: string;
    sidebarOpen?: boolean;
    [key: string]: unknown;
}

export interface PageLayoutConfig {
    breadcrumbs?: BreadcrumbItem[];
}

export interface AppPageComponent<Props = Record<string, never>> {
    (props: Props): ReactElement;
    layout?: PageLayoutConfig;
}