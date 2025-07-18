import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, email, password, confirmed_password } = body;
  try {
    // fecth with api
    const fecthData = await fetch(
      "https://car-nextjs-api.cheatdev.online/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, confirmed_password }),
      }
    );

    if (!fecthData.ok) {
      {
        return NextResponse.json(
          {
            message: "Failed to register",
          },
          {
            status: fecthData.status,
          }
        );
      }
    }
    const data = await fecthData.json();
    console.log("Data after register: ", data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
