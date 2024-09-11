import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import Navbar from "@/components/navbar"
import prismadb from "@/lib/prismadb"

const Dashboard = async ({
    children,
    params,
}: {
    children: React.ReactNode
    params: { storeId: string }
}) => {
    const { userId } = auth()

    if (!userId) {
        redirect("/sign-in")
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId,
        },
    })

    if (!store) {
        redirect("/")
    } else {
        return (
            <>
                <Navbar />
                {children}
            </>
        )
    }
}

export default Dashboard
