"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
//import Button from "@/components/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services on Tap" },
  { href: "/work", label: "Bottled Projects" },
  { href: "/blog", label: "Cellar Notes" },
  { href: "/about", label: "Why BEVV" },
];

type NavLink = { href: string; label: string };

function subscribeNoop() {
  return () => {};
}

export default function Nav({ serviceLinks }: { serviceLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
  const menuId = useId();
  const pathname = usePathname();
  const overlay = pathname === "/";

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const barColor = overlay ? "bg-paper" : "bg-ink";

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-50 bg-transparent"
          : "sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur"
      }
    >
      <div className="flex items-center justify-between px-6 py-4 sm:py-8 2xl:px-16">
        <Link
          href="/"
          className={`font-display text-5xl tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            overlay ? "text-paper" : "text-ink"
          }`}
        >
          BEVV
        </Link>

        <div className="flex items-center gap-4">
          {/* <Button href="/contact" className="!px-5 !py-2 text-xs">
            Get in touch
          </Button> */}

          <button
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => {
              setOpen((value) => !value);
              setServicesOpen(false);
            }}
            className="group flex h-16 w-16 shrink-0 flex-col items-center cursor-pointer justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="relative block h-0.75 w-8 overflow-hidden">
              <span className={`absolute inset-0 ${barColor}`} />
              <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <span className="relative block h-0.75 w-8 overflow-hidden">
              <span className={`absolute inset-0 ${barColor}`} />
              <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 delay-75 group-hover:scale-x-100" />
            </span>
            <span className="relative block h-0.75 w-8 overflow-hidden">
              <span className={`absolute inset-0 ${barColor}`} />
              <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 delay-150 group-hover:scale-x-100" />
            </span>
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <div
            id={menuId}
            inert={!open}
            aria-hidden={!open}
            className={`fixed inset-0 z-50 flex flex-col bg-ink transition-transform duration-500 ease-in-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end px-6 py-4 sm:px-10 sm:py-6">
              <button
                type="button"
                aria-label="Close menu"
                tabIndex={open ? 0 : -1}
                onClick={() => {
                  setOpen(false);
                  setServicesOpen(false);
                }}
                className="group relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="absolute h-0.5 w-6 rotate-45 bg-paper transition-colors group-hover:bg-accent" />
                <span className="absolute h-0.5 w-6 -rotate-45 bg-paper transition-colors group-hover:bg-accent" />
              </button>
            </div>

            <nav
              aria-label="Primary"
              className="flex flex-1 flex-col items-start justify-center gap-3 overflow-y-auto px-8 pb-24 2xl:px-16"
            >
              <ul key={open ? "open" : "closed"} className="flex flex-col gap-3">
                {links.map((link, index) => {
                  const hasChildren = link.href === "/services";
                  const animation = open
                    ? "animate-[nav-link-in_0.6s_ease_both]"
                    : "opacity-0";
                  const delay = open ? { animationDelay: `${index * 90 + 300}ms` } : undefined;

                  return (
                    <li key={link.href} className={hasChildren ? "" : "overflow-hidden"}>
                      <div className={`flex items-center gap-4 ${animation}`} style={delay}>
                        {hasChildren ? (
                          <button
                            type="button"
                            aria-expanded={servicesOpen}
                            aria-controls={`${menuId}-services`}
                            tabIndex={open ? 0 : -1}
                            onClick={() => setServicesOpen((value) => !value)}
                            className="flex cursor-pointer items-center gap-4 text-left font-display text-5xl leading-none tracking-wide text-paper transition-colors hover:text-accent sm:text-7xl"
                          >
                            {link.label}
                            <span
                              aria-hidden="true"
                              className={`inline-block font-sans text-4xl font-light transition-transform duration-200 ${
                                servicesOpen ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => {
                              setOpen(false);
                              setServicesOpen(false);
                            }}
                            tabIndex={open ? 0 : -1}
                            className="inline-block font-display text-5xl leading-none tracking-wide text-paper transition-colors hover:text-accent sm:text-7xl"
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                      {hasChildren && (
                        <div
                          id={`${menuId}-services`}
                          inert={!servicesOpen}
                          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                            servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <ul className="overflow-hidden">
                            {[{ href: "/services", label: "Overview" }, ...serviceLinks].map(
                              (child) => (
                                <li key={child.href} className="pt-3 first:pt-4">
                                  <Link
                                    href={child.href}
                                    onClick={() => {
                  setOpen(false);
                  setServicesOpen(false);
                }}
                                    className="font-display text-2xl tracking-wide text-paper transition-colors hover:text-accent sm:text-4xl"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
                <li className="overflow-hidden pt-4">
                  <Link
                    href="/contact"
                    onClick={() => {
                  setOpen(false);
                  setServicesOpen(false);
                }}
                    tabIndex={open ? 0 : -1}
                    style={
                      open ? { animationDelay: `${links.length * 90 + 300}ms` } : undefined
                    }
                    className={`inline-block font-display text-5xl leading-none tracking-wide text-accent transition-colors hover:text-paper sm:text-7xl ${
                      open ? "animate-[nav-link-in_0.6s_ease_both]" : "opacity-0"
                    }`}
                  >
                    Get in touch
                  </Link>
                </li>
              </ul>
            </nav>
          </div>,
          document.body,
        )}
    </header>
  );
}
