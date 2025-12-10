"use client";

import React, { useEffect, useState } from "react";
import { BsTrophy, BsCodeSlash, BsArrowRight } from "react-icons/bs";

const FALLBACK_LOGOS = {
  codeforces: "https://imgs.search.brave.com/akmCgJoadq924HnKGC4dTc3hEM3L1OYaNRbhDBu4Y1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcnQu/bnBhbnVoaW4ubWUv/U1ZHL0NvZGVmb3Jj/ZXMvQ29kZWZvcmNl/cy5jb2xvcmVkLnN2/Zw",
  leetcode: "https://imgs.search.brave.com/txnZzA0eNhRFPAXRZISEoXNMF6KL7waLxcLZcPrNZc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWxlZXRjb2RlLWxv/Z28taWNvbi1zdmct/ZG93bmxvYWQtcG5n/LTI5NDQ5NjAucG5n/P2Y9d2VicCZ3PTI1/Ng",
  codechef: "https://imgs.search.brave.com/YgDCUesng3KW0rL-e4g9W_0OqIMRCqd5gnid45AylgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWNo/bm9mYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9Db2RlQ2hlZi1s/b2dvLmpwZWc",
  geeksforgeeks: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/geeksforgeeks.svg",
  default: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect width='100%25' height='100%25' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' fill='%23fff' font-size='20' dominant-baseline='middle' text-anchor='middle'%3ECP%3C/text%3E%3C/svg%3E"
};

const PLATFORM_COLORS = {
  codeforces: "from-blue-500 to-indigo-600",
  leetcode: "from-orange-500 to-yellow-500",
  codechef: "from-amber-600 to-orange-700",
  geeksforgeeks: "from-green-500 to-emerald-600",
  default: "from-cyan-500 to-blue-600"
};

// Type definitions
interface RawPlatform {
  name?: string;
  handle?: string;
  rating?: number | null;
  maxRating?: number | null;
  rank?: string | null;
  avatar?: string | null;
  solved?: number | Record<string, number> | null;
  totalProblems?: number | null;
  [key: string]: any;
}

interface NormalizedPlatform {
  name: string;
  handle: string | null;
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
  avatar: string | null;
  solved: number | Record<string, number> | null;
  totalProblems: number | null;
  raw: RawPlatform;
}

interface ApiResponse {
  platforms?: RawPlatform[];
  [key: string]: any;
}

export default function CodingClient() {
  const [platforms, setPlatforms] = useState<NormalizedPlatform[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/api/platforms")
      .then((r) => r.json())
      .then((j: ApiResponse) => {
        if (!mounted) return;
        const normalized = (j.platforms || []).map((p: RawPlatform): NormalizedPlatform => ({
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
    <div id="coding" className="py-16 px-4 md:px-8 lg:px-16">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Coding <span className="text-cyan-300">Profiles</span>
          </h2>
          <p className="text-lg text-gray-400">
            Latest snapshot from my competitive programming journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <Card key={i} platform={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------- Components ---------- */

interface CardProps {
  platform: NormalizedPlatform;
}

function Card({ platform: p }: CardProps) {
  const nameKey = (p.name || "").toLowerCase();
  const avatar = p.avatar || FALLBACK_LOGOS[nameKey as keyof typeof FALLBACK_LOGOS] || FALLBACK_LOGOS.default;
  const gradientColor = PLATFORM_COLORS[nameKey as keyof typeof PLATFORM_COLORS] || PLATFORM_COLORS.default;

  const solvedTotal = p.solved
    ? (typeof p.solved === "object" ? Object.values(p.solved).reduce((a,b)=>a+(+b||0),0) : +p.solved || 0)
    : null;
  const totalProblems = p.totalProblems || 0;
  const progressPct = totalProblems ? Math.min(100, Math.round((solvedTotal! / totalProblems) * 100)) : (solvedTotal ? 100 : 0);

  const primary = p.rating ?? (solvedTotal ?? "—");
  const secondary = p.rank ?? (p.handle ?? "—");

  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
      aria-label={`${p.name} profile`}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative p-6 flex flex-col h-full">
        
        {/* Header with Logo and Platform Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
            <div className="relative w-16 h-16 rounded-xl bg-gray-900/80 border border-gray-700/50 flex items-center justify-center p-2 group-hover:border-cyan-500/50 transition-colors duration-300">
              <img
                src={avatar}
                alt={`${p.name} logo`}
                onError={(e) => { e.currentTarget.src = FALLBACK_LOGOS.default; }}
                className="w-full h-full object-contain"
                width={48}
                height={48}
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
            <p className="text-sm text-gray-400 truncate">@{secondary}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
            <div className="flex items-center gap-2 mb-1">
              <BsTrophy className="w-4 h-4 text-yellow-500" />
              <span className="text-xs text-gray-400">Rating</span>
            </div>
            <p className="text-xl font-bold text-white">{primary}</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
            <div className="flex items-center gap-2 mb-1">
              <BsCodeSlash className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">Max</span>
            </div>
            <p className="text-xl font-bold text-white">{p.maxRating ?? "—"}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
            <span className="font-semibold">Problems Solved</span>
            <span className="font-bold text-cyan-400">
              {solvedTotal ?? "—"}{totalProblems ? ` / ${totalProblems}` : ""}
            </span>
          </div>
          
          <div className="relative w-full bg-gray-800/60 h-3 rounded-full overflow-hidden border border-gray-700/30">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${gradientColor} transition-all duration-500 relative overflow-hidden`}
              style={{ width: `${progressPct}%`, minWidth: solvedTotal ? "8px" : "0" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
          
          <div className="mt-2 text-right">
            <span className="text-xs font-semibold text-cyan-400">{progressPct}% Complete</span>
          </div>
        </div>

        {/* Visit Profile Button */}
        <a
          href={profileUrl(p)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full py-3 px-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700/50 hover:border-cyan-500/50 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <span>View Profile</span>
          <BsArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </article>
  );
}

function LoadingSkeleton() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse space-y-8">
          <div className="text-center">
            <div className="h-10 w-64 bg-gray-800 rounded mx-auto mb-4" />
            <div className="h-6 w-96 bg-gray-800 rounded mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({length: 4}).map((_,i)=>(
              <div key={i} className="rounded-2xl bg-gray-800/40 border border-gray-700/20 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-xl" />
                  <div className="flex-1">
                    <div className="h-4 bg-gray-700 rounded mb-2 w-24" />
                    <div className="h-3 bg-gray-700 rounded w-20" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="h-20 bg-gray-700 rounded-lg" />
                  <div className="h-20 bg-gray-700 rounded-lg" />
                </div>
                <div className="h-3 bg-gray-700 rounded mb-4" />
                <div className="h-10 bg-gray-700 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="py-16 px-4 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gray-800/50 border border-gray-700/30">
        <BsCodeSlash className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No Profiles Found</h3>
        <p className="text-gray-400">
          Make sure your backend `/api/platforms` returns an array under `platforms`.
        </p>
      </div>
    </div>
  );
}

/* ---------- Helpers ---------- */

function profileUrl(p: NormalizedPlatform): string {
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