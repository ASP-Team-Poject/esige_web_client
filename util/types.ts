export type MenuRoute = {
  name: string;
  path: string;
  icon: any;
  sub_routes?: MenuRoute[];
};

export type SchoolType = {
  id: number;
  name: string;
  codeAdmin: string;
  code: string;
  createdAt: string;
};
