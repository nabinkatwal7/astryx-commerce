'use client';

import { Heading, Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Badge } from '@astryxdesign/core/Badge';
import { Divider } from '@astryxdesign/core/Divider';
import { Icon } from '@astryxdesign/core/Icon';
import { VStack, HStack, Section } from '@astryxdesign/core/Layout';
import { TextInput } from '@astryxdesign/core/TextInput';
import { TextArea } from '@astryxdesign/core/TextArea';
import { Selector } from '@astryxdesign/core/Selector';
import { Breadcrumbs, BreadcrumbItem } from '@astryxdesign/core/Breadcrumbs';
import { MetadataList, MetadataListItem } from '@astryxdesign/core/MetadataList';
import { RadioList } from '@astryxdesign/core/RadioList';

export default function CheckoutPage() {
  return (
    <VStack gap={6}>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/cart">Cart</BreadcrumbItem>
        <BreadcrumbItem isCurrent>Checkout</BreadcrumbItem>
      </Breadcrumbs>

      <Heading level={1}>Checkout</Heading>

      <HStack gap={6} wrap="wrap" vAlign="start">
        <VStack gap={6} style={{ flex: 1, minWidth: 0 }}>
          <Section>
            <Heading level={2}>1. Shipping Address</Heading>
            <Card>
              <VStack gap={3}>
                <HStack gap={3} wrap="wrap">
                  <TextInput label="First Name" placeholder="John" value="" onChange={() => {}} style={{ flex: 1 }} />
                  <TextInput label="Last Name" placeholder="Doe" value="" onChange={() => {}} style={{ flex: 1 }} />
                </HStack>
                <TextInput label="Email" type="email" placeholder="you@example.com" value="" onChange={() => {}} />
                <TextInput label="Phone" placeholder="+1 (555) 000-0000" value="" onChange={() => {}} />
                <TextInput label="Address" placeholder="123 Main St" value="" onChange={() => {}} />
                <HStack gap={3} wrap="wrap">
                  <TextInput label="City" placeholder="New York" value="" onChange={() => {}} style={{ flex: 1 }} />
                  <Selector
                    label="State"
                    options={[
                      { label: 'New York', value: 'NY' },
                      { label: 'California', value: 'CA' },
                      { label: 'Texas', value: 'TX' },
                    ]}
                    style={{ flex: 1 }}
                  />
                  <TextInput label="ZIP Code" placeholder="10001" value="" onChange={() => {}} style={{ width: 140 }} />
                </HStack>
                <Button label="Use this address" variant="primary" />
              </VStack>
            </Card>
          </Section>

          <Section>
            <Heading level={2}>2. Payment Method</Heading>
            <Card>
              <VStack gap={3}>
                <RadioList label="Payment" value="card" onChange={() => {}}>
                  <Card variant="muted">
                    <HStack gap={3} vAlign="center">
                      <Icon icon="calendar" />
                      <VStack gap={0}>
                        <Text weight="bold">Credit / Debit Card</Text>
                        <Text type="supporting" color="secondary">Visa, Mastercard, Amex accepted</Text>
                      </VStack>
                    </HStack>
                  </Card>
                  <Card variant="muted">
                    <HStack gap={3} vAlign="center">
                      <Icon icon="check" />
                      <VStack gap={0}>
                        <Text weight="bold">PayPal</Text>
                        <Text type="supporting" color="secondary">Fast & secure online payments</Text>
                      </VStack>
                    </HStack>
                  </Card>
                </RadioList>

                <Divider />

                <HStack gap={3} wrap="wrap">
                  <TextInput label="Card Number" placeholder="1234 5678 9012 3456" value="" onChange={() => {}} style={{ flex: 2 }} />
                  <TextInput label="Expiry" placeholder="MM/YY" value="" onChange={() => {}} style={{ flex: 1 }} />
                  <TextInput label="CVC" placeholder="123" value="" onChange={() => {}} style={{ width: 100 }} />
                </HStack>
                <TextInput label="Name on Card" placeholder="John Doe" value="" onChange={() => {}} />
              </VStack>
            </Card>
          </Section>

          <Section>
            <Heading level={2}>3. Review Your Order</Heading>
            <Card>
              <VStack gap={3}>
                <HStack gap={4} wrap="wrap">
                  <VStack gap={1}>
                    <Text weight="bold">Shipping Address</Text>
                    <Text color="secondary">John Doe<br />123 Main St<br />New York, NY 10001</Text>
                  </VStack>
                  <VStack gap={1}>
                    <Text weight="bold">Payment Method</Text>
                    <Text color="secondary">Visa ending in 3456</Text>
                  </VStack>
                </HStack>
                <Divider />
                <MetadataList>
                  <MetadataListItem label="Subtotal">$786.00</MetadataListItem>
                  <MetadataListItem label="Shipping">$12.00</MetadataListItem>
                  <MetadataListItem label="Tax">$62.88</MetadataListItem>
                </MetadataList>
                <Divider />
                <HStack gap={2} vAlign="center">
                  <Heading level={2}>Total: $860.88</Heading>
                </HStack>
                <Button label="Place Your Order" variant="primary" size="lg" icon={<Icon icon="check" />} />
                <Text type="supporting" color="secondary">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </Text>
              </VStack>
            </Card>
          </Section>
        </VStack>

        <VStack gap={3} style={{ width: 280, flexShrink: 0 }}>
          <Card>
            <VStack gap={3}>
              <Heading level={3}>Order Summary</Heading>
              <MetadataList>
                <MetadataListItem label="Items">3</MetadataListItem>
                <MetadataListItem label="Subtotal">$786.00</MetadataListItem>
                <MetadataListItem label="Shipping">$12.00</MetadataListItem>
                <MetadataListItem label="Tax">$62.88</MetadataListItem>
              </MetadataList>
              <Divider />
              <Heading level={2}>$860.88</Heading>
              <Badge label="Free Shipping" variant="success" />
            </VStack>
          </Card>
        </VStack>
      </HStack>
    </VStack>
  );
}
