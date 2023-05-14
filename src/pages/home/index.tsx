// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
	Header,
	HeaderContent,
	HeaderButtonsArea,
	UserImage,
	StackCards,
	ProjectsArea,
	ProjectsAreaSocialMediaMessage,
	ProjectAreaWrapperColumns,
	ProjectsAreaContent,
	StackSection
} from "./style";

export const Home = (): JSX.Element => {
	const gihubUrl = `https://github.com/${userData.githubUser}`;
	const portfolioUrl = `https://github.com/${userData.githubUser}/demo-portfolio`;

	return (
		<main id="home">
			<Header>
				<Container>
					<HeaderContent>
						<Flex>
							<UserImage
								src={`https://github.com/${userData.githubUser}.png`}
								alt={userData.nameUser}
								title={userData.nameUser}
								width={"48px"}
								height={"48px"}
							/>
							<Text as="span" color="grey4">
								Oii, meu nome é {userData.nameUser}, mas pode me chamar de{" "}
								<Text as="span" color="brand1">
									Vivy
								</Text>
							</Text>
						</Flex>
						<Text as="h1" type="heading1" color="grey5">
							Eu sou{" "}
							<Text as="span" type="heading1" color="brand1">
								fascinada
							</Text>
							{" em "}
							<Text as="span" type="heading1" color="brand1">
								criar
							</Text>
							{" e "}
							<Text as="span" type="heading1" color="brand1">
								desenvolver
							</Text>{" "}
							projetos
						</Text>
						<Text type="body1" color="grey2">
							Esse espaço foi feito especialmente para você ver os meus
							principais projetos e tecnologias
						</Text>
						<HeaderButtonsArea>
							<Button as="a" type="primary" href="#projects">
								Ver Projetos
							</Button>
							<Button as="a" type="outline" target="_blank" href={portfolioUrl}>
								Ver o código-fonte do meu portfólio
							</Button>
							<Button
								color="grey5"
								as="a"
								css={{ "&:hover": { color: "$grey1" } }}
								type="circle"
								target="_blank"
								href={gihubUrl}
							>
								<FaGithub />
							</Button>
						</HeaderButtonsArea>
						<StackSection id="tecnologies">
							<Text as="h2" type="heading4" color="grey4">
								Principais Tecnologias
							</Text>

							<StackCards>
								{stackData.map((stack, index) => (
									<Stack key={index} title={stack.title} icon={stack.img} />
								))}
							</StackCards>
						</StackSection>
					</HeaderContent>
				</Container>
			</Header>
			<ProjectsArea id="projects">
				<Container>
					<ProjectAreaWrapperColumns>
						<ProjectsAreaSocialMediaMessage>
							<Text as="h2" type="heading4" color="grey4">
								Meus projetos
							</Text>
							<Text as="p" type="body1" color="grey2">
								Alguns de meus{" "}
								<Text as="span" color="brand5">
									principais projetos
								</Text>
							</Text>
						</ProjectsAreaSocialMediaMessage>
						<ProjectsAreaContent>
							<Project />
						</ProjectsAreaContent>
					</ProjectAreaWrapperColumns>
				</Container>
			</ProjectsArea>
			<Contacts />
		</main>
	);
};
