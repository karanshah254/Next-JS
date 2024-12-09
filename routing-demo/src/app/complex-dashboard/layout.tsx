// use of parallel routes using notifications, revenue, users components and card.tsx for layout
// parallel routes are used for simultaneous rendering of multiple pages within same layout

export default function DashBoardLayout({ children, users, revenue, notifications, login }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = false;
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
            </div>
        </div>
    ) : (
        login
    )
}