import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Recipe from "@/models/Recipe";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const recipe = await Recipe.findById(id);

    return new NextResponse(JSON.stringify(recipe), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Recipe.findByIdAndDelete(id);

    return new NextResponse("Recipe Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
