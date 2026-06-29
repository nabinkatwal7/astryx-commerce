'use client';

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

  return (
    <VStack gap={6}>
      <Breadcrumbs>
        <BreadcrumbItem label="Home" href="/" />
        <BreadcrumbItem label="Products" href="/products" />
        <BreadcrumbItem label={product.name} isCurrentPage />
      </Breadcrumbs>

      <Card>
        <HStack gap={6} wrap="wrap">
          <Thumbnail src={product.image} alt={product.name} />
          <VStack gap={3}>
            <HStack gap={2} vAlign="center">
              <Heading level={1}>{product.name}</Heading>
              {product.badge && <Badge label={product.badge} variant={product.badgeVariant as any} />}
            </HStack>
            <Text type="supporting">{product.category}</Text>
            <Text type="large">{product.description}</Text>
            <HStack gap={3} vAlign="center">
              <Heading level={1} type="display-2">${product.price}</Heading>
              {product.originalPrice && (
                <Text color="secondary" hasStrikethrough><Heading level={3}>${product.originalPrice}</Heading></Text>
              )}
            </HStack>
            <HStack gap={1}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} icon="success" />
              ))}
              <Text type="supporting">{product.rating} / 5</Text>
            </HStack>
            <Divider />
            <HStack gap={4} vAlign="end" wrap="wrap">
              <NumberInput label="Quantity" value={1} min={1} max={10} onChange={() => {}} />
              <Selector label="Color" options={[{ label: 'Black', value: 'black' }, { label: 'White', value: 'white' }, { label: 'Blue', value: 'blue' }]} />
            </HStack>
            <HStack gap={3}>
              <Button label="Add to cart" variant="primary" size="lg" icon={<Icon icon="check" />} />
              <Button label="Buy now" variant="secondary" size="lg" />
              <Button label="Wishlist" variant="ghost" size="lg" icon={<Icon icon="success" />} isIconOnly />
            </HStack>
            <Badge label={product.inStock ? 'In Stock' : 'Out of Stock'} variant={product.inStock ? 'success' : 'error'} />
          </VStack>
        </HStack>
      </Card>

      <TabList label="Product details">
        <Tab label="Details">
          <VStack gap={3}>
            <MetadataList>
              <MetadataListItem label="SKU" value={`AST-${product.id}-001`} />
              <MetadataListItem label="Category" value={product.category} />
              <MetadataListItem label="Material" value="Premium quality" />
              <MetadataListItem label="Weight" value="0.5 kg" />
              <MetadataListItem label="Dimensions" value="20 x 15 x 5 cm" />
            </MetadataList>
          </VStack>
        </Tab>
        <Tab label="Shipping">
          <VStack gap={2}>
            <Text weight="bold">Shipping Information</Text>
            <Text>Free shipping on orders over $50. Standard delivery 5-7 business days. Express delivery 1-2 business days available.</Text>
          </VStack>
        </Tab>
        <Tab label="Reviews">
          <VStack gap={3}>
            <HStack gap={2} vAlign="center">
              <Icon icon="success" />
              <Heading level={2}>{product.rating}</Heading>
              <Text type="supporting">out of 5</Text>
            </HStack>
            <Card variant="muted">
              <VStack gap={1}>
                <HStack gap={2} vAlign="center">
                  <Text weight="bold">Ami Pena</Text>
                  <Text type="supporting">2 days ago</Text>
                </HStack>
                <HStack gap={1}>
                  {[1, 2, 3, 4, 5].map((s) => <Icon key={s} icon="success" />)}
                </HStack>
                <Text>Absolutely love this product! The quality exceeds expectations.</Text>
              </VStack>
            </Card>
          </VStack>
        </Tab>
      </TabList>
    </VStack>
  );
}
