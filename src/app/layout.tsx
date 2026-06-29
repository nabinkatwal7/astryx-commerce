'use client';

import { AppShell } from '@astryxdesign/core/AppShell';
import { TopNav, TopNavHeading, TopNavItem } from '@astryxdesign/core/TopNav';
import { Banner } from '@astryxdesign/core/Banner';
import { Icon } from '@astryxdesign/core/Icon';
import { Badge } from '@astryxdesign/core/Badge';
import { Button } from '@astryxdesign/core/Button';
import { VStack, HStack } from '@astryxdesign/core/Layout';
import { Text } from '@astryxdesign/core/Text';
import { TextInput } from '@astryxdesign/core/TextInput';
import { Divider } from '@astryxdesign/core/Divider';
import { Link } from '@astryxdesign/core/Link';
import './globals.css';

const navItems = [
  { label: 'Products', icon: 'search' as const, href: '/products' },
  { label: 'Cart', icon: 'check' as const, href: '/cart' },
  { label: 'Orders', icon: 'calendar' as const, href: '/orders' },
  { label: 'Support', icon: 'microphone' as const, href: '/support' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-astryx-theme="neutral" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Astryx Store</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap" rel="stylesheet" />
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
                    <TopNavItem key={item.label} label={item.label} href={item.href} icon={<Icon icon={item.icon} />} />
                  ))}
                </HStack>
              }
              centerContent={
                <TextInput
                  label="Search"
                  isLabelHidden
                  placeholder="Search Astryx Store"
                  value=""
                  onChange={() => {}}
                />
              }
              endContent={
                <HStack gap={2} vAlign="center">
                  <Button label="Hello, Sign in" variant="ghost" size="sm" icon={<Icon icon="chevronDown" />} />
                  <Button label="Cart" variant="ghost" size="sm" icon={<Icon icon="check" />} isIconOnly />
                  <Badge label="3" variant="error" />
                </HStack>
              }
            />
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
          <VStack gap={0}>
            <div style={{ minHeight: '60vh', flex: 1 }}>{children}</div>
            <Divider />
            <footer style={{
              background: 'var(--neutral-800)',
              color: 'var(--neutral-200)',
              padding: '48px 24px 24px',
            }}>
              <VStack gap={6} hAlign="center">
                <HStack gap={8} wrap="wrap" hAlign="center">
                  <VStack gap={2}>
                    <Text weight="bold" style={{ color: '#fff' }}>Get to Know Us</Text>
                    <Link href="/" color="secondary">About Us</Link>
                    <Link href="/" color="secondary">Careers</Link>
                    <Link href="/" color="secondary">Press Center</Link>
                  </VStack>
                  <VStack gap={2}>
                    <Text weight="bold" style={{ color: '#fff' }}>Make Money with Us</Text>
                    <Link href="/" color="secondary">Sell products</Link>
                    <Link href="/" color="secondary">Affiliate Program</Link>
                    <Link href="/" color="secondary">Advertise</Link>
                  </VStack>
                  <VStack gap={2}>
                    <Text weight="bold" style={{ color: '#fff' }}>Let Us Help You</Text>
                    <Link href="/" color="secondary">Your Account</Link>
                    <Link href="/orders" color="secondary">Your Orders</Link>
                    <Link href="/support" color="secondary">Help Center</Link>
                  </VStack>
                </HStack>
                <Divider />
                <Text color="secondary" style={{ textAlign: 'center' }}>
                  &copy; 2026 Astryx Store. All rights reserved.
                </Text>
              </VStack>
            </footer>
          </VStack>
        </AppShell>
      </body>
    </html>
  );
}
