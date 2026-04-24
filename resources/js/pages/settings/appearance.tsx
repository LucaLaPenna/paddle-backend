import { Head } from '@inertiajs/react';
import { edit as editAppearance } from '@/routes/appearance';
import type { AppPageComponent } from '@/types';
import { AppearanceSettingsView } from '@/views/settings/appearance-settings-view';

const Appearance: AppPageComponent = function Appearance() {
    return (
        <>
            <Head title="Appearance settings" />

            <h1 className="sr-only">Appearance settings</h1>

            <AppearanceSettingsView />
        </>
    );
};

Appearance.layout = {
    breadcrumbs: [
        {
            title: 'Appearance settings',
            href: editAppearance(),
        },
    ],
};

export default Appearance;
