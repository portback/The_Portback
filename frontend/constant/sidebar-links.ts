import { FaCode } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { SlDirection } from "react-icons/sl";
import { PiBooks } from "react-icons/pi";
import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlineFormatQuote } from "react-icons/md";

export const sidebarlist = [
  {
    Icon: IoHomeOutline,
    title: "Home",
    href: "/",
  },
  {
    Icon: SlDirection,
    title: "Skills",
    href: "/skills",
  },
  {
    Icon: PiBooks,
    title: "experience",
    href: "/experiences",
  },
  {
    Icon: FaCode,
    title: "projects",
    href: "/projects",
  },
  {
    Icon: MdOutlineFormatQuote,
    title: "testimonials",
    href: "/testimonials",
  },
  {
    Icon: BsJournalBookmark,
    title: "documetation",
    href: "/documentation",
  },
];
