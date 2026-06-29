'use client';

import { useState } from 'react';
import { Heading, Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { IconButton } from '@astryxdesign/core/IconButton';
import { Card } from '@astryxdesign/core/Card';
import { Badge } from '@astryxdesign/core/Badge';
import { Icon } from '@astryxdesign/core/Icon';
import { VStack, HStack } from '@astryxdesign/core/Layout';
import { TextInput } from '@astryxdesign/core/TextInput';
import { TextArea } from '@astryxdesign/core/TextArea';
import { FormLayout } from '@astryxdesign/core/FormLayout';

import { Collapsible, CollapsibleGroup } from '@astryxdesign/core/Collapsible';
import { ChatLayout, ChatMessage, ChatMessageBubble, ChatComposer, ChatMessageList } from '@astryxdesign/core/Chat';
import { Tab, TabList } from '@astryxdesign/core/TabList';

export default function SupportPage() {
  const [tab, setTab] = useState('chat');

  return (
    <VStack gap={6}>
      <Heading level={1}>Customer Support</Heading>

      <TabList value={tab} onChange={setTab}>
        <Tab value="chat" label="Live Chat" />
        <Tab value="faqs" label="FAQs" />
        <Tab value="contact" label="Contact Form" />
      </TabList>

      {tab === 'chat' && (
        <Card>
          <VStack gap={3}>
            <Heading level={2}>Chat with us</Heading>
            <Text>Ask us anything — we're here to help.</Text>
            <ChatLayout
              composer={<ChatComposer placeholder="Type your message..." onSubmit={() => {}} />}
            >
              <ChatMessageList>
                <ChatMessage sender="assistant">
                  <ChatMessageBubble variant="filled">Hi! How can I help you today?</ChatMessageBubble>
                </ChatMessage>
                <ChatMessage sender="user">
                  <ChatMessageBubble variant="filled">I'd like to track my order #1043.</ChatMessageBubble>
                </ChatMessage>
                <ChatMessage sender="assistant">
                  <ChatMessageBubble variant="filled">Let me look that up for you. Your order #1043 — the Minimalist Watch and Linen Throw — shipped this morning and is currently in transit with UPS. It's on track to arrive by end of day tomorrow.</ChatMessageBubble>
                </ChatMessage>
              </ChatMessageList>
            </ChatLayout>
          </VStack>
        </Card>
      )}

      {tab === 'faqs' && (
        <VStack gap={3}>
          <CollapsibleGroup>
            <Collapsible trigger="What is your return policy?">
              <Text>We offer free returns within 30 days of delivery. Items must be unused and in original packaging. Start a return from your order history page.</Text>
            </Collapsible>
            <Collapsible trigger="How long does shipping take?">
              <Text>Standard shipping takes 5-7 business days. Express shipping takes 1-2 business days. Free shipping on orders over $50.</Text>
            </Collapsible>
            <Collapsible trigger="Can I change my order?">
              <Text>You can modify or cancel your order within 1 hour of placing it. After that, please contact support for assistance.</Text>
            </Collapsible>
            <Collapsible trigger="Do you ship internationally?">
              <Text>Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Duties and taxes may apply.</Text>
            </Collapsible>
            <Collapsible trigger="How do I track my order?">
              <Text>Once your order ships, you'll receive a tracking number via email. You can also track it from your order history page.</Text>
            </Collapsible>
          </CollapsibleGroup>
        </VStack>
      )}

      {tab === 'contact' && (
        <Card>
          <VStack gap={4}>
            <Heading level={2}>Send us a message</Heading>
            <FormLayout>
              <TextInput label="Name" placeholder="Your name" value="" onChange={() => {}} />
              <TextInput label="Email" type="email" placeholder="you@example.com" value="" onChange={() => {}} />
              <TextInput label="Order number (optional)" value="" onChange={() => {}} />
              <TextArea label="Message" placeholder="How can we help?" value="" onChange={() => {}} />
            </FormLayout>
            <Button label="Send message" variant="primary" />
          </VStack>
        </Card>
      )}
    </VStack>
  );
}
