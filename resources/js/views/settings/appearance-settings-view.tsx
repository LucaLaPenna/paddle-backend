import AppearanceTabs from '@/components/settings/appearance-tabs';
import { PageHeaderView } from '@/views/shared/page-header-view';

export function AppearanceSettingsView() {
    return (
        <div className="space-y-6">
            <PageHeaderView
                variant="small"
                title="Appearance settings"
                description="Update your account's appearance settings"
            />
            <AppearanceTabs />
        </div>
    );
}