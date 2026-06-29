"use client";

import { products } from "@/components/products";
import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";
import { Card } from "@astryxdesign/core/Card";
import { Carousel } from "@astryxdesign/core/Carousel";
import { Grid } from "@astryxdesign/core/Grid";
import { Icon } from "@astryxdesign/core/Icon";
import { HStack, Section, VStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Thumbnail } from "@astryxdesign/core/Thumbnail";
import { Avatar } from "@astryxdesign/core/Avatar";
import { AvatarGroup } from "@astryxdesign/core/AvatarGroup";
import { Divider } from "@astryxdesign/core/Divider";

const categories = [
  { name: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop", count: 12 },
  { name: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", count: 8 },
  { name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", count: 6 },
  { name: "Home", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop", count: 10 },
  { name: "Food", image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300&h=300&fit=crop", count: 15 },
];

const deals = products.filter(p => p.originalPrice).slice(0, 4);

export default function HomePage() {
  return (
    <VStack gap={6}>
      <Card variant="muted" style={{ padding: 0, overflow: 'hidden' }}>
        <HStack gap={0} wrap="wrap" vAlign="center" hAlign="center" style={{ minHeight: 320 }}>
          <VStack gap={3} style={{ flex: 1, padding: 32, minWidth: 280 }}>
            <Badge label="Summer Sale" variant="orange" />
            <Heading level={1} type="display-2">
              Little joys, everywhere you go
            </Heading>
            <Text type="large" color="secondary">
              We believe the smallest details are the ones that matter most.
              Turn an ordinary day into something worth remembering.
            </Text>
            <HStack gap={3}>
              <Button label="Shop Now" variant="primary" size="lg" />
              <Button label="Learn More" variant="secondary" size="lg" />
            </HStack>
          </VStack>
          <Thumbnail
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
            alt="Summer Sale"
            style={{ width: 320, height: 320, objectFit: 'cover' }}
          />
        </HStack>
      </Card>

      <Section>
        <Heading level={2}>Shop by Category</Heading>
        <Grid columns={5} gap={3}>
          {categories.map((cat) => (
            <Card key={cat.name} variant="default" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <VStack gap={2} vAlign="center" hAlign="center">
                <Thumbnail src={cat.image} alt={cat.name} style={{ borderRadius: '50%', width: 80, height: 80 }} />
                <Heading level={3}>{cat.name}</Heading>
                <Text type="supporting" color="secondary">{cat.count} items</Text>
              </VStack>
            </Card>
          ))}
        </Grid>
      </Section>

      <Divider />

      <Section>
        <HStack gap={3} vAlign="center">
          <Heading level={2}>Today's Deals</Heading>
          <Badge label="Limited Time" variant="error" />
        </HStack>
        <Carousel gap={4} hasButtons hasEdgeFade>
          {deals.map((p) => (
            <Card key={p.id} width={260} variant="default">
              <VStack gap={2}>
                <Thumbnail src={p.image} alt={p.name} style={{ height: 200, objectFit: 'cover' }} />
                <HStack gap={2} vAlign="center">
                  <Badge label={`-${Math.round((1 - p.price / (p.originalPrice || 1)) * 100)}%`} variant="error" />
                  <Text color="secondary" hasStrikethrough>${p.originalPrice}</Text>
                  <Heading level={3} color="primary">${p.price}</Heading>
                </HStack>
                <Text weight="bold">{p.name}</Text>
                <Text type="supporting" color="secondary">{p.description}</Text>
                <Button label="Add to cart" variant="primary" size="sm" />
              </VStack>
            </Card>
          ))}
        </Carousel>
      </Section>

      <Divider />

      <Section>
        <Heading level={2}>Featured Products</Heading>
        <Grid columns={{ minWidth: 260, max: 4 }} gap={4}>
          {products.slice(0, 8).map((p) => (
            <Card key={p.id}>
              <VStack gap={2}>
                <Thumbnail src={p.image} alt={p.name} style={{ height: 200, objectFit: 'cover' }} />
                {p.badge && <Badge label={p.badge} variant={p.badgeVariant as any} />}
                <Heading level={3}>{p.name}</Heading>
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
                <Button label="Add to cart" variant="primary" />
              </VStack>
            </Card>
          ))}
        </Grid>
      </Section>

      <Divider />

      <Section>
        <Heading level={2}>What Our Customers Say</Heading>
        <HStack gap={4} wrap="wrap" hAlign="center">
          <Card variant="muted" style={{ flex: 1, minWidth: 240 }}>
            <VStack gap={2}>
              <HStack gap={1}>
                {[1, 2, 3, 4, 5].map((s) => <Icon key={s} icon="success" />)}
              </HStack>
              <Text>&ldquo;The quality exceeded my expectations. Fast shipping too! Would recommend to anyone.&rdquo;</Text>
              <HStack gap={2} vAlign="center">
                <Avatar name="Ami Pena" size="small" />
                <Text weight="bold">Ami Pena</Text>
              </HStack>
            </VStack>
          </Card>
          <Card variant="muted" style={{ flex: 1, minWidth: 240 }}>
            <VStack gap={2}>
              <HStack gap={1}>
                {[1, 2, 3, 4, 5].map((s) => <Icon key={s} icon="success" />)}
              </HStack>
              <Text>&ldquo;Beautifully packaged and exactly as described. Will definitely order again.&rdquo;</Text>
              <HStack gap={2} vAlign="center">
                <Avatar name="John Doe" size="small" />
                <Text weight="bold">John Doe</Text>
              </HStack>
            </VStack>
          </Card>
          <Card variant="muted" style={{ flex: 1, minWidth: 240 }}>
            <VStack gap={2}>
              <HStack gap={1}>
                {[1, 2, 3, 4, 5].map((s) => <Icon key={s} icon="success" />)}
              </HStack>
              <Text>&ldquo;Amazing customer service! They went above and beyond to help me. 10/10 experience.&rdquo;</Text>
              <HStack gap={2} vAlign="center">
                <Avatar name="Jane Smith" size="small" />
                <Text weight="bold">Jane Smith</Text>
              </HStack>
            </VStack>
          </Card>
        </HStack>
        <HStack gap={2} vAlign="center" hAlign="center" style={{ marginTop: 16 }}>
          <AvatarGroup>
            <Avatar name="Ami Pena" />
            <Avatar name="John Doe" />
            <Avatar name="Jane Smith" />
            <Avatar name="Bob Wilson" />
          </AvatarGroup>
          <Text type="supporting" color="secondary">Trusted by 10,000+ customers worldwide</Text>
        </HStack>
      </Section>
    </VStack>
  );
}
