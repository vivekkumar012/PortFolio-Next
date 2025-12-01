// app/api/platforms/route.js
import fetch from "node-fetch";

const CF_HANDLE = "i_vivek"; 
const LC_USER = "i_vivek_07"; 
const CC_USER = "i_vivek_07";
const GFG_USER = "i_vivek";

async function fetchCodeforces(handle) {
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
    solved: null // CF doesn't expose solved count via this endpoint easily
  };
}

async function fetchLeetCode(username) {
  if (!username) return null;
  // LeetCode GraphQL public-ish endpoint. Might break; treat as best-effort.
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
  const counts = (u.submitStats?.acSubmissionNum || []).reduce((acc, it) => {
    acc[it.difficulty] = it.count; return acc;
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
      // placeholders for platforms that require auth or scraping
      Promise.resolve({
        name: "CodeChef",
        handle: CC_USER || null,
        rating: null,
        maxRating: null,
        rank: null,
        avatar: null,
        note: "Requires CodeChef OAuth/API keys — populate env vars and implement token flow in backend."
      }),
      Promise.resolve({
        name: "GeeksforGeeks",
        handle: GFG_USER || null,
        rating: null,
        maxRating: null,
        rank: null,
        avatar: null,
        note: "No public API. Consider scraping or user-provided data."
      })
    ]);

    const platforms = results.map(r => r.status === "fulfilled" ? r.value : { error: r.reason?.message ?? "fetch error" });

    return new Response(JSON.stringify({ platforms }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
