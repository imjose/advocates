import db from '@/db';

import { advocates } from "../../../db/schema";
import { count, or, ilike, eq, sql } from 'drizzle-orm';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = searchParams.has("pageSize") ? parseInt(searchParams.get("pageSize") as string, 10) : 10;
  const offset = searchParams.has("page") && limit
    ? (parseInt(searchParams.get("page") as string, 10) - 1) * limit
    : 0;
  const query = searchParams.get("query") || "";

  let conditions = undefined;
  if (query) {
    const searchConditions = [
      ilike(advocates.firstName, `%${query}%`),
      ilike(advocates.lastName, `%${query}%`),
      ilike(advocates.city, `%${query}%`),
      ilike(advocates.degree, `%${query}%`),
      sql`${advocates.specialties}::text ILIKE ${`%${query}%`}`,
    ];

    const queryAsNumber = parseInt(query, 10);
    if (!isNaN(queryAsNumber)) {
      searchConditions.push(eq(advocates.yearsOfExperience, queryAsNumber));
    }

    conditions = or(...searchConditions);
  }

  const total = await db
    .select({ count: count() })
    .from(advocates)
    .where(conditions);
  
  const data = await db
    .select()
    .from(advocates)
    .where(conditions)
    .limit(limit)
    .offset(offset);

  return Response.json({ data, totalItems: total[0].count });
}
