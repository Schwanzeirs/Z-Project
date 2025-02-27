'use client'

import { useRouter } from 'next/navigation'
export default function UserPage() {
    const router = useRouter()
    return (
        <main>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div>User page</div>
                <ul>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/user/home')}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/user/settings')}>
                            Settings
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/user/wishlist')}>
                            Wishlist
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/user/cart')}>
                            Cart
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/user/transactions')}>
                            Transactions
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/user/notifications')}>
                            Notifications
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={() => router.push('/pages/user/conversations')}>
                            Conversations
                        </button>
                    </li>
                </ul>
            </div>
        </main>
    );
}