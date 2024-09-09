import {
    ClerkProvider,
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs"

import { Metadata } from "next"
import ModalProvider from "@/providers/modal-provider"

import "./globals.css"

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <ModalProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
