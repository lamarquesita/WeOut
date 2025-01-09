export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/d7739af8-ce2f-11ef-8fab-13153b729ce2/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: `eo_017225635b6efdae0b717aea3c99d3690a30225044a0b8fd199ebb504381dedb`,
          email_address: email,
        }),
      }
    );

    if (response.status === 200) {
      return new Response("Email submitted successfully!", {
        status: 200,
      });
    } else {
      return new Response("Failed to submit email!", {
        status: response.status,
        statusText: response.statusText,
      });
    }
  } catch (error) {
    return new Response("Internal server error", { status: 500 });
  }
}