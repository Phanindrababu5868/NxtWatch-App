import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {GiConsoleController} from 'react-icons/gi'
import ThemeAndSavedVideosContext from '../../context/contextObject'
import {
  SideBarContainer,
  NavLinksContainer,
  SideBarNavLink,
  NavLinkIconContainer,
  NavLinkText,
  LinkRoute,
  FooterContainer,
  FooterHeading,
  SocialMediaHandlesContainer,
  SocialMediaIcon,
  FooterDescription,
} from './styledComponents'

const SideBarMenu = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme, selectedOption, changeOption} = value
      const selectOption = option => {
        changeOption(option)
      }
      const renderNavLinks = () => (
        <NavLinksContainer>
          <LinkRoute to="/">
            <SideBarNavLink
              isSelected={selectedOption === 'HOME'}
              background={isDarkTheme ? '#424242' : '#f1f5f9'}
              onClick={() => {
                selectOption('HOME')
              }}
            >
              <NavLinkIconContainer>
                <AiFillHome />
              </NavLinkIconContainer>
              <NavLinkText isDarkTheme={isDarkTheme}>Home</NavLinkText>
            </SideBarNavLink>
          </LinkRoute>
          <LinkRoute to="/trending">
            <SideBarNavLink
              isSelected={selectedOption === 'TRENDING'}
              background={isDarkTheme ? '#424242' : '#f1f5f9'}
              onClick={() => {
                selectOption('TRENDING')
              }}
            >
              <NavLinkIconContainer>
                <HiFire />
              </NavLinkIconContainer>
              <NavLinkText isDarkTheme={isDarkTheme}>Trending</NavLinkText>
            </SideBarNavLink>
          </LinkRoute>
          <LinkRoute to="/gaming">
            <SideBarNavLink
              isSelected={selectedOption === 'GAMING'}
              background={isDarkTheme ? '#424242' : '#f1f5f9'}
              onClick={() => {
                selectOption('GAMING')
              }}
            >
              <NavLinkIconContainer>
                <GiConsoleController />
              </NavLinkIconContainer>
              <NavLinkText isDarkTheme={isDarkTheme}>Gaming</NavLinkText>
            </SideBarNavLink>
          </LinkRoute>
          <LinkRoute to="/saved-videos">
            <SideBarNavLink
              isSelected={selectedOption === 'SAVED'}
              background={isDarkTheme ? '#424242' : '#f1f5f9'}
              onClick={() => {
                selectOption('SAVED')
              }}
            >
              <NavLinkIconContainer>
                <MdPlaylistAdd />
              </NavLinkIconContainer>
              <NavLinkText isDarkTheme={isDarkTheme}>Saved videos</NavLinkText>
            </SideBarNavLink>
          </LinkRoute>
        </NavLinksContainer>
      )

      const renderContactInfo = () => (
        <FooterContainer>
          <FooterHeading isDarkTheme={isDarkTheme}>CONTACT US</FooterHeading>
          <SocialMediaHandlesContainer>
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </SocialMediaHandlesContainer>
          <FooterDescription isDarkTheme={isDarkTheme}>
            Enjoy! Now to see your channels and recommendations!
          </FooterDescription>
        </FooterContainer>
      )
      return (
        <SideBarContainer isDarkTheme={isDarkTheme}>
          {renderNavLinks()}
          {renderContactInfo()}
        </SideBarContainer>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)
export default SideBarMenu
