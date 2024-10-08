import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const filename = searchParams.get("document")
  if (!filename) {
    return NextResponse.json(
      { error: "Document filename is required" },
      { status: 400 }
    )
  }
  if (!request.body) {
    return NextResponse.json(
      { error: "Request body is required" },
      { status: 400 }
    )
  }
  const blob = await put(filename, request.body, {
    access: "public",
  })
  return NextResponse.json({ documentUrl: blob.url })
}
