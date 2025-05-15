// We gonna have a different list of schools for each tabName
export const schools = [
  {
    id: 1,
    name: "College Boboto",
    codeAdmin: "BOBOTO2025001",
    code: "CODE1203888",
    createdAt: "01-05-2010",
  },
  {
    id: 2,
    name: "Saint Raphael",
    codeAdmin: "RAPHAEL2025001",
    code: "CODE1203777",
    createdAt: "01-05-2011",
  },
  {
    id: 3,
    name: "Saint Etienne",
    codeAdmin: "ETIENNE2025001",
    code: "CODE1203666",
    createdAt: "01-06-2011",
  },
];

export const users = [
  {
    id: 1,
    phone: "08211111111",
    name: "Blaise Kabasele",
    province: "Kinshasa",
    proved: "Lukunga",
    sous_proved: "Gombe",
    createdAt: new Date(),
  },
  {
    id: 2,
    phone: "08211111122",
    name: "Naomi Kembo",
    province: "Kinshasa",
    proved: "Lukunga",
    sous_proved: "Gombe",
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Grace Lola",
    phone: "08211111133",
    province: "Kinshasa",
    proved: "Tshangu",
    sous_proved: "Masina",
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "David Ilunga",
    phone: "08211111144",
    province: "Kinshasa",
    proved: "Tshangu",
    sous_proved: "Masina",
    createdAt: new Date(),
  },
];

export const requestMessages = {
  SERVER_UNREACHABLE:
    "The server is unreachable, please try again or contact you admin.",
  SERVER_ERROR: "There is a problem on the server, please contact your admin.",
};

export const localStoragekeys = {
  CURRRENT_USER: "currentUser",
  CURRRENT_SCHOOL: "currentUser",
  USER_ID: "userId",
};
