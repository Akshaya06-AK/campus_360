import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell, BookOpen, Bookmark, Briefcase, Building2, CalendarDays, Calculator,
  CheckCircle2, ChevronRight, Download, Edit3, Eye, FileText, GraduationCap,
  Heart, Home, Lock, LogOut, MapPinned, Menu, MessageCircle, Moon, Search,
  Send, Settings, Shield, Sparkles, Sun, User, Users, X, Zap
} from "lucide-react";
import {
  announcements,
  blocks,
  clubs,
  events,
  placements,
  resources,
  searchItems,
  studentProfile,
} from "./data/campusData";

const navItems = [
  ["Dashboard", Home, "dashboard"],
  ["CGPA Calculator", Calculator, "cgpa"],
  ["Departments", Building2, "departments"],
  ["Clubs", Users, "clubs"],
  ["Events", CalendarDays, "events"],
  ["Announcements", Bell, "announcements"],
  ["Resources", BookOpen, "resources"],
  ["Placements", Briefcase, "placements"],
  ["Profile", User, "profile"],
  ["Settings", Settings, "settings"],
];

const gradeMap = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  U: 0,
};

const cls = (...x) => x.filter(Boolean).join(" ");

function Toast({ text }) {
  return (
    <AnimatePresence>
      {text && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          className="fixed right-4 top-4 z-[80] flex max-w-sm items-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-bold text-white shadow-2xl dark:bg-white dark:text-slate-950"
        >
          <CheckCircle2 className="text-emerald-400" size={22} />
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Button({ children, onClick, className = "", variant = "primary", icon }) {
  const styles = {
    primary:
      "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-700",
    secondary:
      "border border-slate-200 bg-white/80 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800",
    ghost:
      "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
  };

  return (
    <button
      onClick={onClick}
      className={cls(
        "ripple inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition active:scale-95",
        styles[variant],
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className={cls(
        "glass rounded-[20px] p-5 shadow-xl shadow-slate-200/60 dark:shadow-black/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function Modal({ open, title, children, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 18 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="max-h-[88vh] w-full max-w-4xl overflow-auto rounded-[28px] border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-extrabold">{title}</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X size={22} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Title({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-1 font-semibold text-slate-500 dark:text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">
      <p className="text-[11px] font-black uppercase text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-1 font-black text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}

function Sidebar({ active, setActive, open, setOpen, notify }) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <aside
        className={cls(
          "fixed left-0 top-0 z-40 h-screen w-72 border-r border-slate-200/70 bg-white/85 p-5 backdrop-blur-2xl transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950/90",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-2xl shadow-lg shadow-indigo-500/30">
            🎓
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">
              Akshaya
            </h1>
            <p className="text-sm font-bold text-indigo-600 dark:text-cyan-300">
              Campus360
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map(([label, Icon, key]) => (
            <button
              key={key}
              onClick={() => {
                setActive(key);
                setOpen(false);
              }}
              className={cls(
                "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition-all",
                active === key
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              )}
            >
              <Icon size={20} />
              <span>{label}</span>
              {active === key && <ChevronRight className="ml-auto" size={17} />}
            </button>
          ))}

          <button
            onClick={() => notify("Logout clicked. Demo session stays active.")}
            className="mt-4 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
}

function Navbar({ setActive, dark, setDark, setSideOpen, notify }) {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [recent, setRecent] = useState([
    "D Block AIDS",
    "CGPA Calculator",
    "Google Placement",
  ]);

  const results = searchItems
    .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6);

  function openItem(item) {
    setRecent([item, ...recent.filter((r) => r !== item)].slice(0, 5));

    const q = item.toLowerCase();

    if (q.includes("cgpa")) setActive("cgpa");
    else if (q.includes("block") || q.includes("library") || q.includes("food"))
      setActive("departments");
    else if (q.includes("club")) setActive("clubs");
    else if (q.includes("hackathon")) setActive("events");
    else if (q.includes("placement") || q.includes("google"))
      setActive("placements");
    else if (q.includes("paper") || q.includes("timetable"))
      setActive("resources");
    else if (q.includes("profile")) setActive("profile");
    else if (q.includes("setting")) setActive("settings");
    else setActive("dashboard");

    setQuery("");
    setSearchOpen(false);
    notify(`Opened ${item}`);
  }

  const showSearchBox = searchOpen && (query.trim() !== "" || recent.length > 0);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/75 px-4 py-4 backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-950/75 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          className="rounded-2xl p-3 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          onClick={() => setSideOpen(true)}
        >
          <Menu className="dark:text-white" />
        </button>

        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />

          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSearchOpen(true);
            }}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => {
              setTimeout(() => setSearchOpen(false), 180);
            }}
            placeholder="Search blocks, clubs, events, resources, placements..."
            className="w-full rounded-2xl border border-slate-200 bg-white/80 py-3 pl-12 pr-4 text-sm font-semibold text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:focus:ring-indigo-950"
          />

          {showSearchBox && (
            <div className="absolute left-0 right-0 top-14 z-40 rounded-[22px] border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
              <p className="mb-2 text-xs font-black uppercase tracking-wide text-slate-400">
                {query ? "Recommendations" : "Recent Searches"}
              </p>

              <div className="space-y-1">
                {(query ? results : recent).map((item) => (
                  <button
                    key={item}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => openItem(item)}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold text-slate-700 hover:bg-indigo-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <Search size={16} />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => notify("Notifications: 4 new updates")}
          className="rounded-2xl bg-white p-3 text-slate-700 shadow-sm dark:bg-slate-900 dark:text-white"
        >
          <Bell size={20} />
        </button>

        <button
          onClick={() => notify("Messages opened")}
          className="rounded-2xl bg-white p-3 text-slate-700 shadow-sm dark:bg-slate-900 dark:text-white"
        >
          <MessageCircle size={20} />
        </button>

        <button
          onClick={() => {
            setDark(!dark);
            notify(!dark ? "Dark mode enabled" : "Light mode enabled");
          }}
          className="rounded-2xl bg-slate-950 p-3 text-white shadow-lg dark:bg-amber-400 dark:text-slate-950"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          onClick={() => setActive("profile")}
          className="hidden items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-sm dark:bg-slate-900 dark:text-white sm:flex"
        >
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 font-black text-white">
            A
          </div>
          <span className="text-sm font-black">Akshaya</span>
        </button>
      </div>
    </header>
  );
}


function Dashboard({ setActive, notify }) {
  const quick = [
    ["CGPA Calculator", Calculator, "Calculate Now", "from-indigo-600 to-cyan-500", "cgpa"],
    ["Departments", Building2, "Explore", "from-emerald-500 to-teal-500", "departments"],
    ["Clubs", Users, "Join Clubs", "from-purple-600 to-fuchsia-500", "clubs"],
    ["Placements", Briefcase, "Explore Jobs", "from-amber-500 to-orange-500", "placements"],
  ];

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-8 text-white shadow-2xl shadow-indigo-500/30">
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/20 blur-xl" />
        <div className="absolute bottom-5 right-28 h-24 w-24 rounded-[30px] bg-amber-300/40 blur-sm" />

        <p className="font-bold text-cyan-100">Welcome back 👋</p>
        <h2 className="mt-2 text-4xl font-black">
          Akshaya, your smart college companion is ready.
        </h2>
        <p className="mt-3 max-w-2xl font-medium text-white/85">
          Everything you need for your college journey in one premium dashboard.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["2 Classes Today", "1 Event", "3 Assignments", "Placement Drive Soon"].map((x) => (
            <span
              key={x}
              className="rounded-full bg-white/18 px-4 py-2 text-sm font-bold backdrop-blur"
            >
              {x}
            </span>
          ))}
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {quick.map(([title, Icon, button, gradient, key]) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={title}
            className={`card-hover rounded-[24px] bg-gradient-to-br ${gradient} p-5 text-white shadow-xl`}
          >
            <Icon size={34} />
            <h3 className="mt-5 text-xl font-black">{title}</h3>
            <button
              onClick={() => {
                setActive(key);
                notify(`${title} opened`);
              }}
              className="mt-5 rounded-2xl bg-white/20 px-4 py-2 text-sm font-black backdrop-blur transition hover:bg-white/30"
            >
              {button} →
            </button>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Students", "4,860", GraduationCap],
          ["Departments", "12", Building2],
          ["Clubs", "24", Users],
          ["Upcoming Events", "6", CalendarDays],
        ].map(([title, value, Icon]) => (
          <Card key={title}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-black text-slate-500 dark:text-slate-400">
                  {title}
                </p>
                <h3 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
                  {value}
                </h3>
              </div>
              <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-950 dark:text-cyan-300">
                <Icon />
              </div>
            </div>

            <div className="mt-5 flex h-12 items-end gap-1">
              {[30, 58, 42, 80, 54, 92, 70].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-500 to-cyan-400"
                />
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <Card>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Today's Timetable
          </h3>
          {[
            "09:00 - Mathematics",
            "10:00 - AI Basics",
            "11:30 - Python Lab",
            "02:00 - Data Science",
          ].map((x) => (
            <p
              key={x}
              className="mt-3 rounded-xl bg-slate-100 p-3 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {x}
            </p>
          ))}
        </Card>

        <Card>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Attendance
          </h3>
          <div className="mt-5 flex items-center gap-5">
            <div className="grid h-28 w-28 place-items-center rounded-full border-[10px] border-indigo-500 text-2xl font-black text-slate-900 dark:text-white">
              93%
            </div>
            <div className="space-y-2 text-sm font-bold text-slate-600 dark:text-slate-300">
              <p>Present: 140</p>
              <p>Absent: 10</p>
              <p>Status: Safe</p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Weather & Quote
          </h3>
          <p className="mt-4 text-4xl font-black text-slate-900 dark:text-white">
            28°C
          </p>
          <p className="font-bold text-slate-500">Coimbatore · Sunny</p>
          <p className="mt-4 text-sm font-bold text-slate-600 dark:text-slate-300">
            “Success is built one lecture, one project, and one challenge at a time.”
          </p>
        </Card>
      </div>
    </div>
  );
}

function CGPA({ notify }) {
  const [count, setCount] = useState(5);
  const [subjects, setSubjects] = useState([]);
  const [result, setResult] = useState(null);

  function generate() {
    const n = Math.max(1, Math.min(Number(count) || 1, 15));
    setSubjects(
      Array.from({ length: n }, (_, i) => ({
        name: `Subject ${i + 1}`,
        grade: "A+",
        credit: 3,
      }))
    );
    setResult(null);
    notify("Subjects generated");
  }

  function calculate() {
    if (!subjects.length) return notify("Generate subjects first");

    const credits = subjects.reduce((sum, s) => sum + Number(s.credit || 0), 0);
    const weighted = subjects.reduce(
      (sum, s) => sum + (gradeMap[s.grade] || 0) * Number(s.credit || 0),
      0
    );

    if (!credits) return notify("Enter valid credits");

    setResult((weighted / credits).toFixed(2));
    notify("CGPA calculated successfully");
  }

  function reset() {
    setSubjects([]);
    setResult(null);
    setCount(5);
    notify("CGPA calculator reset");
  }

  const badge =
    result >= 9
      ? "Excellent"
      : result >= 8
      ? "Very Good"
      : result >= 7
      ? "Good"
      : result >= 5
      ? "Average"
      : "Fail";

  return (
    <div className="space-y-6">
      <Title
        title="CGPA Calculator"
        subtitle="Generate subjects, add grades and credits, then calculate your CGPA."
      />

      <Card>
        <div className="flex flex-wrap items-end gap-4">
          <label className="min-w-64 flex-1 text-sm font-black text-slate-600 dark:text-slate-300">
            Number of Subjects
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white p-3 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </label>

          <Button onClick={generate}>Generate Subjects</Button>
          <Button onClick={calculate} icon={<Calculator size={18} />}>
            Calculate CGPA
          </Button>
          <Button onClick={reset} variant="secondary">
            Reset
          </Button>
        </div>

        <div className="mt-6 space-y-3">
          {subjects.map((s, i) => (
            <div
              key={i}
              className="grid gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800 md:grid-cols-3"
            >
              <input
                value={s.name}
                onChange={(e) =>
                  setSubjects(
                    subjects.map((x, j) =>
                      j === i ? { ...x, name: e.target.value } : x
                    )
                  )
                }
                className="rounded-xl border border-slate-200 bg-white p-3 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />

              <select
                value={s.grade}
                onChange={(e) =>
                  setSubjects(
                    subjects.map((x, j) =>
                      j === i ? { ...x, grade: e.target.value } : x
                    )
                  )
                }
                className="rounded-xl border border-slate-200 bg-white p-3 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              >
                {Object.keys(gradeMap).map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>

              <input
                type="number"
                value={s.credit}
                onChange={(e) =>
                  setSubjects(
                    subjects.map((x, j) =>
                      j === i ? { ...x, credit: e.target.value } : x
                    )
                  )
                }
                className="rounded-xl border border-slate-200 bg-white p-3 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>
          ))}
        </div>

        {result && (
          <div className="mt-6 flex flex-wrap items-center gap-6 rounded-[24px] bg-gradient-to-br from-indigo-600 to-cyan-500 p-6 text-white">
            <div className="grid h-32 w-32 place-items-center rounded-full border-[10px] border-white/55 text-3xl font-black">
              {result}
            </div>
            <div>
              <p className="text-lg font-black">Performance Badge</p>
              <h3 className="text-4xl font-black">{badge}</h3>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
function Departments({ notify }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-6">
      <Title
        title="Departments & Campus Blocks"
        subtitle="View block-wise classes, floors, subjects, labs and facilities."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blocks.map((block) => (
          <Card key={block.id} className="card-hover">
            <div className={`mb-4 h-2 rounded-full bg-gradient-to-r ${block.color}`} />

            <div className="flex items-start justify-between">
              <div>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-700 dark:bg-indigo-950 dark:text-cyan-300">
                  {block.badge}
                </span>
                <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                  {block.block}
                </h3>
                <p className="mt-1 font-bold text-slate-600 dark:text-slate-300">
                  {block.title}
                </p>
              </div>
              <Building2 className="text-indigo-600 dark:text-cyan-300" />
            </div>

            <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              {block.description}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <Info label="Classes" value={block.totalClasses} />
              <Info label="Faculty" value={block.faculty} />
              <Info label="Students" value={block.students} />
            </div>

            <div className="mt-5 flex gap-2">
              <Button
                onClick={() => setSelected(block)}
                className="flex-1"
                icon={<Eye size={18} />}
              >
                View Details
              </Button>

              <Button
                onClick={() => notify(`${block.block} map opened`)}
                variant="secondary"
                icon={<MapPinned size={18} />}
              >
                Map
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={!!selected}
        title={`${selected?.block} - ${selected?.title}`}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <div className="space-y-5">
            <p className="rounded-2xl bg-indigo-50 p-4 font-bold text-indigo-950 dark:bg-indigo-950 dark:text-cyan-100">
              {selected.description}
            </p>

            <div className="grid gap-3 md:grid-cols-4">
              <Info label="Total Classes" value={selected.totalClasses} />
              <Info label="Faculty" value={selected.faculty} />
              <Info label="Students" value={selected.students} />
              <Info label="Incharge" value={selected.hod} />
            </div>

            <h3 className="text-xl font-black">Floor-wise Classes & Subjects</h3>

            {selected.floors.map((floor) => (
              <div
                key={floor.name}
                className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"
              >
                <h4 className="font-black text-slate-900 dark:text-white">
                  {floor.name}
                </h4>
                <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <b>Classes:</b> {floor.classes.join(", ")}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <b>Subjects:</b> {floor.subjects.join(", ")}
                </p>
              </div>
            ))}

            <h3 className="text-xl font-black">Labs / Facilities</h3>

            <div className="flex flex-wrap gap-2">
              {selected.labs.map((lab) => (
                <span
                  key={lab}
                  className="rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                >
                  {lab}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => notify(`${selected.block} timetable opened`)}>
                Open Timetable
              </Button>
              <Button
                variant="secondary"
                onClick={() => notify(`${selected.block} faculty list opened`)}
              >
                Faculty List
              </Button>
              <Button
                variant="secondary"
                onClick={() => notify(`${selected.block} resources opened`)}
              >
                Resources
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function Clubs({ notify }) {
  const [joined, setJoined] = useState([]);
  const [fav, setFav] = useState([]);

  return (
    <div className="space-y-6">
      <Title
        title="Clubs"
        subtitle="Join clubs, mark favorites and explore student communities."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {clubs.map((club) => (
          <Card key={club.id} className="card-hover">
            <div className="text-5xl">{club.icon}</div>

            <h3 className="mt-4 text-lg font-black text-slate-900 dark:text-white">
              {club.name}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {club.description}
            </p>

            <p className="mt-4 font-black text-indigo-600 dark:text-cyan-300">
              {club.members} Members
            </p>

            <div className="mt-4 flex gap-2">
              <Button
                onClick={() => {
                  setJoined([...new Set([...joined, club.id])]);
                  notify(`Joined ${club.name}`);
                }}
              >
                {joined.includes(club.id) ? "Joined" : "Join"}
              </Button>

              <Button
                variant="secondary"
                onClick={() => {
                  setFav(
                    fav.includes(club.id)
                      ? fav.filter((x) => x !== club.id)
                      : [...fav, club.id]
                  );
                  notify(
                    fav.includes(club.id)
                      ? "Removed from favorite"
                      : "Added to favorite"
                  );
                }}
                icon={
                  <Heart
                    size={17}
                    className={
                      fav.includes(club.id) ? "fill-rose-500 text-rose-500" : ""
                    }
                  />
                }
              >
                Fav
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Events({ notify }) {
  const [registered, setRegistered] = useState([]);

  return (
    <div className="space-y-6">
      <Title
        title="Events Timeline"
        subtitle="Register for upcoming campus events and placement activities."
      />

      <div className="space-y-4">
        {events.map((event, index) => (
          <Card key={event.name}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-100 font-black text-indigo-700 dark:bg-indigo-950 dark:text-cyan-300">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {event.name}
                  </h3>
                  <p className="font-bold text-slate-500 dark:text-slate-400">
                    {event.date} · {event.time} · {event.venue}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                  {event.countdown}
                </span>

                <Button
                  onClick={() => {
                    setRegistered([...new Set([...registered, event.name])]);
                    notify(`Registered for ${event.name}`);
                  }}
                >
                  {registered.includes(event.name) ? "Registered" : "Register"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Announcements({ notify }) {
  const [read, setRead] = useState([]);

  return (
    <div className="space-y-6">
      <Title
        title="Announcements"
        subtitle="Pinned announcements, circulars, exam schedules and scholarship notices."
      />

      {announcements.map((item) => (
        <Card key={item.title}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-700 dark:bg-indigo-950 dark:text-cyan-300">
                {item.tag}
              </span>

              <h3 className="mt-3 text-xl font-black text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="font-semibold text-slate-500 dark:text-slate-400">
                {item.message}
              </p>
            </div>

            <Button
              variant="secondary"
              onClick={() => {
                setRead([...new Set([...read, item.title])]);
                notify(`${item.title} marked as read`);
              }}
            >
              {read.includes(item.title) ? "Read" : "Mark Read"}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
function Placements({ notify }) {
  const [applied, setApplied] = useState([]);
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-6">
      <Title
        title="Placement Dashboard"
        subtitle="Apply for companies and view eligibility details."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {placements.map((company) => (
          <Card key={company.company} className="card-hover">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              {company.company}
            </h3>

            <p className="mt-3 text-3xl font-black text-indigo-600 dark:text-cyan-300">
              {company.package}
            </p>

            <p className="mt-2 font-bold text-slate-500 dark:text-slate-400">
              {company.eligibility}
            </p>

            <span className="mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-black text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              {applied.includes(company.company) ? "Applied" : company.status}
            </span>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  setApplied([...new Set([...applied, company.company])]);
                  notify(`Application submitted to ${company.company}`);
                }}
              >
                {applied.includes(company.company) ? "Applied" : "Apply"}
              </Button>

              <Button variant="secondary" onClick={() => setSelected(company)}>
                Eligibility
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={!!selected}
        title={`${selected?.company} Eligibility`}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <div className="space-y-4">
            <Info label="Package" value={selected.package} />
            <Info label="Eligibility" value={selected.eligibility} />

            <p className="rounded-2xl bg-slate-100 p-4 font-semibold dark:bg-slate-800">
              Application steps: aptitude test, coding test, technical interview
              and HR round.
            </p>

            <Button
              onClick={() => {
                setApplied([...new Set([...applied, selected.company])]);
                notify(`Application submitted to ${selected.company}`);
              }}
            >
              Apply Now
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}

function Resources({ notify }) {
  const [preview, setPreview] = useState(null);
  const [bookmarked, setBookmarked] = useState([]);

  function downloadResource(item) {
    const blob = new Blob(
      [`${item.name}\nType: ${item.type}\nPages: ${item.pages}\n${item.desc}`],
      { type: "text/plain" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${item.name.replaceAll(" ", "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    notify(`${item.name} downloaded`);
  }

  return (
    <div className="space-y-6">
      <Title
        title="Resource Center"
        subtitle="Preview, download and bookmark notes, papers, syllabus and books."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((item) => (
          <Card key={item.name} className="card-hover">
            <FileText className="text-indigo-600 dark:text-cyan-300" size={38} />

            <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
              {item.name}
            </h3>

            <p className="mt-2 font-bold text-slate-500 dark:text-slate-400">
              {item.type} · {item.pages} pages
            </p>

            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {item.desc}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button onClick={() => setPreview(item)} icon={<Eye size={17} />}>
                Preview
              </Button>

              <Button
                variant="secondary"
                onClick={() => downloadResource(item)}
                icon={<Download size={17} />}
              >
                Download
              </Button>

              <Button
                variant="secondary"
                onClick={() => {
                  setBookmarked(
                    bookmarked.includes(item.name)
                      ? bookmarked.filter((x) => x !== item.name)
                      : [...bookmarked, item.name]
                  );

                  notify(
                    bookmarked.includes(item.name)
                      ? "Bookmark removed"
                      : "Bookmarked"
                  );
                }}
                icon={
                  <Bookmark
                    size={17}
                    className={
                      bookmarked.includes(item.name)
                        ? "fill-indigo-500 text-indigo-500"
                        : ""
                    }
                  />
                }
              >
                Save
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={!!preview}
        title={`${preview?.name} Preview`}
        onClose={() => setPreview(null)}
      >
        {preview && (
          <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
            <FileText
              size={64}
              className="mx-auto text-indigo-600 dark:text-cyan-300"
            />

            <h3 className="mt-4 text-2xl font-black">{preview.name}</h3>

            <p className="mt-2 font-semibold text-slate-500 dark:text-slate-400">
              {preview.desc}
            </p>

            <p className="mt-2 font-bold">
              Demo PDF Preview · {preview.pages} pages
            </p>

            <Button className="mt-5" onClick={() => downloadResource(preview)}>
              Download Preview File
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}

function Profile({ notify }) {
  const [profile, setProfile] = useState(studentProfile);
  const [edit, setEdit] = useState(false);

  return (
    <div className="space-y-6">
      <Title
        title="Profile"
        subtitle="Student profile with role, year, roll number and department details."
      />

      <Card>
        <div className="flex flex-wrap items-center gap-6">
          <div className="grid h-28 w-28 place-items-center rounded-[32px] bg-gradient-to-br from-indigo-600 to-cyan-500 text-5xl font-black text-white">
            A
          </div>

          <div className="flex-1">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">
              {profile.name}
            </h3>

            <p className="mt-2 font-black text-indigo-600 dark:text-cyan-300">
              {profile.roll} · {profile.department}
            </p>

            <p className="mt-1 font-bold text-slate-500 dark:text-slate-400">
              {profile.role} · {profile.year} · Section {profile.section} · Batch{" "}
              {profile.batch}
            </p>
          </div>

          <Button onClick={() => setEdit(true)} icon={<Edit3 size={18} />}>
            Edit Profile
          </Button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Info label="Roll Number" value={profile.roll} />
          <Info label="Role" value={profile.role} />
          <Info label="Year" value={profile.year} />
          <Info label="Department" value={profile.department} />
          <Info label="CGPA" value={profile.cgpa} />
          <Info label="Attendance" value={profile.attendance} />
          <Info label="Section" value={profile.section} />
          <Info label="Email" value={profile.email} />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <TagBox title="Skills" data={profile.skills} />
          <TagBox title="Achievements" data={profile.achievements} />
          <TagBox title="Certificates" data={profile.certificates} />
        </div>
      </Card>

      <Modal open={edit} title="Edit Profile" onClose={() => setEdit(false)}>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "name",
            "roll",
            "role",
            "year",
            "section",
            "department",
            "batch",
            "cgpa",
            "attendance",
            "email",
          ].map((key) => (
            <label
              key={key}
              className="text-sm font-black capitalize text-slate-600 dark:text-slate-300"
            >
              {key}
              <input
                value={profile[key]}
                onChange={(e) =>
                  setProfile({ ...profile, [key]: e.target.value })
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white p-3 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </label>
          ))}
        </div>

        <Button
          className="mt-5"
          onClick={() => {
            setEdit(false);
            notify("Profile updated successfully");
          }}
        >
          Save Profile
        </Button>
      </Modal>
    </div>
  );
}

function TagBox({ title, data }) {
  return (
    <div>
      <h4 className="font-black text-slate-900 dark:text-white">{title}</h4>

      <div className="mt-3 flex flex-wrap gap-2">
        {data.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SettingsPage({ dark, setDark, notify }) {
  const [settings, setSettings] = useState({
    notifications: true,
    alerts: true,
    privacy: true,
    security: true,
    autoDownload: false,
    emailUpdates: true,
  });

  function toggle(key) {
    setSettings({ ...settings, [key]: !settings[key] });
    notify(`${key} ${settings[key] ? "disabled" : "enabled"}`);
  }

  const rows = [
    [
      "Dark Mode",
      dark,
      () => {
        setDark(!dark);
        notify(!dark ? "Dark mode enabled" : "Light mode enabled");
      },
      Moon,
    ],
    ["Notifications", settings.notifications, () => toggle("notifications"), Bell],
    ["Alerts", settings.alerts, () => toggle("alerts"), Zap],
    ["Privacy", settings.privacy, () => toggle("privacy"), Shield],
    ["Security", settings.security, () => toggle("security"), Lock],
    ["Auto Download", settings.autoDownload, () => toggle("autoDownload"), Download],
    ["Email Updates", settings.emailUpdates, () => toggle("emailUpdates"), MessageCircle],
  ];

  return (
    <div className="space-y-6">
      <Title
        title="Settings"
        subtitle="Control dark mode, alerts, privacy, notifications and account security."
      />

      <Card>
        <div className="space-y-3">
          {rows.map(([label, enabled, action, Icon]) => (
            <button
              key={label}
              onClick={action}
              className="flex w-full items-center justify-between rounded-2xl bg-slate-50 p-4 text-left transition hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-indigo-600 dark:text-cyan-300" />
                <span className="font-black text-slate-900 dark:text-white">
                  {label}
                </span>
              </div>

              <span
                className={cls(
                  "rounded-full px-3 py-1 text-sm font-black",
                  enabled
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                    : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                )}
              >
                {enabled ? "ON" : "OFF"}
              </span>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}

function AssistantWidget({ notify }) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-2xl shadow-indigo-500/40"
      >
        <Sparkles />
      </button>

      <Modal
        open={open}
        title="AI Campus Assistant"
        onClose={() => setOpen(false)}
      >
        <div className="rounded-2xl bg-slate-100 p-4 font-semibold dark:bg-slate-800">
          Ask about notes, CGPA, departments, blocks, events, placements or clubs.
        </div>

        <div className="mt-4 flex gap-2">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 rounded-2xl border border-slate-200 bg-white p-3 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <Button
            onClick={() => {
              notify(msg ? `AI answered: ${msg}` : "Type a question first");
              setMsg("");
            }}
            icon={<Send size={18} />}
          >
            Send
          </Button>
        </div>
      </Modal>
    </>
  );
}

function MainPage({ active, setActive, notify, dark, setDark }) {
  const pages = {
    dashboard: <Dashboard setActive={setActive} notify={notify} />,
    cgpa: <CGPA notify={notify} />,
    departments: <Departments notify={notify} />,
    clubs: <Clubs notify={notify} />,
    events: <Events notify={notify} />,
    announcements: <Announcements notify={notify} />,
    resources: <Resources notify={notify} />,
    placements: <Placements notify={notify} />,
    profile: <Profile notify={notify} />,
    settings: (
      <SettingsPage dark={dark} setDark={setDark} notify={notify} />
    ),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={active}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        className="p-4 lg:p-8"
      >
        {pages[active] || pages.dashboard}
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [dark, setDark] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [toast, setToast] = useState("");

  function notify(message) {
    setToast(message);
    window.clearTimeout(window.__campusToast);
    window.__campusToast = window.setTimeout(() => setToast(""), 2300);
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-soft min-h-screen text-slate-900 transition-colors dark:text-white">
        <Sidebar
          active={active}
          setActive={setActive}
          open={sideOpen}
          setOpen={setSideOpen}
          notify={notify}
        />

        <div className="lg:pl-72">
          <Navbar
            setActive={setActive}
            dark={dark}
            setDark={setDark}
            setSideOpen={setSideOpen}
            notify={notify}
          />

          <MainPage
            active={active}
            setActive={setActive}
            notify={notify}
            dark={dark}
            setDark={setDark}
          />

          <footer className="px-8 pb-8 text-center text-sm font-bold text-slate-500 dark:text-slate-400">
            Akshaya Campus360 · Quick Links · Contact · About · Social Media
          </footer>
        </div>

        <AssistantWidget notify={notify} />
        <Toast text={toast} />
      </div>
    </div>
  );
}