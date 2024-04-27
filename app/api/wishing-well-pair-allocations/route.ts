import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const allocations = await prisma.wishingWellPairAllocation.findMany();
        return NextResponse.json(allocations);
    } catch (error) {
        console.error('Error fetching wishing well pair allocations:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(request: Request) {
    const { userId, thisWishingWellId, thatWishingWellId, thisWishingWellPercentage } = await request.json();

    try {
        const allocation = await prisma.wishingWellPairAllocation.create({
            data: {
                userId,
                thisWishingWellId,
                thatWishingWellId,
                thisWishingWellPercentage,
            },
        });

        return NextResponse.json(allocation, { status: 201 });
    } catch (error) {
        console.error('Error creating wishing well pair allocation:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}