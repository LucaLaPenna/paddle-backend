import type { ReactNode } from 'react';
import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import type { AuthLayoutProps } from '@/types';

export default function AuthLayout({
    title = '',
    description = '',
    children,
}: AuthLayoutProps & { children: ReactNode }) {
    return (
        <AuthLayoutTemplate title={title} description={description}>
            {children}
        </AuthLayoutTemplate>
    );
}
