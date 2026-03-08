// ─────────────────────────────────────────────────────────────────────────────
//  eventsData.js
//  The source of truth for all Events content.
//  Add / remove objects here — the page reads and sorts automatically.
// ─────────────────────────────────────────────────────────────────────────────

// AUTO-SWIPE INTERVAL for the "Recent Events" carousel (milliseconds)
export const CAROUSEL_INTERVAL = 4000;

// Number of events shown before the "Show More" button appears
export const EVENTS_INITIAL_SHOW = 4;

// ─── Recent / Featured Events (shown in the top carousel) ────────────────────
export const RECENT_EVENTS = [
  {
    id: "r1",
    title: "IEMPACT 2025",
    subtitle: "Annual Tech & Culture Fest",
    description:
      "Three days of hackathons, music, dance battles, and robotics showdowns. IEM's flagship festival drew 8,000+ attendees from 60 colleges across Eastern India.",
    date: "March 8–10, 2025",
    tag: "Flagship",
    tagColor: "#C0392B",
  },
  {
    id: "r2",
    title: "INNOVACION",
    subtitle: "National Innovation Summit",
    description:
      "A 24-hour ideathon where student teams pitched solutions to real-world problems. Top 3 teams received seed funding from partner startups.",
    date: "February 15, 2025",
    tag: "Innovation",
    tagColor: "#7A1212",
  },
  {
    id: "r3",
    title: "SPRING MARATHON",
    subtitle: "5K · 10K · 21K Runs",
    description:
      "The campus came alive at dawn as 1,200 runners took on three distance categories. Proceeds went to the Gymkhana student scholarship fund.",
    date: "January 26, 2025",
    tag: "Sports",
    tagColor: "#A93226",
  },
];

// ─── Full Event List (sorted by dateISO, newest first) ───────────────────────
export const ALL_EVENTS = [
  {
    id: "e1",
    title: "IEMPACT 2025",
    category: "Flagship",
    dateDisplay: "Mar 8–10, 2025",
    dateISO: "2025-03-08",
    venue: "IEM Main Campus, Kolkata",
    description:
      "IEM's biggest annual festival combining technical competitions, cultural performances, sports, and business events under one roof.",
    status: "upcoming",
  },
  {
    id: "e2",
    title: "INNOVACION",
    category: "Innovation",
    dateDisplay: "Feb 15, 2025",
    dateISO: "2025-02-15",
    venue: "Innovation Hub, Block C",
    description:
      "National-level ideathon where students build scalable solutions to real-world problems judged by industry experts and VCs.",
    status: "upcoming",
  },
  {
    id: "e3",
    title: "SPRING MARATHON",
    category: "Sports",
    dateDisplay: "Jan 26, 2025",
    dateISO: "2025-01-26",
    venue: "IEM Campus Loop & Lake Road",
    description:
      "Annual endurance event with 5K, 10K, and half-marathon routes. Open to students, faculty, and alumni.",
    status: "upcoming",
  },
  {
    id: "e4",
    title: "FILM FESTIVAL",
    category: "Cultural",
    dateDisplay: "Jan 12, 2025",
    dateISO: "2025-01-12",
    venue: "Auditorium — Block A",
    description:
      "Student-made short films, documentaries, and animations screened over two days, with a live jury and audience-choice awards.",
    status: "past",
  },
  {
    id: "e5",
    title: "ALUMNI MEET 2025",
    category: "Community",
    dateDisplay: "Dec 28, 2024",
    dateISO: "2024-12-28",
    venue: "IEM Convention Centre",
    description:
      "Annual reunion bringing together graduates from across decades for panel talks, networking dinners, and campus nostalgia tours.",
    status: "past",
  },
  {
    id: "e6",
    title: "ROBOWARS",
    category: "Technical",
    dateDisplay: "Dec 14, 2024",
    dateISO: "2024-12-14",
    venue: "Engineering Lab Complex",
    description:
      "Combat robotics tournament where teams design, build, and battle remote-controlled machines in an arena. 40 teams, 3 weight categories.",
    status: "past",
  },
  {
    id: "e7",
    title: "FRESHERS' NIGHT",
    category: "Cultural",
    dateDisplay: "Sep 20, 2024",
    dateISO: "2024-09-20",
    venue: "Open Air Theatre",
    description:
      "The grand welcome bash for the Class of 2028 — performances, games, crowning of Mr. & Ms. Fresher, and an all-night DJ set.",
    status: "past",
  },
  {
    id: "e8",
    title: "INTER-COLLEGE DEBATE",
    category: "Literary",
    dateDisplay: "Aug 30, 2024",
    dateISO: "2024-08-30",
    venue: "Seminar Hall, Block B",
    description:
      "Parliamentary-style debate championship with teams from 22 colleges. Motion: 'This house believes AI will make engineers obsolete.'",
    status: "past",
  },
];