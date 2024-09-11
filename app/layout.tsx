import {
    ClerkProvider,
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs"

import ToasterProvider from "@/providers/toast-provider"
import ModalProvider from "@/providers/modal-provider"

import { Metadata } from "next"

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
                    <SignedIn>{/* <UserButton /> */}</SignedIn>
                    <ToasterProvider />
                    <ModalProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
