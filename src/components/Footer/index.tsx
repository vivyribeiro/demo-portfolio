import { Text } from "@/styles/Text";
import { userData } from "@/utils/index";
import { Button } from "@/styles/Buttons";
import { UserImage } from "@/pages/home/style";
import { Footer as FooterWrapper } from "./style";
import { Container, Flex, Box } from "@/styles/Global";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export const Footer = (): JSX.Element => {
	return (
		<FooterWrapper id="social-media">
			<Container>
				<Flex>
					<UserImage
						src={`https://github.com/${userData.githubUser}.png`}
						alt={userData.nameUser}
						title={userData.nameUser}
						width={"70px"}
						height={"70px"}
					/>
					<Box css={{ marginLeft: "$2" }}>
						<Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
							Obrigada pela visita! 🙋‍♀️
						</Text>
						<Text type="body1" color="grey2">
							Fique a vontade para se conectar comigo pelas redes socias
						</Text>
					</Box>
				</Flex>
				<Flex
					css={{
						flexWrap: "wrap",
						justifyContent: "center",
						gap: "$2"
					}}
				>
					{userData.instagramUser && (
						<Button
							className="instagram"
							type="circle"
							as="a"
							target="_blank"
							href={`https://instagram.com/${userData.instagramUser}`}
						>
							<FaInstagram />
						</Button>
					)}
					{userData.facebookUser && (
						<Button
							className="facebook"
							type="circle"
							as="a"
							target="_blank"
							href={`https://fb.com/${userData.facebookUser}`}
						>
							<FaFacebookF />
						</Button>
					)}

					{userData.linkedinUser && (
						<Button
							className="linkedin"
							type="circle"
							as="a"
							target="_blank"
							href={`https://linkedin.com/in/${userData.linkedinUser}`}
						>
							<FaLinkedinIn />
						</Button>
					)}
				</Flex>
			</Container>
		</FooterWrapper>
	);
};
