import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DblQzHEA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function readStoredTheme() {
	const stored = localStorage.getItem("theme");
	return stored === "dark" || stored === "light" ? stored : "light";
}
function applyTheme(theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.style.colorScheme = theme;
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		setTheme(readStoredTheme());
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		localStorage.setItem("theme", next);
		applyTheme(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:underline focus-visible:decoration-current focus-visible:underline-offset-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "text-xs",
			children: theme === "dark" ? "☾" : "☀"
		})
	});
}
var experience = [
	{
		title: "Product Designer",
		company: "Confidential Startup",
		dates: "Jul 2025 - Present",
		bullets: ["Leading end-to-end product design from 0 to 1 for an early-stage venture, owning the full design pipeline from discovery to delivery."]
	},
	{
		title: "Brand & Digital Designer",
		company: "Kafka INK Prague",
		dates: "Aug 2024 - Present",
		bullets: ["Redesigned studio website, improving usability and increasing booking inquiry rate by 40%."]
	},
	{
		title: "Program Producer & Visual Designer",
		company: "Temple Radio",
		dates: "Nov 2024 - Present",
		bullets: ["Built the visual language and identity system for a weekly music & interview program (cover art, social cutdowns, story/reel templates)."]
	},
	{
		title: "Co-founder & Creative Director",
		company: "Reown Agency",
		dates: "Aug 2024 - Jul 2025",
		bullets: ["Led brand identity and digital content systems for lifestyle, cosmetics, and F&B clients."]
	},
	{
		title: "Creative Director (Contract)",
		company: "Eral Okulları",
		dates: "Nov 2024 - Jan 2025",
		bullets: ["Designed admissions campaign visuals across 8+ formats (billboards, OOH, digital, social, print), maintaining consistent visual hierarchy."]
	},
	{
		title: "Visual Communication Designer",
		company: "Peyote Müzik",
		dates: "Nov 2023 - May 2024",
		bullets: ["Produced event and artist promotion systems across web, social, and print channels, increasing event attendance by 25%."]
	},
	{
		title: "Senior Lead Designer → Lead Designer → Graphic Designer",
		company: "Cleopatra INK",
		dates: "Jul 2020 - Nov 2023",
		bullets: ["Progressed from Graphic Designer to Senior Lead Designer over 3.5 years across three European studio locations (Türkiye, Switzerland, Germany)."]
	}
];
var education = [{
	school: "Eskişehir Technical University",
	degree: "BSc",
	dates: ""
}, {
	school: "Anadolu University",
	degree: "Associate Degree",
	dates: ""
}];
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-border pt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-screen-sm px-5 py-16 text-sm leading-relaxed tracking-tight sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-medium text-foreground",
					children: "Ihsan Soycelik"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Product Designer"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted-foreground",
				children: [
					"Istanbul, Türkiye ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-border",
						children: "•"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "subtle-link",
						href: "tel:+905353944444",
						children: "+90 535 394 44 44"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-border",
						children: "•"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "subtle-link",
						href: "mailto:contact@soycelik.com",
						children: "contact@soycelik.com"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-border",
						children: "•"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "subtle-link",
						href: "https://linkedin.com/in/isoycelik",
						target: "_blank",
						rel: "noreferrer",
						children: "linkedin.com/in/isoycelik"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted-foreground",
				children: "Product Designer with 5+ years of experience in brand, digital product, and visual communication. Leading end-to-end product design for an early-stage startup, with a proven track record in building design systems, UI components, and user flows. Experienced in performance-driven marketing assets for lifestyle, F&B, and multi-location studio clients across Türkiye and Europe. Comfortable working directly with founders, moving fast, and delivering consistent, measurable results."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 space-y-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Experience",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "m-0 flex list-none flex-col gap-8 p-0",
					children: experience.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 items-baseline gap-x-6 sm:grid-cols-[minmax(0,1fr)_auto]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "m-0 min-w-0 font-medium text-foreground",
								children: [
									role.title,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-border",
										children: "•"
									}),
									" ",
									role.company
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 whitespace-nowrap tabular-nums text-muted-foreground sm:mt-0 sm:text-right",
								children: role.dates
							})]
						}), role.bullets ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2 text-muted-foreground",
							children: role.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pl-4 -indent-4 before:mr-2 before:content-['•']",
								children: b
							}, b))
						}) : null]
					}, `${role.title}-${role.company}-${role.dates}`))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Education",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-4",
					children: education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "min-w-0 font-medium text-foreground",
							children: [
								e.school,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-border",
									children: "•"
								}),
								" ",
								e.degree
							]
						}), e.dates ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 shrink-0 tabular-nums text-muted-foreground sm:mt-0",
							children: e.dates
						}) : null]
					}, e.school))
				})
			})]
		})]
	});
}
//#endregion
export { Index as component };
