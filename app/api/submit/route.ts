
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Basic Server-Side Validation
    const name = data.name as string;
    const email = data.email as string;
    const message = data.message as string;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Bitte füllen Sie alle Pflichtfelder aus.' }, { status: 400 });
    }

    if (name.length > 100 || message.length > 5000) {
      return NextResponse.json({ message: 'Eingabe überschreitet die erlaubte Länge.' }, { status: 400 });
    }

    // Ensure the access key is present from the environment variable
    data.access_key = process.env.WEB3FORMS_ACCESS_KEY || (data.access_key as string);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      // Redirect to a success state on the contact page
      return NextResponse.redirect(new URL('/kontakt?success=true', request.url), 303);
    } else {
      console.error('Web3Forms Error:', result);
      return NextResponse.json({ message: 'Versand fehlgeschlagen', error: result }, { status: 400 });
    }
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ message: 'Interner Serverfehler' }, { status: 500 });
  }
}
