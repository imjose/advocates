import db from '@/db';

import { advocates } from "../../../db/schema";
import { count } from 'drizzle-orm';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = searchParams.has("pageSize") ? parseInt(searchParams.get("pageSize") as string, 10) : 10;
  const offset = searchParams.has("page") && limit
    ? (parseInt(searchParams.get("page") as string, 10) - 1) * limit
    : 0;

  const total = await db
    .select({ count: count() })
    .from(advocates);
  
  const data = await db
    .select()
    .from(advocates)
    .limit(limit)
    .offset(offset);

  return Response.json({ data, totalItems: total[0].count });
}
