export const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'SOCIETIES', path: '/societies' },
  { name: 'EVENTS', path: '/events' },
  { name: 'MEMBERS', path: '/members' },
  { name: 'FAQ', path: '/faq' },
  { name: 'CONTACT', path: '/contact' }
];

export const ABOUT_TEXT = {
  title: "About Us",
  content: "The Students' Gymkhana is the hub of numerous extra-curricular and co-curricular activities ranging from sports to socio-cultural. Our goal is to bring overall development in students through cultivating and nurturing their extra-curricular talents. Excellence in action is our motto."
};

// Helper to map basic society details (icon, links) by name
const basicSocietyDetails = {
  // Cultural
  "Music Society": { icon: "🎵", links: ["fb", "insta"] },
  "Eastern Dance": { icon: "💃", links: ["insta"] },
  "Drama Society": { icon: "🎭", links: ["fb", "insta", "in"] },
  // Technical
  "Student Chapters": { icon: "💻", links: ["in", "web"] },
  "E-Cell": { icon: "💡", links: ["insta", "in"] },
  // Sports
  "Cricket Team": { icon: "🏏", links: ["fb"] },
  "Football Team": { icon: "⚽", links: ["insta"] },
  // Student Welfare
  "Anti-Ragging Committee": { icon: "🛡️", links: [] },
  "Alumni Relations": { icon: "🤝", links: ["in"] }
};

// Helper to get society object with default if not found
const createSociety = (name) => {
  const basic = basicSocietyDetails[name];
  return basic
    ? { name, ...basic }
    : { name, icon: "📌", links: [] }; // default icon and empty links
};

export const SOCIETIES_DATA = {
  Cultural: [
    "Music Society",
    "Eastern Dance",
    "Western Dance",
    "Drama Society"
  ].map(createSociety),

  Technical: [
    "All Student Chapters",
    "E Cell"
  ].map(createSociety),

  Sports: [
    "Cricket Team",
    "Football Team"
  ].map(createSociety),

  StudentWelfare: [
    "Student Welfare Committee",
    "Anti-Ragging Committee",
    "Alumni Relations",
    "Graphics & Videography Team",
    "Gymkhana Room Management",
    "Canteen Committee",
    "Marathon Committee",
    "Cultural Committee Representatives"
  ].map(createSociety),

  CreativeAndLiteracy: [
    "Photography Club",
    "Art & Craft Club",
    "Quiz Club",
    "Debate Club",
    "Film Society",
    "Literary Society",
    "Humour Club",
    "College Magazine"
  ].map(createSociety)
};

export const ACHIEVEMENTS_DATA = [

  { 
    id: 1, 
    title: "IEM UEM KOLKATA MARATHON 2026 Announced", 
    date: "Feb 17, 2026", 
    desc: "The biggest event of Kolkata is back! Get ready for the IEM UEM Kolkata Marathon 2026 on 22nd February at IEM Management Campus."
  },
  { 
    id: 2, 
    title: "Homecoming 2025: Annual Alumni Meet", 
    date: "Oct 24, 2025", 
    desc: "The Annual Alumni Meet and Alumni Award Ceremony 2025 was held. Nominations were invited for the Annual Alumni Award."
  },
  { 
    id: 3, 
    title: "Alumni Innovators & Entrepreneurs Conclave", 
    date: "Sep 2, 2025", 
    desc: "Successfully organized on 29th August at the IEM Alumni Centre. The event featured networking, musical jamming, and high tea, with 58 students and 15 entrepreneurs participating to bridge current students with successful alumni."
  },

  { 
    id: 4, 
    title: "1st in Smart India Hackathon", 
    date: "Dec 2025", 
    desc: "Our tech team won the grand prize at SIH 2025." 
  }
];

export const RANKINGS_DATA = [

  { 
    year: "2024", 
    rank: "2nd", 
    publisher: "GHRDC", 
    desc: "IEM BBA ranked 2nd in East and Central Region, and 2nd in West Bengal." 
  },
  { 
    year: "2023", 
    rank: "32", 
    publisher: "Outlook, 2024", 
    desc: "IEM ranked 32 across India as Top Private B School. Also bagged the top position in best private B Schools in Kolkata and ranked 5th among East Zone." 
  },
  { 
    year: "2017", 
    rank: "14", 
    publisher: "Outlook, 2024", 
    desc: "IEM ranked 14 as Best Private University – constituent College." 
  },
  { 
    year: "2015", 
    rank: "Multiple", 
    publisher: "Various", 
    desc: "Rated Silver A++ Business School by Just Careers' Magazine (2011). Champion East by NEN E-Week (2011-2016). 3rd amongst all Govt & Private Colleges in West Bengal by The Telegraph (2009). Outstanding Engineering Institute in Eastern India by Star News (2011). Best Self-financed Engineering Institute in West Bengal by ABP Group (2010). Best Private Engineering College in West Bengal by Careergraph - Telegraph (2009). 2nd Best Private Engineering College in Eastern India by Electronics For You (2009)." 
  },

  { 
    year: "2026", 
    rank: "#1", 
    publisher: "State Tech Rankings", 
    desc: "Ranked as the top engineering college in the state." 
  }
];

export const PRESS_RELEASES_DATA = [

  { 
    id: 1, 
    title: "IEM-UEM ranked 1st and 3rd in West Bengal Private Engineering College Rankings by Times of...", 
    date: "Aug 9, 2020", 
    desc: "Press release regarding the top rankings achieved by IEM and UEM in West Bengal." 
  },
  { 
    id: 2, 
    title: "Enginious published in IEI newsletter", 
    date: "Jul 8, 2020", 
    desc: "Enginious under the banner of IEI-IEM Electrical & Mechanical students' chapter has been published in the IEI newsletter." 
  },
  { 
    id: 3, 
    title: "First Indian app by students for students", 
    date: "Jul 10, 2020", 
    desc: "Press Release in Ananda Bazaar Patrika regarding the very first Indian app by the students for the students." 
  },
  { 
    id: 4, 
    title: "IEM PET SOCIETY featured", 
    date: "Jul 7, 2020", 
    desc: "Press Release in t2 regarding the IEM PET SOCIETY." 
  },
  { 
    id: 5, 
    title: "IEM-UEM first in India to conduct semester exams during pandemic", 
    date: "Jun 25, 2020", 
    desc: "Press Releases regarding the IEM-UEM group being the first in India to conduct semester exams during the pandemic." 
  },
  { 
    id: 6, 
    title: "IEM alumni develop 'Drivers4Me' app", 
    date: "Jun 21, 2020", 
    desc: "A group of Institute of Engineering & Management (IEM), Kolkata alumni developed an app named Drivers4Me." 
  },
  { 
    id: 7, 
    title: "IEM Business School ranks AIR 34", 
    date: "Feb 24, 2020", 
    desc: "IEM Business School ranks AIR 34 by TOI National Business School survey and rankings." 
  },
  { 
    id: 8, 
    title: "IEM Jaipur in top 5 in North West region", 
    date: "Jan 17, 2020", 
    desc: "IEM Jaipur is in top 5 in North West region ahead of BITS Pilani and University of Rajasthan." 
  }
];

export const EVENTS_DATA = [
  'IEMPACT', 
  'INNOVACION', 
  'MARATHON', 
  'FILM FESTIVAL', 
  'ALUMNI MEET',
  'IEM UEM KOLKATA MARATHON 2026', 
  'Homecoming 2025' 
];