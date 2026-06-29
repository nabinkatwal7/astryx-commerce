'use client';

import { useState } from 'react';
import { Heading, Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Badge } from '@astryxdesign/core/Badge';
import { Icon } from '@astryxdesign/core/Icon';
import { VStack, HStack, Section } from '@astryxdesign/core/Layout';
import { TextInput } from '@astryxdesign/core/TextInput';
import { TextArea } from '@astryxdesign/core/TextArea';
import { Tab, TabList } from '@astryxdesign/core/TabList';
import { Collapsible, CollapsibleGroup } from '@astryxdesign/core/Collapsible';
import { Breadcrumbs, BreadcrumbItem } from '@astryxdesign/core/Breadcrumbs';

const faqs = [
  { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping is available for 1-2 business days. Free shipping on orders over $50.' },
  { q: 'What is your return policy?', a: 'We offer free returns within 30 days of delivery. Items must be in original condition and packaging. Start a return from Your Orders page.' },
  { q: 'How do I track my order?', a: 'Go to Your Orders, find your order, and click Track Package. You\'ll receive email updates with tracking information.' },
  { q: 'Can I change or cancel my order?', a: 'Orders can be cancelled within 1 hour of placing. After that, the order enters processing and cannot be modified.' },
  { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, Discover, and PayPal. Your payment info is encrypted and secure.' },
];

export default function SupportPage() {
  const [tab, setTab] = useState('faqs');

  return (
    <VStack gap={6}>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem isCurrent>Help Center</BreadcrumbItem>
      </Breadcrumbs>

      <Section>
        <Heading level={1}>Help Center</Heading>
        <Text type="large" color="secondary">
          How can we help you today?
        </Text>
      </Section>

      <HStack gap={4} wrap="wrap">
        {[
          { icon: 'search' as const, title: 'Track Order', desc: 'See where your package is' },
          { icon: 'check' as const, title: 'Cancel Order', desc: 'Change or cancel an order' },
          { icon: 'calendar' as const, title: 'Returns', desc: 'Start a return or exchange' },
          { icon: 'microphone' as const, title: 'Contact Us', desc: 'Talk to customer service' },
        ].map((item) => (
          <Card key={item.title} variant="muted" style={{ flex: 1, minWidth: 180, cursor: 'pointer', textAlign: 'center' }}>
            <VStack gap={1} vAlign="center" hAlign="center">
              <Icon icon={item.icon} />
              <Text weight="bold">{item.title}</Text>
              <Text type="supporting" color="secondary">{item.desc}</Text>
            </VStack>
          </Card>
        ))}
      </HStack>

      <TabList value={tab} onChange={setTab}>
        <Tab value="faqs" label="FAQs" />
        <Tab value="contact" label="Contact Us" />
      </TabList>

      {tab === 'faqs' && (
        <CollapsibleGroup>
          <VStack gap={2}>
            {faqs.map((faq, i) => (
              <Collapsible key={i} trigger={<Text weight="bold">{faq.q}</Text>}>
                <Text color="secondary">{faq.a}</Text>
              </Collapsible>
            ))}
          </VStack>
        </CollapsibleGroup>
      )}

      {tab === 'contact' && (
        <HStack gap={6} wrap="wrap" vAlign="start">
          <Card style={{ flex: 1, minWidth: 300 }}>
            <VStack gap={3}>
              <Heading level={2}>Send us a message</Heading>
              <TextInput label="Name" placeholder="Your name" value="" onChange={() => {}} />
              <TextInput label="Email" type="email" placeholder="you@example.com" value="" onChange={() => {}} />
              <TextInput label="Order ID (optional)" placeholder="e.g. #1043" value="" onChange={() => {}} />
              <TextInput label="Subject" placeholder="How can we help?" value="" onChange={() => {}} />
              <TextArea label="Message" placeholder="Describe your issue in detail..." value="" onChange={() => {}} />
              <Button label="Submit" variant="primary" icon={<Icon icon="check" />} />
            </VStack>
          </Card>
          <VStack gap={3} style={{ width: 320, flexShrink: 0 }}>
            <Card variant="muted">
              <VStack gap={2}>
                <Heading level={3}>Phone Support</Heading>
                <Text color="secondary">1-800-ASTRYX</Text>
                <Text type="supporting" color="secondary">Mon-Fri, 9 AM - 6 PM EST</Text>
              </VStack>
            </Card>
            <Card variant="muted">
              <VStack gap={2}>
                <Heading level={3}>Live Chat</Heading>
                <Text color="secondary">Chat with a representative</Text>
                <Button label="Start Chat" variant="primary" size="sm" />
              </VStack>
            </Card>
            <Card variant="muted">
              <VStack gap={2}>
                <Heading level={3}>FAQ</Heading>
                <Text color="secondary">Check our frequently asked questions for quick answers.</Text>
                <Button label="View FAQs" variant="secondary" size="sm" onClick={() => setTab('faqs')} />
              </VStack>
            </Card>
          </VStack>
        </HStack>
      )}
    </VStack>
  );
}
