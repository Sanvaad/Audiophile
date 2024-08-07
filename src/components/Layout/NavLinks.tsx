import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="flex gap-8 text-sm font-medium text-white max-laptop:hidden items-center">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/headphones">HEADPHONES</NavLink>
      <NavLink to="/speakers">SPEAKERS</NavLink>
      <NavLink to="/earphones">EARPHONES</NavLink>
    </div>
  );
}
