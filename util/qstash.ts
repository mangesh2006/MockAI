export async function sendEmailJob(email: string, link: string) {
  await fetch(
    `${process.env.QSTASH_URL}/${process.env.NEXT_PUBLIC_URL}/api/v1/auth/email-worker`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.QSTASH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, link }),
    },
  );
}
