import ClientLayout from "@/components/client/layout/Index"
import { GetServerSideProps } from "next"
import Head from "next/head"



export default function Profile() {

    return(
        <ClientLayout>
        <Head>
            <title>Profile</title>
        </Head>
        <>
        Profile
        </>
    </ClientLayout>
    )

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return{
        props:{}
    }
}