import { Head } from '@inertiajs/react';
import { edit } from '@/routes/profile';
import type { AppPageComponent } from '@/types';
import { ProfileSettingsView } from '@/views/settings/profile-settings-view';

type ProfilePageProps = {
    mustVerifyEmail: boolean;
    status?: string;
};

const Profile: AppPageComponent<ProfilePageProps> = function Profile({
    mustVerifyEmail,
    status,
}: ProfilePageProps) {

    return (
        <>
            <Head title="Profile settings" />

            <h1 className="sr-only">Profile settings</h1>

            <ProfileSettingsView
                mustVerifyEmail={mustVerifyEmail}
                status={status}
            />
        </>
    );
};

Profile.layout = {
    breadcrumbs: [
        {
            title: 'Profile settings',
            href: edit(),
        },
    ],
};

export default Profile;
