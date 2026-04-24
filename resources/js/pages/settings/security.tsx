import { Head } from '@inertiajs/react';
import { edit } from '@/routes/security';
import type { AppPageComponent } from '@/types';
import { SecuritySettingsView } from '@/views/settings/security-settings-view';

type SecurityPageProps = {
    canManageTwoFactor?: boolean;
    requiresConfirmation?: boolean;
    twoFactorEnabled?: boolean;
};

const Security: AppPageComponent<SecurityPageProps> = function Security({
    canManageTwoFactor = false,
    requiresConfirmation = false,
    twoFactorEnabled = false,
}: SecurityPageProps) {

    return (
        <>
            <Head title="Security settings" />

            <h1 className="sr-only">Security settings</h1>

            <SecuritySettingsView
                canManageTwoFactor={canManageTwoFactor}
                requiresConfirmation={requiresConfirmation}
                twoFactorEnabled={twoFactorEnabled}
            />
        </>
    );
};

Security.layout = {
    breadcrumbs: [
        {
            title: 'Security settings',
            href: edit(),
        },
    ],
};

export default Security;
