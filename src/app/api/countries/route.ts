import countries from "./countries.json";

export async function GET() {
  try {
    return Response.json(countries);
  } catch {
    return Response.json(
      { message: "Unable to load countries right now." },
      { status: 500 },
    );
  }
}
