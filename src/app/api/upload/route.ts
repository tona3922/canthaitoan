import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  const { fileName, fileType } = await req.json();

  if (!fileName || !fileType) {
    return NextResponse.json({ error: "Missing fileName or fileType" }, { status: 400 });
  }

  const key = `images/${v4()}-${fileName}`;
  const bucket = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!.trim();

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentType: fileType,
    ContentDisposition: "inline",
  });

  const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });
  const region = process.env.NEXT_PUBLIC_AWS_REGION!.trim();
  const publicUrl = `https://${bucket}.s3.${region}.amazonaws.com/${key}`;

  return NextResponse.json({ presignedUrl, publicUrl });
}
