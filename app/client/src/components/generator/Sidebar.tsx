import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  IoPersonSharp as ProfileIcon,
  IoSchool as EducationIcon,
  IoBriefcase as WorkIcon,
  IoConstruct as SkillsIcon,
  IoAppsSharp as ProjectsIcon,
  IoRibbon as AwardsIcon,
  IoBriefcase,
  IoConstruct,
  IoPerson,
  IoSchool,
  IoRibbon
} from 'react-icons/io5'
import { Logo } from '../common/Logo'
import { RoundButton } from '../common/RoundButton'
import { NavIcon } from '../common/NavIcon'
import { Tooltip } from '../common/Tooltip'
import { colors, sizes } from '../../theme'

export const Aside = styled.aside`
  background: ${colors.gray3};
  width: ${sizes.sidebar.width};
  height: ${sizes.sidebar.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
  position: fixed;
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomeLink = styled(Link)`
  margin-top: 30px;
  margin-bottom: 50px;
`

export function Sidebar() {
  return (
    <Aside>
      <HomeLink to="/">
        <Logo />
      </HomeLink>
      <Nav>
        <NavIcon to="/generator/basics" tooltip="Profile" tooltipId="profile">
          <IoPerson size={'1.3rem'} />
        </NavIcon>
        <NavIcon
          to="/generator/education"
          tooltip="Education"
          tooltipId="education"
        >
          <IoSchool size={'1.3rem'} />
        </NavIcon>
        <NavIcon
          to="/generator/experience"
          tooltip="Work Experience"
          tooltipId="experience"
        >
          <IoBriefcase size={'1.3rem'} />
        </NavIcon>
        <NavIcon to="/generator/skills" tooltip="Skills" tooltipId="skills">
          <IoConstruct size={'1.3rem'} />
        </NavIcon>
        <NavIcon to="/generator/awards" tooltip="Awards" tooltipId="awards">
          <IoRibbon size={'1.3rem'} />
        </NavIcon>
      </Nav>
      <Tooltip
        color={colors.primary}
        text="Add new section"
        tooltipId="addNewSection"
      />
      <RoundButton margin="2rem 0 0 0" data-tip data-for="addNewSection">
        +
      </RoundButton>
    </Aside>
  )
}