import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
    const client = await clientPromise
    const db = client.db("linkify")
    const collection = db.collection("url")
    const URL = await collection.findOne({ shortUrl: (await params).url })
    if (URL) {
        redirect(URL.url)
    }
    else{
        redirect("/shortner")
    }
  }