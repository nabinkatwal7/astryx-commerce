"use client";

import { useState } from "react";
import { products } from "@/components/products";
import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";
import { Card } from "@astryxdesign/core/Card";
import { Divider } from "@astryxdesign/core/Divider";
import { Grid } from "@astryxdesign/core/Grid";
import { Icon } from "@astryxdesign/core/Icon";
import { HStack, Section, VStack } from "@astryxdesign/core/Layout";
import { Pagination } from "@astryxdesign/core/Pagination";
import { Selector } from "@astryxdesign/core/Selector";
import { Heading, Text } from "@astryxdesign/core/Text";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Thumbnail } from "@astryxdesign/core/Thumbnail";

const categories = ["All", "Wearables", "Audio", "Bags", "Home", "Food"];

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const pageSize = 8;

  const filtered = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <VStack gap={6}>
      <Section>
        <Heading level={1}>All Products</Heading>
        <Text type="large" color="secondary">
          {filtered.length} results
        </Text>
      </Section>

      <HStack gap={6} wrap="wrap" vAlign="start">
        <VStack gap={3} style={{ width: 240, minWidth: 200, flexShrink: 0 }}>
          <Text weight="bold">Category</Text>
          <VStack gap={1}>
            {categories.map((cat) => (
              <Button
                key={cat}
                label={cat}
                variant={selectedCategory === cat ? "primary" : "ghost"}
                size="sm"
                onClick={() => { setSelectedCategory(cat); setPage(1); }}
                style={{ justifyContent: "flex-start" }}
              />
            ))}
          </VStack>
          <Divider />
          <Text weight="bold">Price</Text>
          <HStack gap={1} wrap="wrap">
            <Badge label="Under $25" variant="neutral" />
            <Badge label="$25-$50" variant="neutral" />
            <Badge label="$50-$100" variant="neutral" />
            <Badge label="$100+" variant="neutral" />
          </HStack>
          <Divider />
          <Text weight="bold">Rating</Text>
          <HStack gap={1}>
            {[4, 3, 2, 1].map((r) => (
              <Button
                key={r}
                label={`${r}+ stars`}
                variant="ghost"
                size="sm"
                style={{ justifyContent: "flex-start" }}
              />
            ))}
          </HStack>
        </VStack>

        <VStack gap={4} style={{ flex: 1, minWidth: 0 }}>
          <HStack gap={3} vAlign="center" wrap="wrap">
            <TextInput label="Search products" value="" onChange={() => {}} placeholder="Search..." />
            <Selector
              label="Sort by"
              options={[
                { label: "Price: Low to High", value: "price-asc" },
                { label: "Price: High to Low", value: "price-desc" },
                { label: "Rating", value: "rating" },
              ]}
            />
            <Text type="supporting" color="secondary">
              Page {page} of {totalPages}
            </Text>
          </HStack>

          <Grid columns={{ minWidth: 260, max: 3 }} gap={4}>
            {paged.map((p) => (
              <Card key={p.id}>
                <VStack gap={2}>
                  <Thumbnail src={p.image} alt={p.name} style={{ height: 200, objectFit: "cover" }} />
                  <HStack gap={2} vAlign="center">
                    {p.badge && <Badge label={p.badge} variant={p.badgeVariant as any} />}
                    {!p.inStock && <Badge label="Out of stock" variant="error" />}
                  </HStack>
                  <Heading level={3}>{p.name}</Heading>
                  <Text type="supporting" color="secondary">{p.category}</Text>
                  <HStack gap={1}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Icon key={s} icon="success" />
                    ))}
                    <Text type="supporting" color="secondary">({p.rating})</Text>
                  </HStack>
                  <HStack gap={2} vAlign="center">
                    <Heading level={3}>${p.price}</Heading>
                    {p.originalPrice && (
                      <Text color="secondary" hasStrikethrough>${p.originalPrice}</Text>
                    )}
                  </HStack>
                  <Button
                    label={p.inStock ? "Add to cart" : "Notify me"}
                    variant={p.inStock ? "primary" : "secondary"}
                    isDisabled={!p.inStock}
                  />
                </VStack>
              </Card>
            ))}
          </Grid>

          <HStack hAlign="center">
            <Pagination
              page={page}
              onChange={setPage}
              totalPages={totalPages}
              variant="pages"
              siblingCount={1}
            />
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
