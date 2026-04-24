import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import type { AppPageComponent } from '@/types';
import { DashboardView } from '@/views/dashboard/dashboard-view';

const Dashboard: AppPageComponent = function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <DashboardView />
        </>
    );
};

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};

export default Dashboard;
