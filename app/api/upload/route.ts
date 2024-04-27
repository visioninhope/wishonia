import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
// https://vercel.com/docs/storage/vercel-blob/server-upload
export async function POST(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    if(!filename){
        throw new Error('filename is required');
    }

    if (!request.body) {
        throw new Error('Request body is required');
    }

    const blob = await put(filename, request.body, {
        access: 'public',
    });

    return NextResponse.json(blob);
}