import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

import dots from "@/public/static/img/background/dots.svg";

export const Header = styled("header", {
	padding: "12rem 0 8rem 0",
	backgroundColor: "$grey1",
	borderBottom: "2px solid $grey5",

	"@mobile": {
		padding: "9rem 0 6rem 0"
	},
	"@mobileLittle": {
		padding: "9rem 0 0 0"
	}
});

export const HeaderContent = styled("div", {
	maxWidth: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "$2",
	"@tablet": {
		width: "36rem"
	},
	"@mobile": {
		width: "100%"
	}
});

export const HeaderButtonsArea = styled(Flex, {
	marginTop: "$2",

	[`& ${Button}`]: {
		marginRight: "$2",
		overflow: "hidden"
	},

	"@mobile": {
		[`& ${Button}`]: {
			marginRight: "$2",
			overflow: "hidden",
			width: "100%"
		},

		maxWidth: "100%",
		display: "flex",
		flexDirection: "column",
		gridGap: "$2",
		marginBottom: "$2"
	}
});

export const UserImage = styled("img", {
	border: "2px solid transparent",
	borderRadius: "50%",
	"&:hover": {
		borderColor: "$brand2"
	},
	"@mobile": {
		width: "2.30rem",
		height: "2.30rem"
	}
});

export const StackSection = styled("div", {
	padding: "$section 0",
	"@tablet": {
		padding: "$sectionMobile 0"
	}
});

export const StackCards = styled("div", {
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr 1fr",
	padding: "3rem 0",
	gap: "6rem",
	marginTop: "$4",

	"@tablet": {
		gridTemplateColumns: "1fr 1fr 1fr"
	},

	"@mobile": {
		gridTemplateColumns: "1fr 1fr"
	},

	"@mobileLittle": {
		display: "flex",
		overflow: "auto",
		margin: "0 -1rem",
		paddingInline: "1rem"
	}
});

export const ProjectsArea = styled("section", {
	padding: "$section 0",
	backgroundColor: "$grey0",
	backgroundImage: `url(${dots})`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "left top 11rem",
	"@tablet": {
		backgroundPosition: "right top 8rem",
		padding: "$sectionMobile 0"
	}
});

export const ProjectsAreaSocialMediaMessage = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "2rem",

	"@mobile": {
		width: "100%",
		position: "static",
		order: "2",
		marginTop: "5rem"
	}
});

export const ProjectsAreaContent = styled("div", {
	width: "100%",
	display: "grid",
	gridTemplateColumns: "repeat(2, 1fr)",
	gridGap: "4rem",
	"@mobile": {
		gridTemplateColumns: "1fr",
		overflowX: "hidden"
	}
});

export const ProjectAreaWrapperColumns = styled("div", {
	position: "relative",
	alignItems: "flex-start",
	"@mobile": {
		flexDirection: "column"
	}
});
