'use client';

import { Heading, Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { IconButton } from '@astryxdesign/core/IconButton';
import { Card } from '@astryxdesign/core/Card';
import { Badge } from '@astryxdesign/core/Badge';
import { Divider } from '@astryxdesign/core/Divider';
import { Icon } from '@astryxdesign/core/Icon';
import { VStack, HStack, Section } from '@astryxdesign/core/Layout';
import { Table, TableRow, TableCell, TableHeaderCell, proportional } from '@astryxdesign/core/Table';
import { NumberInput } from '@astryxdesign/core/NumberInput';
import { Thumbnail } from '@astryxdesign/core/Thumbnail';
import { MetadataList, MetadataListItem } from '@astryxdesign/core/MetadataList';

const columns = [
  { key: 'product', header: 'Product', width: proportional(4) },
  { key: 'price', header: 'Price', width: proportional(1) },
  { key: 'quantity', header: 'Quantity', width: proportional(1.5) },
  { key: 'total', header: 'Total', width: proportional(1) },
  { key: 'action', header: '', width: proportional(0.5) },
];

const cartRows = [
  { id: '1', name: 'Minimalist Watch', price: 199, quantity: 1, total: 199, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
  { id: '3', name: 'Wireless Headphones', price: 249, quantity: 2, total: 498, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
  { id: '2', name: 'Canvas Backpack', price: 89, quantity: 1, total: 89, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop' },
];

export default function CartPage() {
  const subtotal = cartRows.reduce((sum, row) => sum + row.total, 0);

  return (
    <VStack gap={6}>
      <Heading level={1}>
        Shopping Cart <Badge label={cartRows.length} variant="info" />
      </Heading>

      <HStack gap={6} wrap="wrap" vAlign="start">
        <VStack gap={4} style={{ flex: 1, minWidth: 0 }}>
          <Text type="large" color="secondary">
            Subtotal ({cartRows.length} items): <strong>${subtotal.toFixed(2)}</strong>
          </Text>

          <Table columns={columns} dividers="rows">
            <TableRow>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Quantity</TableHeaderCell>
              <TableHeaderCell>Total</TableHeaderCell>
              <TableHeaderCell />
            </TableRow>
            {cartRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <HStack gap={3} vAlign="center">
                    <Thumbnail src={row.image} alt={row.name} style={{ width: 80, height: 80, borderRadius: 4, objectFit: 'cover' }} />
                    <VStack gap={0}>
                      <Text weight="bold">{row.name}</Text>
                      <Text type="supporting" color="secondary">SKU: AST-{row.id}-001</Text>
                      <Badge label="In Stock" variant="success" />
                    </VStack>
                  </HStack>
                </TableCell>
                <TableCell>${row.price.toFixed(2)}</TableCell>
                <TableCell>
                  <NumberInput label={`Qty-${row.id}`} isLabelHidden value={row.quantity} min={1} max={99} onChange={() => {}} style={{ width: 80 }} />
                </TableCell>
                <TableCell>
                  <Text weight="bold">${row.total.toFixed(2)}</Text>
                </TableCell>
                <TableCell>
                  <IconButton label="Remove" icon={<Icon icon="close" />} variant="ghost" size="sm" />
                </TableCell>
              </TableRow>
            ))}
          </Table>

          <HStack gap={3}>
            <Button label="Continue Shopping" variant="ghost" icon={<Icon icon="chevronLeft" />} />
            <Button label="Update Cart" variant="secondary" />
          </HStack>
        </VStack>

        <VStack gap={3} style={{ width: 320, flexShrink: 0 }}>
          <Card>
            <VStack gap={3}>
              <Heading level={2}>Order Summary</Heading>
              <MetadataList>
                <MetadataListItem label="Items">{`${cartRows.length}`}</MetadataListItem>
                <MetadataListItem label="Subtotal">{`$${subtotal.toFixed(2)}`}</MetadataListItem>
                <MetadataListItem label="Shipping">$12.00</MetadataListItem>
                <MetadataListItem label="Tax">{`$${(subtotal * 0.08).toFixed(2)}`}</MetadataListItem>
              </MetadataList>
              <Divider />
              <HStack gap={2} vAlign="center">
                <Heading level={3}>Order Total</Heading>
                <Heading level={2} color="primary">${(subtotal + 12 + subtotal * 0.08).toFixed(2)}</Heading>
              </HStack>
              <Badge label="Free shipping on orders over $50!" variant="success" />
              <Button label="Proceed to Checkout" variant="primary" />
              <Button label="Pay with PayPal" variant="secondary" icon={<Icon icon="calendar" />} />
            </VStack>
          </Card>
          <Card variant="muted">
            <VStack gap={2}>
              <HStack gap={2} vAlign="center">
                <Icon icon="check" />
                <Text weight="bold">Secure Checkout</Text>
              </HStack>
              <Text type="supporting" color="secondary">SSL encrypted. Your payment info is safe.</Text>
            </VStack>
          </Card>
        </VStack>
      </HStack>
    </VStack>
  );
}
