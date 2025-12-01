"use client";

import React, { useEffect, useState } from "react";

const FALLBACK_LOGOS = {
  codeforces: "https://imgs.search.brave.com/akmCgJoadq924HnKGC4dTc3hEM3L1OYaNRbhDBu4Y1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcnQu/bnBhbnVoaW4ubWUv/U1ZHL0NvZGVmb3Jj/ZXMvQ29kZWZvcmNl/cy5jb2xvcmVkLnN2/Zw",
  leetcode: "https://imgs.search.brave.com/txnZzA0eNhRFPAXRZISEoXNMF6KL7waLxcLZcPrNZc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWxlZXRjb2RlLWxv/Z28taWNvbi1zdmct/ZG93bmxvYWQtcG5n/LTI5NDQ5NjAucG5n/P2Y9d2VicCZ3PTI1/Ng",
  codechef: "https://imgs.search.brave.com/YgDCUesng3KW0rL-e4g9W_0OqIMRCqd5gnid45AylgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWNo/bm9mYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9Db2RlQ2hlZi1s/b2dvLmpwZWc",
  geeksforgeeks: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/geeksforgeeks.svg",
  default: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect width='100%25' height='100%25' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' fill='%23fff' font-size='20' dominant-baseline='middle' text-anchor='middle'%3ECP%3C/text%3E%3C/svg%3E"
};

export default function CodingClient() {
  const [platforms, setPlatforms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/api/platforms")
      .then((r) => r.json())
      .then((j) => {
        if (!mounted) return;
        // normalize: ensure essential fields exist
        const normalized = (j.platforms || []).map((p) => ({
          name: p.name || "Unknown",
          handle: p.handle || null,
          rating: p.rating ?? null,
          maxRating: p.maxRating ?? null,
          rank: p.rank ?? null,
          avatar: p.avatar || null,
          solved: p.solved || null,
          totalProblems: p.totalProblems || null,
          raw: p
        }));
        setPlatforms(normalized);
      })
      .catch(() => setPlatforms([]))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  if (loading) return <LoadingSkeleton />;

  if (!platforms || platforms.length === 0)
    return <EmptyState />;

  return (
    <div id="coding">
        <section className="max-w-7xl mx-auto p-4" >
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-2xl font-semibold text-white">Coding Profiles</h2>
        <p className="text-2xl text-cyan-200 hidden sm:block">Latest snapshot from my coding platforms</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {platforms.map((p, i) => (
          <Card key={i} platform={p} />
        ))}
      </div>
    </section>
    </div>
  );
}

/* ---------- Components ---------- */

function Card({ platform: p }) {
  const nameKey = (p.name || "").toLowerCase();
  const avatar = p.avatar || FALLBACK_LOGOS[nameKey] || FALLBACK_LOGOS.default;

  const solvedTotal = p.solved
    ? (typeof p.solved === "object" ? Object.values(p.solved).reduce((a,b)=>a+(+b||0),0) : +p.solved || 0)
    : null;
  const totalProblems = p.totalProblems || 0;
  const progressPct = totalProblems ? Math.min(100, Math.round((solvedTotal / totalProblems) * 100)) : (solvedTotal ? 100 : 0);

  // compact score (shows rating if present, else solved)
  const primary = p.rating ?? (solvedTotal ?? "—");
  const secondary = p.rank ?? (p.handle ?? "—");

  return (
    <article
      className="flex flex-col gap-3 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/30 hover:scale-[1.02] transition-transform duration-200"
      aria-label={`${p.name} profile`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={`${p.name} logo`}
            onError={(e) => { e.currentTarget.src = FALLBACK_LOGOS.default; }}
            className="w-12 h-12 object-contain rounded-md bg-slate-900/60 p-1"
            width={48}
            height={48}
          />
          <div>
            <div className="text-sm text-slate-300">{p.name}</div>
            <div className="text-base font-semibold text-white truncate">{secondary}</div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-slate-400">Score</div>
          <div className="text-lg font-bold text-white">{primary ?? "—"}</div>
        </div>
      </div>

      {/* progress */}
      <div className="mt-1">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>Solved</span>
          <span>{solvedTotal ?? "—"}{totalProblems ? ` / ${totalProblems}` : ""}</span>
        </div>
        <div className="w-full bg-slate-700/40 h-2 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all"
            style={{ width: `${progressPct}%`, minWidth: solvedTotal ? "6px" : "0" }}
            aria-hidden
          />
        </div>
      </div>

      {/* small stats row */}
      <div className="flex items-center justify-between text-xs text-slate-300">
        <div className="inline-flex items-center gap-2">
          <Stat label="Max" value={p.maxRating ?? "—"} />
          <Stat label="Rank" value={p.rank ?? "—"} />
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profileUrl(p)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-2 py-1 rounded-md bg-slate-700/60 hover:bg-slate-700 text-white"
          >
            Visit
          </a>
        </div>
      </div>
    </article>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-sm font-semibold text-white leading-none">{value}</div>
      <div className="text-[11px] text-slate-400">{label}</div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="animate-pulse space-y-3">
        <div className="h-6 w-48 bg-slate-700/40 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({length: 4}).map((_,i)=>(
            <div key={i} className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-slate-700 rounded-md" />
                <div className="flex-1">
                  <div className="h-3 bg-slate-700 rounded mb-2" />
                  <div className="h-3 w-2/3 bg-slate-700 rounded" />
                </div>
              </div>
              <div className="h-2 bg-slate-700 rounded mb-2" />
              <div className="h-2 bg-slate-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="p-6 text-center text-slate-400">
      No profiles found. Make sure your backend `/api/platforms` returns an array under `platforms`.
    </div>
  );
}

/* ---------- Helpers ---------- */

function profileUrl(p) {
  if (!p) return "#";
  const name = (p.name || "").toLowerCase();
  const h = p.handle || "";
  switch (name) {
    case "codeforces": return `https://codeforces.com/profile/${h || ""}`;
    case "leetcode": return `https://leetcode.com/${h || ""}`;
    case "codechef": return `https://www.codechef.com/users/${h || ""}`;
    case "geeksforgeeks": return `https://auth.geeksforgeeks.org/user/${h || ""}`;
    default: return "#";
  }
}
