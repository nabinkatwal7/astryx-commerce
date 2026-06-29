'use client';

import { useState } from 'react';
import { Heading, Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { IconButton } from '@astryxdesign/core/IconButton';
import { Card } from '@astryxdesign/core/Card';
import { Badge } from '@astryxdesign/core/Badge';
import { Icon } from '@astryxdesign/core/Icon';
import { VStack, HStack } from '@astryxdesign/core/Layout';
import { StatusDot } from '@astryxdesign/core/StatusDot';
import { Table, TableRow, TableCell, TableHeaderCell, proportional } from '@astryxdesign/core/Table';
import { Pagination } from '@astryxdesign/core/Pagination';
import { Timestamp } from '@astryxdesign/core/Timestamp';
import { Toolbar } from '@astryxdesign/core/Toolbar';
import { TextInput } from '@astryxdesign/core/TextInput';
import { orders } from '@/components/products';

const dotVariant: Record<string, 'success' | 'warning' | 'neutral' | 'error'> = {
  confirmed: 'neutral',
  shipped: 'warning',
  delivered: 'success',
  cancelled: 'error',
};

const columns = [
  { key: 'order', label: 'Order', width: proportional(1) },
  { key: 'date', label: 'Date', width: proportional(1.5) },
  { key: 'status', label: 'Status', width: proportional(1) },
  { key: 'items', label: 'Items', width: proportional(0.5) },
  { key: 'total', label: 'Total', width: proportional(1) },
  { key: 'actions', label: '', width: proportional(0.5) },
];

const PAGE_SIZE = 5;

export default function OrdersPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(orders.length / PAGE_SIZE);
  const pageData = orders.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <VStack gap={6}>
      <Heading level={1}>Order History</Heading>

      <Card>
        <VStack gap={4}>
          <Toolbar
            label="Order actions"
            startContent={
              <TextInput label="Search orders" placeholder="Search by order ID..." value="" onChange={() => {}} />
            }
            endContent={
              <HStack gap={1}>
                <Button label="Filter" variant="secondary" icon={<Icon icon="funnel" />} />
                <Button label="Export" variant="ghost" icon={<Icon icon="arrowDown" />} />
              </HStack>
            }
          />

          <Table columns={columns} dividers="rows" density="compact">
            <TableRow>
              <TableHeaderCell>Order</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Items</TableHeaderCell>
              <TableHeaderCell>Total</TableHeaderCell>
              <TableHeaderCell />
            </TableRow>
            {pageData.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Text weight="bold">#{order.id}</Text>
                </TableCell>
                <TableCell>
                  <Timestamp value={new Date(order.date).getTime()} />
                </TableCell>
                <TableCell>
                  <HStack gap={1} vAlign="center">
                    <StatusDot variant={dotVariant[order.status]} label={order.status} />
                    <Badge label={order.status.charAt(0).toUpperCase() + order.status.slice(1)} variant={dotVariant[order.status] as any} />
                  </HStack>
                </TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>
                  <Text weight="bold">${order.total}</Text>
                </TableCell>
                <TableCell>
                  <IconButton label="View details" icon={<Icon icon="chevronRight" />} variant="ghost" size="sm" />
                </TableCell>
              </TableRow>
            ))}
          </Table>

          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={setPage}
          />
        </VStack>
      </Card>
    </VStack>
  );
}
