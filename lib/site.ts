export const EMAIL = "hello@woodlandsteeball.com.au";
export const PRESIDENT_EMAIL = "president@woodlandsteeball.com.au";
export const ADDRESS = "Woodlands Reserve, Teakwood Ave, Woodlands WA 6018";
export const MAPS_HREF =
  "https://maps.google.com/?q=Woodlands+Reserve+Teakwood+Ave+Woodlands+WA+6018";
export const FACEBOOK_HREF = "https://www.facebook.com/WoodlandsTeeballClub";

export const aboutLinks = [
  { href: "/about", label: "About" },
  { href: "/about/history", label: "History" },
  { href: "/about/committee", label: "Committee" },
  { href: "/about/code-of-conduct", label: "Code of Conduct" },
  { href: "/about/sponsors", label: "Sponsors" },
] as const;

export const infoLinks = [
  { href: "/information/coaches", label: "Coach Roles" },
  { href: "/information/umpires", label: "Umpire Roles" },
  { href: "/information/manager-roles", label: "Manager Roles" },
  { href: "/information/scorer-roles", label: "Scorer Roles" },
  { href: "/information/rules", label: "Rules" },
  { href: "/information/grounds", label: "Grounds" },
  { href: "/information/downloads", label: "Downloads" },
] as const;

export type Sponsor = {
  name: string;
  src: string;
  width: number;
  height: number;
  href?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "White Chalk Road",
    src: "/sponsors/white-chalk-road.png",
    width: 600,
    height: 300,
    href: "https://www.whitechalkroad.com.au/",
  },
  {
    name: "Woodlands Wolves",
    src: "/sponsors/woodlands-wolves.png",
    width: 600,
    height: 300,
    href: "https://woodlandswolves.com.au/",
  },
  {
    name: "Fielders",
    src: "/sponsors/fielders.png",
    width: 519,
    height: 97,
    href: "https://www.fielders.net/",
  },
  {
    name: "Little Giant",
    src: "/sponsors/little-giant.png",
    width: 600,
    height: 300,
  },
  {
    name: "Capita Finance",
    src: "/sponsors/capita.png",
    width: 600,
    height: 300,
  },
  {
    name: "CSL Ships",
    src: "/sponsors/csl-ships.png",
    width: 108,
    height: 46,
  },
  {
    name: "MI Plumbers",
    src: "/sponsors/mi-plumbers.png",
    width: 600,
    height: 82,
  },
  {
    name: "Clearview Security",
    src: "/sponsors/clearview.jpg",
    width: 720,
    height: 310,
  },
  {
    name: "MG Landscape",
    src: "/sponsors/mg-landscape.jpg",
    width: 774,
    height: 766,
  },
  {
    name: "Mechanical Rock",
    src: "/sponsors/mechanical-rock.png",
    width: 1502,
    height: 660,
  },
  {
    name: "Grill'd",
    src: "/sponsors/grilld.jpg",
    width: 640,
    height: 350,
    href: "https://grilld.com.au/restaurants/western-australia/innaloo",
  },
  {
    name: "Budget",
    src: "/sponsors/budget.png",
    width: 600,
    height: 300,
    href: "https://www.budget.com.au/en/home",
  },
  {
    name: "Oh So Deli",
    src: "/sponsors/oh-so-deli.png",
    width: 225,
    height: 225,
    href: "https://www.instagram.com/ohsodeli/",
  },
  {
    name: "Profile Orthodontics",
    src: "/sponsors/profile-orthodontics.png",
    width: 300,
    height: 150,
    href: "https://profileorthodontics.com.au/",
  },
];

