export type ClubRole = {
  title: string;
  lede: string;
  duties: string[];
  links?: { label: string; href: string }[];
};

export const coachRole: ClubRole = {
  title: "Coach roles",
  lede: "The coach has overall responsibility for the team, on the diamond and at training.",
  duties: [
    "Overall responsibility for the team.",
    "Delegate tasks to other officials as desired.",
    "Attend a coaching clinic as required.",
    "Arrange and conduct training sessions.",
    "Ensure players and parents are informed of team training nights, venues, times and games.",
    "Check with parents about any special medical requirements for their child.",
    "Organise game day fielding positions and the batting order. Ensure no player sits out two successive innings.",
    "Collect, maintain and return the team equipment bag.",
    "Nominate teams and players for inter-club activities, including a Wembley Teeball Association team for State Championships.",
    "Once you have registered on the TBAWA website, let the Chief Coach and Chief Umpire know.",
  ],
  links: [
    {
      label: "Enrol for a TBAWA Level A coaching clinic",
      href: "https://www.tbawa.com.au/be-involved/as-a-coach/enrol-for-a-level-a-clinic/",
    },
  ],
};

export const umpireRole: ClubRole = {
  title: "Umpire roles",
  lede: "Umpires keep the game fair, on time, and friendly for both teams.",
  duties: [
    "Level 1 accredited umpires wear a green shirt and green hat.",
    "Level 2 and above accredited umpires wear a yellow shirt and yellow hat.",
    "Umpires who are not accredited wear a hi-vis shirt over the club shirt.",
    "Attend an umpires clinic if required.",
    "Be at the match 10 minutes before the game.",
    "Be available for plate umpiring at home games and base umpire for away games.",
    "If you cannot attend a match, make sure your manager knows so a replacement parent can be found.",
    "Ensure the proper conduct of the game.",
    "Briefly address players before and after the game.",
    "Sign the score sheet and provide a brief match comment.",
    "Once you have registered on the TBAWA website, let the Chief Coach and Chief Umpire know.",
  ],
  links: [
    {
      label: "Enrol for a TBAWA Level 1 umpiring clinic",
      href: "https://www.tbawa.com.au/be-involved/as-an-umpire/enrol-for-a-level-1-clinic/",
    },
  ],
};

export const managerRole: ClubRole = {
  title: "Manager roles",
  lede: "The manager keeps families informed and game day organised around the coach.",
  duties: [
    "Undertake duties as requested by the coach.",
    "Draft the parent scoring roster for the season, including the team list and contact numbers.",
    "Email fixtures to team members.",
    "Ensure players and parents are informed of team training nights, venues, times and games.",
    "For an 8:30am home game (Under 7s and Under 9s), arrange set up of bases on the diamond, shelters and benches for both teams.",
    "Organise the bench with team batting orders and fielding positions on match day. How much you do depends on the support the coach needs.",
    "For the second home game at 10:15am (Under 11s), arrange collection and return of bases (in the bag supplied), shelters and benches to the club storeroom after the match.",
    "Look after team hats: distribute and collect them each week and launder when necessary.",
    "Co-ordinate team or club social activities, such as photos and fun day.",
    "Ensure an umpire is available for each match.",
    "Organise base coaches.",
    "Pick up, distribute, collect and return team uniforms.",
  ],
  links: [
    {
      label: "WTBC Managers Booklet (PDF)",
      href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2023/10/WTBC-Managers-Booklet.pdf",
    },
  ],
};

export const scorerRole: ClubRole = {
  title: "Scorer roles",
  lede: "Scorers sit behind home plate and keep the book for both teams.",
  duties: [
    "Be positioned behind home plate at least 15 minutes before the game starts.",
    "Wear closed-in shoes.",
    "Obtain the team batting order, score book and pencils from the manager.",
    "Complete the details of both teams in the score book.",
    "Maintain scores in conjunction with the other team’s scorer.",
    "Call to the umpire after the 9th batter of each innings has batted and play has been completed (after the umpire has called time).",
    "For home games, make sure the score sheet is completed and placed in the box in the kiosk at the clubrooms.",
    "Return the score book and pencils to the manager.",
  ],
  links: [
    {
      label: "Scorecard and incident report (PDF)",
      href: "https://www.woodlandsteeball.com.au/wp-content/uploads/2022/07/ScoreCard-Incident-Report-1.pdf",
    },
  ],
};

export const committeeRoles: { title: string; duties: string[] }[] = [
  {
    title: "President",
    duties: [
      "Chair monthly meetings and attend club events.",
      "Ensure the smooth running of the club.",
      "Represent the club on the Tee-ball Association of WA Council and the Wembley Tee-ball Association.",
    ],
  },
  {
    title: "Vice-President",
    duties: [
      "Preside in the absence of the President.",
      "Work with all committee members.",
      "Carry out assignments delegated by the President.",
    ],
  },
  {
    title: "Secretary",
    duties: [
      "Maintain minutes for all meetings and distribute them.",
      "Ensure adherence to all notifications of meetings.",
    ],
  },
  {
    title: "Treasurer",
    duties: [
      "Safeguard and maintain financial records.",
      "Develop and enforce compliance with financial controls.",
      "Prepare the annual budget.",
      "Dispense funds as approved.",
      "Report on financial status.",
      "Handle invoices and payments.",
    ],
  },
  {
    title: "Registrar",
    duties: [
      "Run the online registration process.",
      "Assist members with the Kidsport program.",
      "Ensure that all registered players are assigned to a team.",
    ],
  },
  {
    title: "Chief Coach",
    duties: [
      "Assist team coaches with information and publications.",
      "Attend TBAWA coaching clinics.",
      "Answer questions from coaches.",
    ],
  },
  {
    title: "Chief Umpire",
    duties: [
      "Assist team umpires with information and publications.",
      "Attend TBAWA umpiring clinics.",
      "Enforce all playing rules.",
      "Answer questions and concerns about rules.",
    ],
  },
  {
    title: "Uniform Manager",
    duties: [
      "Assist teams with the distribution and collection of uniforms.",
      "Maintain a register of uniforms and purchase uniforms.",
    ],
  },
  {
    title: "Equipment Manager",
    duties: [
      "Distribute and look after team equipment.",
      "Issue and collect equipment.",
    ],
  },
  {
    title: "Committee members",
    duties: [
      "Broadly support the committee.",
      "Attend meetings as and when required.",
    ],
  },
];
