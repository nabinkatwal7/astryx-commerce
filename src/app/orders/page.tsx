'use client';

import { Heading, Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { IconButton } from '@astryxdesign/core/IconButton';
import { Card } from '@astryxdesign/core/Card';
import { Badge } from '@astryxdesign/core/Badge';
import { Divider } from '@astryxdesign/core/Divider';
import { Icon } from '@astryxdesign/core/Icon';
import { VStack, HStack, Section } from '@astryxdesign/core/Layout';
import { StatusDot } from '@astryxdesign/core/StatusDot';
import { Table, TableRow, TableCell, TableHeaderCell, proportional, useTableSortable, useTablePagination, paginateData } from '@astryxdesign/core/Table';
import { Pagination } from '@astryxdesign/core/Pagination';
import { Timestamp } from '@astryxdesign/core/Timestamp';
import { Toolbar } from '@astryxdesign/core/Toolbar';
import { TextInput } from '@astryxdesign/core/TextInput';
import { orders } from '@/components/products';

const statusColor: Record<string, 'success' | 'warning' | 'info' | 'error'> = {
  confirmed: 'info',
  shipped: 'warning',
  delivered: 'success',
  cancelled: 'error',
};

const columns = [
  { id: 'order', label: 'Order', width: proportional(1) },
  { id: 'date', label: 'Date', width: proportional(1.5) },
  { id: 'status', label: 'Status', width: proportional(1) },
  { id: 'items', label: 'Items', width: proportional(0.5) },
  { id: 'total', label: 'Total', width: proportional(1) },
  { id: 'actions', label: '', width: proportional(0.5) },
];

export default function OrdersPage() {
  const sortable = useTableSortable({ columns, defaultSort: { id: 'date', direction: 'desc' } });
  const sortedData = sortable.applySort(orders);
  const pagination = useTablePagination({ data: sortedData, defaultPageSize: 5 });

  return (
    <VStack gap={6}>
      <Heading level={1}>Order History</Heading>

      <Card>
        <VStack gap={4}>
          <Toolbar>
            <TextInput label="Search orders" placeholder="Search by order ID..." value="" onChange={() => {}} />
            <Button label="Filter" variant="secondary" icon={<Icon icon="funnel" />} />
            <Button label="Export" variant="ghost" icon={<Icon icon="arrowDown" />} />
          </Toolbar>

          <Table columns={columns} sortable={sortable} dividers="rows" density="compact">
            <TableRow>
              <TableHeaderCell sortKey="order">Order</TableHeaderCell>
              <TableHeaderCell sortKey="date">Date</TableHeaderCell>
              <TableHeaderCell sortKey="status">Status</TableHeaderCell>
              <TableHeaderCell sortKey="items">Items</TableHeaderCell>
              <TableHeaderCell sortKey="total">Total</TableHeaderCell>
              <TableHeaderCell />
            </TableRow>
            {paginateData(pagination).map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Text weight="bold">#{order.id}</Text>
                </TableCell>
                <TableCell>
                  <Timestamp value={new Date(order.date).getTime()} />
                </TableCell>
                <TableCell>
                  <HStack gap={1} vAlign="center">
                    <StatusDot variant={statusColor[order.status]} />
                    <Badge label={order.status.charAt(0).toUpperCase() + order.status.slice(1)} variant={statusColor[order.status]} />
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
            page={pagination.page}
            totalPages={pagination.totalPages}
            onChange={pagination.setPage}
          />
        </VStack>
      </Card>
    </VStack>
  );
}
