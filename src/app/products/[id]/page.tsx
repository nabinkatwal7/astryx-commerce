'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Heading, Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Badge } from '@astryxdesign/core/Badge';
import { Divider } from '@astryxdesign/core/Divider';
import { Icon } from '@astryxdesign/core/Icon';
import { VStack, HStack, Section } from '@astryxdesign/core/Layout';
import { Thumbnail } from '@astryxdesign/core/Thumbnail';
import { NumberInput } from '@astryxdesign/core/NumberInput';
import { Tab, TabList } from '@astryxdesign/core/TabList';
import { Breadcrumbs, BreadcrumbItem } from '@astryxdesign/core/Breadcrumbs';
import { MetadataList, MetadataListItem } from '@astryxdesign/core/MetadataList';
import { Selector } from '@astryxdesign/core/Selector';
import { products } from '@/components/products';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id) || products[0];
  const [tab, setTab] = useState('details');

  return (
    <VStack gap={6}>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem isCurrent>{product.name}</BreadcrumbItem>
      </Breadcrumbs>

      <HStack gap={6} wrap="wrap" vAlign="start">
        <Thumbnail
          src={product.image}
          alt={product.name}
          style={{ width: 400, height: 400, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }}
        />

        <VStack gap={3} style={{ flex: 1, minWidth: 300 }}>
          <Heading level={1}>{product.name}</Heading>
          <HStack gap={2} vAlign="center" wrap="wrap">
            <HStack gap={1}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Icon key={s} icon="success" />
              ))}
            </HStack>
            <Text color="primary" weight="bold">{product.rating}</Text>
            <Text type="supporting" color="secondary">({Math.floor(Math.random() * 500) + 50} ratings)</Text>
          </HStack>
          <HStack gap={2} vAlign="center" wrap="wrap">
            {product.badge && <Badge label={product.badge} variant={product.badgeVariant as any} />}
            <Badge label={product.inStock ? 'In Stock' : 'Out of Stock'} variant={product.inStock ? 'success' : 'error'} />
          </HStack>
          <Divider />
          <HStack gap={3} vAlign="center">
            <Heading level={1} type="display-2" color="primary">${product.price}</Heading>
            {product.originalPrice && (
              <>
                <Text color="secondary" hasStrikethrough><Heading level={3}>${product.originalPrice}</Heading></Text>
                <Badge label={`Save $${product.originalPrice - product.price}`} variant="success" />
              </>
            )}
          </HStack>
          <Text type="large">{product.description}</Text>

          <Card variant="muted" style={{ width: '100%' }}>
            <VStack gap={3}>
              <NumberInput label="Quantity" value={1} min={1} max={10} onChange={() => {}} />
              <Selector
                label="Color"
                options={[
                  { label: 'Black', value: 'black' },
                  { label: 'White', value: 'white' },
                  { label: 'Blue', value: 'blue' },
                ]}
              />
              <HStack gap={3}>
                <Button label="Add to Cart" variant="primary" size="lg" icon={<Icon icon="check" />} style={{ flex: 1 }} />
                <Button label="Buy Now" variant="secondary" size="lg" style={{ flex: 1 }} />
              </HStack>
              <Button label="Add to Wishlist" variant="ghost" size="sm" icon={<Icon icon="success" />} />
            </VStack>
          </Card>
        </VStack>
      </HStack>

      <Divider />

      <TabList value={tab} onChange={setTab}>
        <Tab value="details" label="Details" />
        <Tab value="shipping" label="Shipping" />
        <Tab value="reviews" label="Reviews" />
      </TabList>

      {tab === 'details' && (
        <MetadataList>
          <MetadataListItem label="SKU">{`AST-${product.id}-001`}</MetadataListItem>
          <MetadataListItem label="Category">{product.category}</MetadataListItem>
          <MetadataListItem label="Material">Premium quality</MetadataListItem>
          <MetadataListItem label="Weight">0.5 kg</MetadataListItem>
          <MetadataListItem label="Dimensions">20 x 15 x 5 cm</MetadataListItem>
          <MetadataListItem label="Warranty">1 year limited</MetadataListItem>
        </MetadataList>
      )}
      {tab === 'shipping' && (
        <VStack gap={3}>
          <Card variant="muted">
            <VStack gap={2}>
              <Heading level={3}>Delivery Options</Heading>
              <Text weight="bold">Free Shipping</Text>
              <Text color="secondary">On orders over $50 — estimated 5-7 business days</Text>
              <Text weight="bold">Express Delivery</Text>
              <Text color="secondary">$12.99 — estimated 1-2 business days</Text>
              <Text weight="bold">Same-Day Delivery</Text>
              <Text color="secondary">Available in select areas — order before 2 PM</Text>
            </VStack>
          </Card>
          <Card variant="muted">
            <VStack gap={2}>
              <Heading level={3}>Return Policy</Heading>
              <Text color="secondary">Free returns within 30 days of delivery. Items must be in original condition.</Text>
            </VStack>
          </Card>
        </VStack>
      )}
      {tab === 'reviews' && (
        <VStack gap={4}>
          <HStack gap={3} vAlign="center">
            <VStack hAlign="center" gap={1}>
              <Heading level={1} type="display-2">{product.rating}</Heading>
              <HStack gap={1}>
                {[1, 2, 3, 4, 5].map((s) => <Icon key={s} icon="success" />)}
              </HStack>
              <Text type="supporting" color="secondary">out of 5</Text>
            </VStack>
            <Divider orientation="vertical" />
            <Button label="Write a Review" variant="secondary" />
          </HStack>
          <Card variant="muted">
            <VStack gap={2}>
              <HStack gap={2} vAlign="center">
                <Text weight="bold">Ami Pena</Text>
                <Text type="supporting" color="secondary">2 days ago</Text>
              </HStack>
              <HStack gap={1}>
                {[1, 2, 3, 4, 5].map((s) => <Icon key={s} icon="success" />)}
              </HStack>
              <Text>Absolutely love this product! The quality exceeds expectations. Fast shipping and beautiful packaging. Would recommend to anyone looking for a premium item.</Text>
            </VStack>
          </Card>
          <Card variant="muted">
            <VStack gap={2}>
              <HStack gap={2} vAlign="center">
                <Text weight="bold">John Doe</Text>
                <Text type="supporting" color="secondary">1 week ago</Text>
              </HStack>
              <HStack gap={1}>
                {[1, 2, 3, 4, 5].map((s) => <Icon key={s} icon="success" />)}
              </HStack>
              <Text>Great product for the price. The design is minimalist and elegant. The only reason I&rsquo;m giving 4 stars is that the packaging could be more eco-friendly.</Text>
            </VStack>
          </Card>
        </VStack>
      )}
    </VStack>
  );
}
