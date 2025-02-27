'use client'

import { useRouter } from 'next/navigation'
export default function LandingPage() {
    const router = useRouter()
    return (
        <main>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div>Landing page</div>
                <button type='button' onClick={() => router.push('/pages/login')}>
                    Login
                </button>
            </div>
        </main>
    );
}
