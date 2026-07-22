import { useEffect, useState } from "react";

import {
  Container,
  Navigation,
  NavLink,
  NavButton,
  StudentButton,
  MenuButton,
  MenuOverlay,
  MobileMenu,
  MobileMenuHeader,
  MobileMenuTitle,
  CloseButton,
  MobileNavigation,
  MobileNavLink,
  MobileNavButton,
  MobileStudentButton,
  MenuStatus,
} from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function Header() {
  const { phase, openAbout } = useUniverse();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isVisible = phase === STORY_PHASES.READY;

  const whatsappMessage = encodeURIComponent(
    "Olá! Conheci o DevClub Universe e quero saber mais sobre as formações."
  );

  const whatsappUrl =
    `https://wa.me/5511951957674?text=${whatsappMessage}`;

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleAboutClick() {
    closeMenu();
    openAbout();
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isMenuOpen]);

  return (
    <>
      <Container $visible={isVisible}>
        <Navigation>
          <NavLink href="#formacoes">
            Formações
          </NavLink>

          <NavButton
            type="button"
            onClick={openAbout}
          >
            Faculdade
          </NavButton>

          <NavLink href="#alunos">
            Área do Aluno
          </NavLink>

          <StudentButton
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Quero ser aluno
          </StudentButton>
        </Navigation>

        <MenuButton
          type="button"
          onClick={openMenu}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </Container>

      <MenuOverlay
        $open={isMenuOpen}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      >
        <MobileMenu
          id="mobile-navigation"
          $open={isMenuOpen}
          onClick={(event) =>
            event.stopPropagation()
          }
          aria-label="Navegação mobile"
        >
          <MobileMenuHeader>
            <div>
              <MenuStatus>
                <span />
                Sistema online
              </MenuStatus>

              <MobileMenuTitle>
                Navegação
              </MobileMenuTitle>
            </div>

            <CloseButton
              type="button"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              ×
            </CloseButton>
          </MobileMenuHeader>

          <MobileNavigation>
            <MobileNavLink
              href="#formacoes"
              onClick={closeMenu}
            >
              <span>01</span>
              Formações
            </MobileNavLink>

            <MobileNavButton
              type="button"
              onClick={handleAboutClick}
            >
              <span>02</span>
              Faculdade
            </MobileNavButton>

            <MobileNavLink
              href="#alunos"
              onClick={closeMenu}
            >
              <span>03</span>
              Área do Aluno
            </MobileNavLink>

            <MobileStudentButton
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Quero ser aluno

              <span aria-hidden="true">
                ↗
              </span>
            </MobileStudentButton>
          </MobileNavigation>
        </MobileMenu>
      </MenuOverlay>
    </>
  );
}

export default Header;