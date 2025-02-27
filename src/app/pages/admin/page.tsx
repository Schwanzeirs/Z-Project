'use client'

import { useRouter } from 'next/navigation'
export default function AdminPage() {
    const router = useRouter()
    return (
        <main>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div>Admin page</div>
                <ul>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/admin/dashboard')}>
                            Dashboard
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/admin/user-management')}>
                            User management
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/admin/product-management')}>
                            Product management
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/admin/content-management')}>
                            Content management
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/admin/conversations')}>
                            Conversations
                        </button>
                    </li>
                </ul>
            </div>
        </main>
    );
}
