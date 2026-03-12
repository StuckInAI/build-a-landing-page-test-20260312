import { NextRequest, NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Subscriber } from '@/entities/Subscriber';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (trimmedEmail.length > 255) {
      return NextResponse.json(
        { error: 'Email address is too long.' },
        { status: 400 }
      );
    }

    const dataSource = await getDataSource();
    const subscriberRepository = dataSource.getRepository(Subscriber);

    const existing = await subscriberRepository.findOne({
      where: { email: trimmedEmail },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'This email is already subscribed.' },
        { status: 409 }
      );
    }

    const subscriber = subscriberRepository.create({
      email: trimmedEmail,
    });

    await subscriberRepository.save(subscriber);

    return NextResponse.json(
      {
        message: 'Successfully subscribed! Welcome aboard.',
        subscriber: {
          id: subscriber.id,
          email: subscriber.email,
          createdAt: subscriber.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405 }
  );
}
