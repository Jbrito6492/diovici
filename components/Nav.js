import Link from 'next/Link';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"
import { FiShoppingCart } from 'react-icons/fi';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={navStyles.nav}>
      <Tabs variant="unstyled">
        <TabList>
          <Tab>
            <Link href='/'>Home</Link>
          </Tab>
          <Tab>
            <Link href='/shop'>Men</Link>
          </Tab>
          <Tab>
            <Link href='/about'>About</Link>
          </Tab>
          <Tab>
            <Link href='/shop'>
              <FiShoppingCart size={24} />
            </Link>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  )
}

export default Nav;