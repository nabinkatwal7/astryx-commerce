'use client';

import { useState } from 'react';
import { Heading, Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Card } from '@astryxdesign/core/Card';
import { Badge } from '@astryxdesign/core/Badge';
import { Icon } from '@astryxdesign/core/Icon';
import { VStack, HStack, Section } from '@astryxdesign/core/Layout';
import { Table, TableRow, TableCell, TableHeaderCell, proportional } from '@astryxdesign/core/Table';
import { TextInput } from '@astryxdesign/core/TextInput';
import { Selector } from '@astryxdesign/core/Selector';
import { Pagination } from '@astryxdesign/core/Pagination';
import { orders } from '@/components/products';

const statusVariant: Record<string, 'info' | 'success' | 'warning' | 'error'> = {
  confirmed: 'info',
  shipped: 'warning',
  delivered: 'success',
  cancelled: 'error',
};

export default function OrdersPage() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(orders.length / pageSize);
  const paged = orders.slice((page - 1) * pageSize, page * pageSize);

  return (
    <VStack gap={6}>
      <Heading level={1}>Your Orders</Heading>

      <HStack gap={3} wrap="wrap" vAlign="center">
        <TextInput label="Search orders" placeholder="Search by order ID..." value="" onChange={() => {}} />
        <Selector
          label="Filter"
          options={[
            { label: 'All Orders', value: 'all' },
            { label: 'Last 30 days', value: '30' },
            { label: 'Last 6 months', value: '180' },
          ]}
        />
      </HStack>

      <Section>
        <Table columns={[
          { key: 'order', header: 'Order', width: proportional(1) },
          { key: 'date', header: 'Date', width: proportional(1) },
          { key: 'status', header: 'Status', width: proportional(1) },
          { key: 'total', header: 'Total', width: proportional(1) },
          { key: 'action', header: '', width: proportional(1) },
        ]}>
          <TableRow>
            <TableHeaderCell>Order</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Total</TableHeaderCell>
            <TableHeaderCell />
          </TableRow>
          {paged.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <Text weight="bold">#{order.id}</Text>
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <Badge
                  label={order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  variant={statusVariant[order.status]}
                />
              </TableCell>
              <TableCell>
                <Text weight="bold">${order.total.toFixed(2)}</Text>
                <Text type="supporting" color="secondary">{order.items} item{order.items > 1 ? 's' : ''}</Text>
              </TableCell>
              <TableCell>
                <HStack gap={2}>
                  <Button label="View Order" variant="secondary" size="sm" />
                  <Button label="Track" variant="ghost" size="sm" />
                </HStack>
              </TableCell>
            </TableRow>
          ))}
        </Table>

        <HStack hAlign="center" style={{ marginTop: 16 }}>
          <Pagination
            page={page}
            onChange={setPage}
            totalPages={totalPages}
            variant="pages"
          />
        </HStack>
      </Section>

      <Section>
        <Heading level={2}>Order #1043 — In Transit</Heading>
        <Card variant="muted">
          <VStack gap={3}>
            <HStack gap={4} wrap="wrap">
              <VStack gap={1}>
                <Text type="supporting" color="secondary">Arriving</Text>
                <Text weight="bold">Tuesday, July 1</Text>
              </VStack>
              <VStack gap={1}>
                <Text type="supporting" color="secondary">Shipped via</Text>
                <Text weight="bold">UPS Ground</Text>
              </VStack>
              <VStack gap={1}>
                <Text type="supporting" color="secondary">Tracking</Text>
                <Text weight="bold">1Z999AA10123456784</Text>
              </VStack>
            </HStack>
            <Button label="Track Package" variant="primary" size="sm" icon={<Icon icon="search" />} />
          </VStack>
        </Card>
      </Section>
    </VStack>
  );
}
