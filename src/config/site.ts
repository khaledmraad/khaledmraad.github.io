export const siteConfig = {
  title: "Khaled Mrad",
  description: "Personal blog and research notes by Khaled Mrad.",
  siteUrl: "https://khaledmraad.github.io",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blog_posts" },
    { label: "Projects", href: "/project_posts" },
    { label: "About Me", href: "/about" },
    { label: "Search", href: "/search", icon: "mingcute:search-line" },
  ],
  profile: {
    title: "Khaled Mrad",
    subtitle: `AI Engineer.
<br><br>
<iconify-icon icon="mingcute:mail-line"></iconify-icon> <strong>Email:</strong> <a href="mailto:khaled.mrad@ensi-uma.tn">khaled.mrad@ensi-uma.tn</a>
<br><br>
`,
    imageUrl: "/images/portrait.png",
    imageAlt: "Portrait of Khaled Mrad",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/khaledmraad", icon: "mingcute:github-line" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/khaled-mrad/",
        icon: "ri:linkedin-fill",
      },
      { label: "X", href: "https://x.com/Khaled32606946", icon: "mingcute:social-x-line" },
      
    ],
    button: { label: "GitHub", href: "https://github.com/khaledmraad" },
  },
} as const;
