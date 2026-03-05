import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { make, model, year, budget, color, location, scheduleFrom, scheduleTo, phone, email } = await req.json();

  const { error } = await resend.emails.send({
    from: 'carDeali <noreply@cardeali.com>',
    to: 'cardeali.deals@gmail.com',
    replyTo: email,
    subject: `New Car Request — ${make} ${model}`,
    html: `
      <h2>New Car Request</h2>
      <table>
        <tr><td><b>Make</b></td><td>${make}</td></tr>
        <tr><td><b>Model</b></td><td>${model}</td></tr>
        <tr><td><b>Year</b></td><td>${year || '—'}</td></tr>
        <tr><td><b>Budget</b></td><td>${budget || '—'}</td></tr>
        <tr><td><b>Color</b></td><td>${color || '—'}</td></tr>
        <tr><td><b>Delivery Location</b></td><td>${location}</td></tr>
        <tr><td><b>Schedule From</b></td><td>${scheduleFrom || '—'}</td></tr>
        <tr><td><b>Schedule To</b></td><td>${scheduleTo || '—'}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
      </table>
    `,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ success: true });
}
