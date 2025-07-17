import { SessionProvider as Provider } from 'next-auth/react';

import { auth } from '@/lib/auth';

export const SessionProvider = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const session = await auth();

    return <Provider session={session}>{children}</Provider>;
};
