import { Box, Container, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Projects } from "../Data/ProjectsData";
import { CustomTheme } from "../Utilities/Theme";
import Header from "../Components/Header";
import { RxDot } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { CgExternal } from "react-icons/cg";
import { BiNavigation } from "react-icons/bi";
import Menu from "../Components/Menu";
import { useSelector } from "react-redux";
import { menu } from "../NavSlice";
function Project() {
  const font = CustomTheme.fonts;
  const { project } = useParams();
  const CurrentProject = Projects.find((pro) => pro.nam === project);
  const nextProject = () => {
    if (CurrentProject.id === 3) {
      return Projects[0].nam;
    }
    let index = CurrentProject.id + 1;
    return Projects[index - 1].nam;
  };
  const navigate = useNavigate();
  const menuOpened = useSelector(menu);
  return (
    <Box position={"relative"}>
      {menuOpened && <Menu />}
      <Header />
      <Container>
        <Box marginTop={{ xs: "12rem", sm: "15rem" }} marginBottom="3rem">
          <Stack
            direction={"row"}
            alignItems="flex-start"
            justifyContent={"center"}
          >
            <Box
              component={"p"}
              fontSize={{ xs: "50px", sm: "64px" }}
              fontFamily={font.font5}
              fontWeight={400}
            >
              {CurrentProject.tag}
            </Box>
            <Box
              component={"p"}
              fontSize={{ xs: "11px", sm: "12px" }}
              fontFamily={font.body}
              sx={{ opacity: 0.5 }}
            >
              {CurrentProject.date}
            </Box>
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            marginTop="7rem"
          >
            <Box
              component={"img"}
              className="image"
              width={{ xs: "90%", md: "100%" }}
              src={require(`../Utilities/Images/Projects/${CurrentProject.img}`)}
            />
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="flex-start"
            justifyContent={"space-between"}
            marginY={{ xs: "9rem", sm: "11rem" }}
            spacing={{ xs: "40px", sm: 0 }}
          >
            <Box
              component={"p"}
              fontSize={{ xs: "18px", sm: "20px" }}
              fontFamily={font.font5}
              fontWeight="400"
            >
              {CurrentProject.title}
            </Box>
            <Box
              component={"p"}
              fontSize={{ xs: "16px", sm: "18px" }}
              fontFamily={font.font5}
              width={{ xs: "80%", sm: "50%" }}
              fontWeight="300"
              sx={{ opacity: 0.8 }}
            >
              {CurrentProject.desc}
            </Box>
          </Stack>
          <Stack direction={"column"} spacing="10px" marginY="7rem">
            <Box
              component={"p"}
              fontSize={{ xs: "17px", sm: "20px" }}
              fontFamily={font.font5}
              fontWeight="400"
            >
              Built in
            </Box>
            <Box component={"ul"} sx={{ margin: 0, listStyleType: "none" }}>
              {CurrentProject.skills.map((skill, i) => {
                return (
                  <Stack
                    component={"li"}
                    direction={"row"}
                    alignItems="center"
                    marginY="12px"
                    spacing={"10px"}
                    key={i}
                  >
                    <RxDot />
                    <Box
                      fontSize="17px"
                      fontFamily={font.font5}
                      fontWeight="300"
                      sx={{ opacity: 0.8 }}
                    >
                      {skill}
                    </Box>
                  </Stack>
                );
              })}
            </Box>
          </Stack>
          <Stack direction={"column"} spacing="20px">
            <Stack direction={"row"} alignItems="center" spacing={"5px"}>
              <BsGithub size={"16px"} />
              <Box
                component={"a"}
                href={CurrentProject.github}
                fontSize="15px"
                fontFamily={font.font5}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                fontWeight={400}
              >
                Github Repo
              </Box>
            </Stack>
            <Stack direction={"row"} alignItems="center" spacing={"5px"}>
              <CgExternal size={"20px"} />
              <Box
                component={"a"}
                href={CurrentProject.link}
                fontSize="15px"
                fontFamily={font.font5}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                fontWeight={400}
              >
                Website
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            alignItems="center"
            justifyContent={"center"}
            marginTop={{ xs: "8rem", sm: "11rem" }}
          >
            <Stack direction={"row"} alignItems="center" spacing={"5px"}>
              <Box
                component={"p"}
                fontSize={{ xs: "50px", sm: "64px" }}
                fontFamily={font.font5}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                fontWeight={300}
                onClick={() => {
                  navigate(`/${nextProject()}`, { replace: true });
                }}
              >
                Next project
              </Box>
              <BiNavigation size={"27px"} />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Project;
