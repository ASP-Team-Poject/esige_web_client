export type MenuRoute = {
  name: string;
  path: string;
  icon: any;
  sub_routes?: MenuRoute[];
};

export type SchoolType = {
  id: number;
  codeEtablissement: string;
  isActive: true;
  centreRegId: string;
  villeId: string;
  center: string;
  userId: number;
  libelle: string;
  slug: string;
  createdAt: string;
  isDeleted: false;
  codeAdmin: string;
  prefix: string;
  typeEnseignement: string;
  refEtabMongodb: string;
  refIdenMongodb: string;
  arreteMinisteriel: string;
  matriculeCecope: string;
  nom: string;
  proved: string;
  province: string;
  citeChefferieVillage: string;
  sousproved: string;
  territoireCommuneVille: string;
};

export type LoginCredentials = {
  username: string;
  password: string;
};

export type UserType = {
  id: number;
  isDeleted: boolean;
  updatedAt: string;
  createdAt: string;
  slug: string;
  about: string;
  firstName: string;
  name: string;
  active: true;
  phone: string;
  email: string;
  roles: string; // ex.: '["ROLE_SOUSPROVED"]',
  username: string;
  territoireId: number;
  userId: number;
  pictureId: any;
  sousProvedId: number;
  provedId: number;
  provinceId: number;
};

export type MessageType = {
  error: string | null;
  success: string | null;
};
