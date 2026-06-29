"use client";

import { products } from "@/components/products";
import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";
import { Card } from "@astryxdesign/core/Card";
import { Grid } from "@astryxdesign/core/Grid";
import { Icon } from "@astryxdesign/core/Icon";
import { HStack, Section, VStack } from "@astryxdesign/core/Layout";
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@astryxdesign/core/SegmentedControl";
import { Selector } from "@astryxdesign/core/Selector";
import { Heading, Text } from "@astryxdesign/core/Text";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Thumbnail } from "@astryxdesign/core/Thumbnail";

export default function ProductsPage() {
  return (
    <VStack gap={6}>
      <Section heading="All Products">
        <VStack gap={4}>
          <HStack gap={4} vAlign="center" wrap="wrap">
            <TextInput label="Search products" value="" onChange={() => {}} />
            <Selector
              label="Category"
              placeholder="All categories"
              options={["Wearables", "Audio", "Bags", "Home", "Food"].map(
                (c) => ({ label: c, value: c }),
              )}
            />
            <Selector
              label="Sort by"
              options={[
                { label: "Price: Low to High", value: "price-asc" },
                { label: "Price: High to Low", value: "price-desc" },
                { label: "Rating", value: "rating" },
              ]}
            />
            <SegmentedControl label="View">
              <SegmentedControlItem label="Grid" isSelected />
              <SegmentedControlItem label="List" />
            </SegmentedControl>
          </HStack>

          <Grid columns={{ minWidth: 280, max: 4 }} gap={4}>
            {products.map((p) => (
              <Card key={p.id}>
                <VStack gap={2}>
                  <Thumbnail src={p.image} alt={p.name} />
                  <HStack gap={2} vAlign="center">
                    {p.badge && (
                      <Badge label={p.badge} variant={p.badgeVariant as any} />
                    )}
                    {!p.inStock && (
                      <Badge label="Out of stock" variant="error" />
                    )}
                  </HStack>
                  <Heading level={3}>{p.name}</Heading>
                  <Text type="supporting">{p.category}</Text>
                  <Text>{p.description}</Text>
                  <HStack gap={2} vAlign="center">
                    <Heading level={3}>${p.price}</Heading>
                    {p.originalPrice && (
                      <Text color="secondary" hasStrikethrough>
                        ${p.originalPrice}
                      </Text>
                    )}
                  </HStack>
                  <HStack gap={1}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        icon={"success"}
                      />
                    ))}
                    <Text type="supporting">({p.rating})</Text>
                  </HStack>
                  <Button
                    label={p.inStock ? "Add to cart" : "Notify me"}
                    variant={p.inStock ? "primary" : "secondary"}
                    disabled={!p.inStock}
                  />
                </VStack>
              </Card>
            ))}
          </Grid>
        </VStack>
      </Section>
    </VStack>
  );
}
