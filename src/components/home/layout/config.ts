import { NavItemConfig } from "@/types/nav";
import { paths } from "@/paths";

export interface LayoutConfig {
  navItems: NavItemConfig[];
}

export const layoutConfig: LayoutConfig = {
  navItems: [
    {
      key: "home",
      items: [
        { key: "main", title: "Beranda", href: paths.home.main },
        { key: "ikk", title: "IKK", href: paths.home.ikk },
        {
          key: "infographics",
          title: "Infografik",
          items: [
            {
              key: "kemiskinan",
              title: "Kemiskinan",
              href: paths.home.infographics.kemiskinan,
            },
            {
              key: "kelaparan",
              title: "Kelaparan",
              href: paths.home.infographics.kelaparan,
            },
          ],
        },
        { key: "rpjmd", title: "RPJMD", href: paths.home.rpjmd },
        { key: "sdgs", title: "SDGS", href: paths.home.sdgs.overview },
        { key: "regulations", title: "Regulasi", href: paths.home.regulations },
        { key: "about", title: "Tentang", href: paths.home.about },
      ],
    },
    {
      key: "auth",
      items: [
        { key: "signIn", title: "Sign In", href: paths.auth.signIn },
        { key: "signUp", title: "Sign Up", href: paths.auth.signUp },
        {
          key: "resetPassword",
          title: "Reset Password",
          href: paths.auth.resetPassword,
        },
        {
          key: "updatePassword",
          title: "Update Password",
          href: paths.auth.updatePassword,
        },
      ],
    },
    {
      key: "dashboard",
      items: [{ key: "dashboard", title: "Dashboard", href: paths.dashboard }],
    },
  ],
};
