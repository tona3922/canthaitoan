// lib/auth/server.ts
import { cookies } from "next/headers";
import { getAuth } from "firebase-admin/auth";
import { cert, getApps, initializeApp } from "firebase-admin/app";
const app =
  getApps().length === 0
    ? initializeApp({
        credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!)),
      })
    : getApps()[0];

export const adminAuth = getAuth(app);
export async function getCurrentUser() {
  const session = cookies().get("__session")?.value;
  if (!session) return null;
  try {
    const decodedToken = await adminAuth.verifyIdToken(session);
    return decodedToken;
  } catch {
    return null;
  }
}
