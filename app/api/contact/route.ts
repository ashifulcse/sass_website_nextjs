import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Please submit valid contact details." },
      { status: 400 },
    );
  }

  const name = normalize(body.name);
  const email = normalize(body.email);
  const company = normalize(body.company);
  const message = normalize(body.message);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) {
    return NextResponse.json(
      { message: "Please enter your full name." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid work email address." },
      { status: 400 },
    );
  }

  if (company.length < 2) {
    return NextResponse.json(
      { message: "Please share your company name." },
      { status: 400 },
    );
  }

  if (message.length < 20) {
    return NextResponse.json(
      { message: "Please add a few more details so we can tailor the demo." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message:
      "Thanks for reaching out. A FlowPilot specialist will follow up shortly.",
  });
}
