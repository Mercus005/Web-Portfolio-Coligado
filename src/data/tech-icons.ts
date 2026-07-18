    // Single source of truth for every tech-stack icon on the site. Add a new
// icon file to /public/icons/, then add one line here — both the Skills
// section and the background animation pick it up automatically from this
// one place, instead of needing to be updated separately.
//
// (True filesystem auto-discovery isn't possible here: this site is a fully
// static export for GitHub Pages, so there's no server at runtime to scan
// the folder — everything has to be known at build time.)

export type TechCategory = "Web Development" | "Game & Mobile" | "Data Science";

export interface TechIcon {
  name: string;
  file: string; // filename inside /public/icons/
  category: TechCategory;
}

export const TECH_ICONS: TechIcon[] = [
  { name: "HTML5", file: "html5.svg", category: "Web Development" },
  { name: "CSS3", file: "css.svg", category: "Web Development" },
  { name: "JavaScript", file: "javascript.svg", category: "Web Development" },
  { name: "React", file: "react.svg", category: "Web Development" },
  { name: "Bootstrap", file: "bootstrap.svg", category: "Web Development" },
  { name: "Node.js", file: "nodejs.svg", category: "Web Development" },
  { name: "C#", file: "csharp.svg", category: "Web Development" },
  { name: "ASP.NET", file: "aspnet.svg", category: "Web Development" },
  { name: "MySQL", file: "mysql.svg", category: "Web Development" },
  { name: "SQLite", file: "sqlite.svg", category: "Web Development" },
  { name: "Unity", file: "unity.svg", category: "Game & Mobile" },
  { name: "Godot", file: "godot.svg", category: "Game & Mobile" },
  { name: "Xamarin", file: "xamarin.svg", category: "Game & Mobile" },
  { name: "Flutter", file: "flutter.svg", category: "Game & Mobile" },
  { name: "Python", file: "python.svg", category: "Data Science" },
  { name: "Pandas", file: "pandas.svg", category: "Data Science" },
  { name: "NumPy", file: "numpy.svg", category: "Data Science" },
  { name: "Plotly", file: "plotly.svg", category: "Data Science" },
];