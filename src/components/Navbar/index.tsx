import { useState } from "react";

import useMedia from "use-media";
import { userData, links } from "@/utils/index";

import {
	LogoTipo,
	NavbarLinks,
	LogoTipoText,
	NavbarMobileArea,
	Navbar as NavbarWrapper
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";

export interface MenuButtonOpen {
	open: Boolean;
	setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
	const isWide = useMedia({ maxWidth: "991px" });

	document.title = userData.nameUser;

	const [open, setOpen] = useState(false);

	const OpenMenu = () => {
		setOpen(!open);
	};

	return (
		<NavbarWrapper>
			<Container>
				<NavbarMobileArea>
					<LogoTipo>
						<LogoTipoText>{userData.nameUser}</LogoTipoText>
					</LogoTipo>
					{isWide && (
						<Button
							type="icon"
							onClick={OpenMenu}
							aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
						>
							{!open ? <FaBars /> : <IoClose />}
						</Button>
					)}
				</NavbarMobileArea>
				<Flex>{isWide ? open && <NavLinks /> : <NavLinks />}</Flex>
			</Container>
		</NavbarWrapper>
	);
};

export const NavLinks = (): JSX.Element => {
	const [location, setLocation] = useState("home");

	return (
		<NavbarLinks>
			{links.map(({ name, path }) => (
				<Button
					type="btLink"
					color="grey4"
					as="a"
					href={`#${path}`}
					key={path}
					onClick={() => setLocation(path)}
					className={location === path ? "active" : ""}
				>
					{name}
				</Button>
			))}
		</NavbarLinks>
	);
};
