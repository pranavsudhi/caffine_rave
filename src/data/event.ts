// Everything about the night lives here. Change a detail once and every section, link and the countdown follow.

const whatsappNumber = "919746363111";
const whatsappMessage = "Hi Savora, I'd like a spot at Caffeine & Beats.";

export const event = {
  title: "Caffeine & Beats",
  host: "Savora",
  dj: "Mad Alice",

  // Countdown runs to `start` and shows "live" until `end` (India time)
  start: "2026-11-13T22:30:00+05:30",
  end: "2026-11-13T23:30:00+05:30",

  // As shown on the page
  dateLabel: "13 November 2026",
  dayLabel: "Friday",
  timeLabel: "10:30 to 11:30 PM",

  venue: "Savora, Kunnamangalam",
  venueNote: "Savora Coffee & Patisserie, Kozhikode",
  mapUrl: "https://www.google.com/maps?cid=1555771574546367760",

  entryPrice: 150,
  entryNote: "Includes one coffee from the event menu",
  spots: 20,

  whatsappDisplay: "+91 97463 63111",
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,

  siteUrl: "https://www.savoracafe.in/",
  instagramHandle: "savoracalicut",
};
