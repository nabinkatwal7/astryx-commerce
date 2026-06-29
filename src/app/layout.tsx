'use client';

import { AppShell } from '@astryxdesign/core/AppShell';
import { TopNav, TopNavHeading, TopNavItem } from '@astryxdesign/core/TopNav';
import { SideNav, SideNavHeading, SideNavSection, SideNavItem } from '@astryxdesign/core/SideNav';
import { Banner } from '@astryxdesign/core/Banner';
import { Icon } from '@astryxdesign/core/Icon';
import { Badge } from '@astryxdesign/core/Badge';
import { Button } from '@astryxdesign/core/Button';
import { VStack, HStack } from '@astryxdesign/core/Layout';
import { Text } from '@astryxdesign/core/Text';
import './globals.css';

const navItems = [
  { label: 'Home', icon: 'home', href: '/' },
  { label: 'Products', icon: 'package', href: '/products' },
  { label: 'Cart', icon: 'shopping-cart', href: '/cart' },
  { label: 'Orders', icon: 'clipboard-list', href: '/orders' },
  { label: 'Support', icon: 'message-circle', href: '/support' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Astryx Store</title>
      </head>
      <body>
        <AppShell
          height="fill"
          contentPadding={6}
          topNav={
            <TopNav
              label="Main navigation"
              heading={<TopNavHeading heading="Astryx Store" headingHref="/" />}
              startContent={
                <HStack gap={0}>
                  {navItems.map((item) => (
                    <TopNavItem key={item.label} label={item.label} href={item.href} icon={<Icon icon={item.icon as any} />} isIconOnly />
                  ))}
                </HStack>
              }
              endContent={
                <HStack gap={2} vAlign="center">
                  <Button label="Search" variant="ghost" size="sm" icon={<Icon icon="search" />} isIconOnly />
                  <Button label="Cart" variant="ghost" size="sm" icon={<Icon icon="calendar" />} isIconOnly />
                  <Badge label="3" variant="error" />
                  <Button label="Sign in" variant="secondary" size="sm" />
                </HStack>
              }
            />
          }
          sideNav={
            <SideNav
              header={<SideNavHeading heading="Astryx Store" headingHref="/" />}
              collapsible
            >
              <SideNavSection title="Shop">
                {navItems.map((item) => (
                  <SideNavItem key={item.label} label={item.label} icon={<Icon icon={item.icon as any} />} href={item.href} />
                ))}
              </SideNavSection>
              <SideNavSection title="Categories">
                <SideNavItem label="Wearables" icon={<Icon icon="clock" />} href="/products?cat=wearables" />
                <SideNavItem label="Audio" icon={<Icon icon="microphone" />} href="/products?cat=audio" />
                <SideNavItem label="Bags" icon={<Icon icon="check" />} href="/products?cat=bags" />
                <SideNavItem label="Home" icon={<Icon icon="externalLink" />} href="/products?cat=home" />
                <SideNavItem label="Food" icon={<Icon icon="check" />} href="/products?cat=food" />
              </SideNavSection>
            </SideNav>
          }
          banner={
            <Banner
              status="info"
              title="Free shipping on orders over $50!"
              description="Limited time offer. Use code FREESHIP at checkout."
              isDismissable
            />
          }
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
