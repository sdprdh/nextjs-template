import 'next-auth/jwt';

import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: User & DefaultSession;
    }

    interface User {
        role: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        sub: string;
        role: string;
    }
}
