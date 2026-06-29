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
import { List, ListItem } from '@astryxdesign/core/List';
import { MetadataList, MetadataListItem } from '@astryxdesign/core/MetadataList';
import { EmptyState } from '@astryxdesign/core/EmptyState';
import { Link } from '@astryxdesign/core/Link';

const columns = [
  { key: 'product', label: 'Product', width: proportional(3) },
  { key: 'price', label: 'Price', width: proportional(1) },
  { key: 'quantity', label: 'Quantity', width: proportional(1) },
  { key: 'total', label: 'Total', width: proportional(1) },
  { key: 'action', label: '', width: proportional(0.5) },
];

const cartRows = [
  { id: '1', name: 'Minimalist Watch', price: 199, quantity: 1, total: 199, image: '/neutral/preview-watch.png' },
  { id: '3', name: 'Wireless Headphones', price: 249, quantity: 2, total: 498, image: '/neutral/preview-headphones.png' },
  { id: '2', name: 'Canvas Backpack', price: 89, quantity: 1, total: 89, image: '/neutral/preview-backpack.png' },
];

export default function CartPage() {
  const subtotal = cartRows.reduce((sum, row) => sum + row.total, 0);

  return (
    <VStack gap={6}>
      <Heading level={1}>
        Shopping Cart <Badge label={cartRows.length} variant="info" />
      </Heading>

      <HStack gap={6} wrap="wrap" vAlign="start">
        <VStack gap={4}>
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
                    <Thumbnail src={row.image} alt={row.name} />
                    <VStack gap={0}>
                      <Text weight="bold">{row.name}</Text>
                      <Text type="supporting">SKU: AST-{row.id}-001</Text>
                    </VStack>
                  </HStack>
                </TableCell>
                <TableCell>${row.price}</TableCell>
                <TableCell>
                  <NumberInput label={`Qty-${row.id}`} isLabelHidden value={row.quantity} min={1} max={99} onChange={() => {}} />
                </TableCell>
                <TableCell>
                  <Text weight="bold">${row.total}</Text>
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

        <Card width={320}>
          <VStack gap={3}>
            <Heading level={2}>Order Summary</Heading>
            <MetadataList>
              <MetadataListItem label="Subtotal" value={`$${subtotal}`} />
              <MetadataListItem label="Shipping" value="$12.00" />
              <MetadataListItem label="Tax" value={`$${(subtotal * 0.08).toFixed(2)}`} />
            </MetadataList>
            <Divider />
            <HStack gap={2} vAlign="center">
              <Heading level={3}>Total</Heading>
              <Heading level={2}>${(subtotal + 12 + subtotal * 0.08).toFixed(2)}</Heading>
            </HStack>
            <Badge label="Free shipping on orders over $50!" variant="success" />
            <Button label="Proceed to Checkout" variant="primary" />
            <Button label="Pay with PayPal" variant="secondary" icon={<Icon icon="calendar" />} />
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
}
