import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("linkify")
    const collection = db.collection("url")

    const check = await collection.findOne({ shortUrl: body.shortUrl })
    if (check) {
        return Response.json({success:false, message: 'Short URL already exists' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

  return Response.json({success:true, message: 'finished' })
}