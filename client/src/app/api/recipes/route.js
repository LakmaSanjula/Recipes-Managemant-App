import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Recipe from "@/models/Recipe";

export const GET = async (request) => {
    const url = new URL(request.url);

    const username = url.searchParams.get("username");
  try {
    await connect();

    const recipes = await Recipe.find(username && { username });

    return new NextResponse(JSON.stringify(recipes), { status: 200 });
  } catch (err) {
    return NextResponse.json("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newRecipe = new Recipe(body);

  try {
    await connect();

    await newRecipe.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
