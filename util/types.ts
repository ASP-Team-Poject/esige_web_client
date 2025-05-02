export type MenuRoute = {
  name: string;
  path: string;
  icon: any;
  sub_routes?: MenuRoute[];
};
