import {
    ClerkProvider,
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs"
import "./globals.css"
import { Metadata } from "next"

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
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
