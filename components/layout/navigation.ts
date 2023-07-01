import { Union } from "@/models/utils";

const menu = ["홈", "영양소", "건강목표", "대시보드", "데이터"] as const;
export type MenuType = Union<typeof menu>;

const mode = ["admin", "user"] as const;
export type ModeType = Union<typeof mode>;

export type Tab = {
  name: string;
  path: string;
};

const navigation: [ModeType, MenuType, Tab[]][] = [
  ["admin", "대시보드", [{ name: "대시보드", path: "/rhksflwkdjemals" }]],
  [
    "admin",
    "데이터",
    [
      { name: "데이터생성", path: "/rhksflwkdjemals/data/seed" },
      { name: "데이터추가", path: "/rhksflwkdjemals/data/create" },
      { name: "데이터조회", path: "/rhksflwkdjemals/data/see" },
      { name: "데이터수정", path: "/rhksflwkdjemals/data/edit" },
    ],
  ],
];
