import React, { useState, useEffect } from "react";

import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import AdBanner from "../AdBanner/index";

import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";
import { Container } from "./styles";

const Layout: React.FC = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 99999999);
  }, []);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>
        <AdBanner />
      </span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;
