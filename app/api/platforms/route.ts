// app/api/platforms/route.ts

const CF_HANDLE = "i_vivek"; 
const LC_USER = "i_vivek_07"; 
const CC_USER = "i_vivek_07";
const GFG_USER = "i_vivek";

interface CodeforcesPlatform {
  name: string;
  handle: string;
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
  avatar: string;
  solved: null;
}

interface LeetCodePlatform {
  name: string;
  handle: string;
  rating: null;
  maxRating: null;
  rank: number | null;
  avatar: null;
  solved: {
    easy: number;
    medium: number;
    hard: number;
  };
}

interface PlaceholderPlatform {
  name: string;
  handle: string | null;
  rating: null;
  maxRating: null;
  rank: null;
  avatar: null;
  note: string;
}

async function fetchCodeforces(handle: string): Promise<CodeforcesPlatform> {
  const url = `https://codeforces.com/api/user.info?handles=${encodeURIComponent(handle)}`;
  const r = await fetch(url);
  const j = await r.json();
  if (j.status !== "OK") throw new Error("CF fetch failed");
  const u = j.result[0];
  return {
    name: "Codeforces",
    handle,
    rating: u.rating ?? null,
    maxRating: u.maxRating ?? null,
    rank: u.rank ?? null,
    avatar: u.titlePhoto ?? "",
    solved: null
  };
}

async function fetchLeetCode(username: string): Promise<LeetCodePlatform | null> {
  if (!username) return null;
  
  const query = `query userProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        ranking
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }`;
  
  const body = JSON.stringify({ query, variables: { username } });
  const r = await fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Referer": `https://leetcode.com/${username}/`,
    },
    body,
  });
  
  if (!r.ok) return null;
  const j = await r.json();
  const u = j.data?.matchedUser;
  if (!u) return null;
  
  const counts = (u.submitStats?.acSubmissionNum || []).reduce((acc: any, it: any) => {
    acc[it.difficulty] = it.count; 
    return acc;
  }, {});
  
  return {
    name: "LeetCode",
    handle: username,
    rating: null,
    maxRating: null,
    rank: u.profile?.ranking ?? null,
    avatar: null,
    solved: {
      easy: counts.Easy ?? 0,
      medium: counts.Medium ?? 0,
      hard: counts.Hard ?? 0
    }
  };
}

export async function GET() {
  try {
    const results = await Promise.allSettled([
      fetchCodeforces(CF_HANDLE),
      fetchLeetCode(LC_USER),
      Promise.resolve<PlaceholderPlatform>({
        name: "CodeChef",
        handle: CC_USER || null,
        rating: null,
        maxRating: null,
        rank: null,
        avatar: null,
        note: "Requires CodeChef OAuth/API keys — populate env vars and implement token flow in backend."
      }),
      Promise.resolve<PlaceholderPlatform>({
        name: "GeeksforGeeks",
        handle: GFG_USER || null,
        rating: null,
        maxRating: null,
        rank: null,
        avatar: null,
        note: "No public API. Consider scraping or user-provided data."
      })
    ]);

    const platforms = results.map(r => 
      r.status === "fulfilled" ? r.value : { error: (r.reason as Error)?.message ?? "fetch error" }
    );

    return new Response(JSON.stringify({ platforms }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }), 
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}