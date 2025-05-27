import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/server";

export async function GET() {
  const user = await getCurrentUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  return NextResponse.json({ message: `Hello ${user.email}` }, { status: 200 });
}
