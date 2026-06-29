"use client";

import { Badge } from "@astryxdesign/core/Badge";
import { BreadcrumbItem, Breadcrumbs } from "@astryxdesign/core/Breadcrumbs";
import { Button } from "@astryxdesign/core/Button";
import { Card } from "@astryxdesign/core/Card";
import { CheckboxInput } from "@astryxdesign/core/CheckboxInput";
import { Divider } from "@astryxdesign/core/Divider";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { Icon } from "@astryxdesign/core/Icon";
import { HStack, VStack } from "@astryxdesign/core/Layout";
import {
  MetadataList,
  MetadataListItem,
} from "@astryxdesign/core/MetadataList";
import { RadioList, RadioListItem } from "@astryxdesign/core/RadioList";
import { Selector } from "@astryxdesign/core/Selector";
import { Switch } from "@astryxdesign/core/Switch";
import { Heading } from "@astryxdesign/core/Text";
import { TextInput } from "@astryxdesign/core/TextInput";

export default function CheckoutPage() {
  return (
    <VStack gap={6}>
      <Breadcrumbs>
        <BreadcrumbItem label="Home" href="/" />
        <BreadcrumbItem label="Cart" href="/cart" />
        <BreadcrumbItem label="Checkout" isCurrentPage />
      </Breadcrumbs>

      <Heading level={1}>Checkout</Heading>

      <HStack gap={6} wrap="wrap" vAlign="start">
        <VStack gap={4}>
          <Card>
            <VStack gap={4}>
              <Heading level={2}>Contact Information</Heading>
              <FormLayout>
                <TextInput
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value=""
                  onChange={() => {}}
                />
                <TextInput
                  label="Phone"
                  placeholder="+1 (555) 000-0000"
                  value=""
                  onChange={() => {}}
                />
              </FormLayout>
            </VStack>
          </Card>

          <Card>
            <VStack gap={4}>
              <Heading level={2}>Shipping Address</Heading>
              <FormLayout>
                <HStack gap={3} wrap="wrap">
                  <TextInput label="First name" value="" onChange={() => {}} />
                  <TextInput label="Last name" value="" onChange={() => {}} />
                </HStack>
                <TextInput
                  label="Address"
                  placeholder="123 Main St"
                  value=""
                  onChange={() => {}}
                />
                <TextInput
                  label="Apartment, suite, etc. (optional)"
                  value=""
                  onChange={() => {}}
                />
                <HStack gap={3} wrap="wrap">
                  <TextInput label="City" value="" onChange={() => {}} />
                  <Selector
                    label="State"
                    options={[
                      { label: "California", value: "CA" },
                      { label: "New York", value: "NY" },
                      { label: "Texas", value: "TX" },
                    ]}
                  />
                  <TextInput label="ZIP code" value="" onChange={() => {}} />
                </HStack>
                <Selector
                  label="Country"
                  options={[
                    { label: "United States", value: "US" },
                    { label: "Canada", value: "CA" },
                    { label: "United Kingdom", value: "UK" },
                  ]}
                />
              </FormLayout>
              <HStack gap={2} vAlign="center">
                <CheckboxInput label="Use same address for billing" value={true} />
              </HStack>
            </VStack>
          </Card>

          <Card>
            <VStack gap={4}>
              <Heading level={2}>Shipping Method</Heading>
              <RadioList label="Shipping method">
                <RadioListItem
                  label="Economy Shipping"
                  description="Delivered in 5-7 business days"
                  value="economy"
                />
                <RadioListItem
                  label="Standard Shipping"
                  description="Delivered in 3-5 business days"
                  value="standard"
                  isSelected
                />
                <RadioListItem
                  label="Express Shipping"
                  description="Delivered in 1-2 business days"
                  value="express"
                />
              </RadioList>
            </VStack>
          </Card>

          <Card>
            <VStack gap={4}>
              <Heading level={2}>Payment Method</Heading>
              <RadioList label="Payment method">
                <RadioListItem label="Credit Card" value="card" isSelected />
                <RadioListItem label="Apple Pay" value="apple-pay" />
                <RadioListItem label="Google Pay" value="google-pay" />
              </RadioList>
              <Divider />
              <FormLayout>
                <TextInput
                  label="Card number"
                  placeholder="1234 5678 9012 3456"
                  startIcon={<Icon icon="calendar" />}
                  value=""
                  onChange={() => {}}
                />
                <HStack gap={3} wrap="wrap">
                  <TextInput
                    label="Expiry"
                    placeholder="MM/YY"
                    value=""
                    onChange={() => {}}
                  />
                  <TextInput
                    label="CVC"
                    placeholder="123"
                    value=""
                    onChange={() => {}}
                  />
                </HStack>
              </FormLayout>
              <HStack gap={2} vAlign="center">
                <Switch label="Securely save for 1-click checkout" value={false} />
              </HStack>
            </VStack>
          </Card>

          <Button label="Place Order" variant="primary" size="lg" />
        </VStack>

        <Card width={320}>
          <VStack gap={3}>
            <Heading level={2}>Order Summary</Heading>
            <MetadataList>
              <MetadataListItem label="Minimalist Watch × 1" value="$199" />
              <MetadataListItem label="Wireless Headphones × 2" value="$498" />
              <MetadataListItem label="Canvas Backpack × 1" value="$89" />
            </MetadataList>
            <Divider />
            <MetadataList>
              <MetadataListItem label="Subtotal" value="$786" />
              <MetadataListItem label="Shipping" value="$16.00" />
              <MetadataListItem label="Tax" value="$62.88" />
            </MetadataList>
            <Divider />
            <HStack gap={2} vAlign="center">
              <Heading level={3}>Total</Heading>
              <Heading level={2}>$864.88</Heading>
            </HStack>
            <Badge label="Free returns within 30 days" variant="info" />
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
}