export const namedSponsors: { name: string; href?: string }[] = [
  { name: "AR Advisors", href: "https://www.aradvisors.com.au/" },
  { name: "Gryphon Garage Doors", href: "https://gryphongaragedoors.com/" },
  {
    name: "Airad Consultants",
    href: "https://www.facebook.com/Airad-Consultants-620933341329518/",
  },
  { name: "Fogarty Partners", href: "https://www.fogartypartners.com.au/" },
  { name: "Davey Real Estate", href: "https://www.daveyrealestate.com.au/" },
  { name: "Magic Travel" },
  { name: "Gobsmacked Mouth Guards", href: "https://gobsmackedsmg.com.au/" },
  {
    name: "Terry White Chemmart Doubleview",
    href: "http://www.terrywhitechemmartdoubleview.com.au/",
  },
  { name: "Kreepy Krauly", href: "https://www.kreepykrauly.com.au/" },
];

export const gallery = [
  {
    src: "/gallery/batting.jpg",
    alt: "A Woodlands player in a green uniform swings at a ball on the tee",
  },
  {
    src: "/gallery/running.jpg",
    alt: "Young players in green Woodlands uniforms running between bases",
  },
  {
    src: "/gallery/throw.jpg",
    alt: "A Woodlands player in green winds up to throw",
  },
  {
    src: "/gallery/fielding.jpg",
    alt: "A Woodlands player fields a ground ball on the diamond",
  },
  {
    src: "/gallery/game-1.jpg",
    alt: "Woodlands Teeball players during a Saturday game",
  },
  {
    src: "/gallery/game-2.jpg",
    alt: "Woodlands Teeball players in green uniforms on the diamond",
  },
  {
    src: "/gallery/game-3.jpg",
    alt: "A Woodlands Teeball game underway at the reserve",
  },
  {
    src: "/gallery/game-4.jpg",
    alt: "Players and families at a Woodlands Teeball game",
  },
  {
    src: "/gallery/game-5.jpg",
    alt: "Woodlands players taking the field in club green",
  },
  {
    src: "/gallery/game-6.jpg",
    alt: "Children playing teeball for Woodlands Teeball Club",
  },
] as const;

export const committee = [
  { position: "President", name: "Claire Halliday" },
  { position: "Vice-President", name: "Verity Tarsa" },
  { position: "Secretary", name: "Alicia Rafty" },
  { position: "Treasurer", name: "Verity Phoenix" },
  { position: "Registrar", name: "Jackie Comb" },
  { position: "Chief Coach", name: "Sam Cousens" },
  { position: "Chief Umpire", name: "Clare Brown" },
  { position: "Equipment Officer", name: "Joe Taylor" },
  { position: "Uniforms Officer", name: "Jayne Taylor" },
  { position: "Canteen Manager", name: "Catherine Clarke" },
  { position: "Sponsorship Coordinator", name: "Mike Kerr" },
  { position: "Ordinary Member", name: "Asha Julian" },
  { position: "Ordinary Member", name: "Ash Brewis" },
] as const;

export const downloads = [
  {
    title: "TBAWA Rule Book (Edition 7)",
    href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2023/10/Rule-Book-Edition-7-1-1.pdf",
  },
  {
    title: "WTBC Managers Booklet",
    href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2023/10/WTBC-Managers-Booklet.pdf",
  },
  {
    title: "Wembley Teeball Association By-Laws (March 2023)",
    href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2023/10/Wembley-Teeball-Assoc-By-Laws-March-2023.pdf",
  },
  {
    title: "Wembley Handbook (October 2023)",
    href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2023/10/Wembley-Handbook-Oct-2023.pdf",
  },
  {
    title: "Woodlands Teeball Club Inc Constitution (February 2018)",
    href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2024/09/Woodlands-Teeball-Club-Inc-Constitution-February-2018.pdf",
  },
  {
    title: "Scorecard and incident report",
    href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2022/07/ScoreCard-Incident-Report-1.pdf",
  },
  {
    title: "Wembley diamond allocation",
    href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2022/06/Wembley-Diamond-Allocation.pdf",
  },
] as const;

export const grounds = [
  "Richard Guelfi Reserve, Balcatta",
  "City Beach Oval",
  "Alderbury Reserve",
  "Birralee Oval",
  "Woodlands Reserve",
] as const;
